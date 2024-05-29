import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Project, SafeAny } from "@trigiacbmt/util";
import { Observable, catchError, map, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProjectService {
    #http = inject(HttpClient)

    loadTasks(): Observable<Project> {
        return this.#http.get('/assets/project-data.json').pipe(map((res: SafeAny) => res), catchError(() => {
            return throwError(() => {
                return new Error("Can not load data....")
            })
        }))
    }
}