import { inject } from '@angular/core'
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals'
import { State, Task, TaskStatus } from '@trigiacbmt/util'
import { ProjectService } from './project.service'
import { arrayUpsert } from '@datorama/akita'
import { catchError, of, tap } from 'rxjs'

const initialState: State = {
    tasks: [],
    isLoading: false,
    users: []
} as State


export const ProjectStore = signalStore(
    {providedIn: 'root'},
    withState(initialState),
    withComputed((store) => ({
    })),
    withMethods((store, projectService = inject(ProjectService)) => ({
        addTask(task: Task): void {
            patchState(store, {tasks: [...store.tasks(), task]})
        },
        removeTask(taskId: string): void {
            const tasks = store.tasks().filter(x => x.id !== taskId);
            patchState(store, {tasks})
        },
        updateTask(task: Task): void {
            const tasks = arrayUpsert(store.tasks(), task.id, task);
            patchState(store, {tasks})
        },
        setLoading(isLoading: boolean): void {
            patchState(store, {isLoading})
        },
        loadProjects(): void {
            patchState(store, {isLoading: true})
            projectService.loadTasks().pipe(tap({
                error: (err) => {
                    patchState(store, {isLoading: false})
                    alert(err)
                }
            }), catchError(err => {
                return of({})
            })).subscribe((projects) => {
                patchState(store, {...projects, isLoading: false})
            })
        },
        lastTaskPosition(status: TaskStatus): number {
            const raw = store.tasks();
            const tasksByStatus = raw.filter(x => x.status === status);
            return tasksByStatus.length;
        },
        loadTaskById(id: string): Task | undefined {
            return store.tasks().find((x) => x.id === id);
        }
    })),
    withHooks({
        onInit(store, projectService = inject(ProjectService)) {
            // console.log('onInit')
            // patchState(store, {isLoading: true})
            // projectService.loadTasks().subscribe((projects) => {
            //     patchState(store, {...projects, isLoading: false})
            // })
        }
    })
)