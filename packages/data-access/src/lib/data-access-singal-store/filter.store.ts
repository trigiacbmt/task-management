import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { createInitialFilterState } from "@trigiacbmt/util";

export const FilterStore = signalStore(
    { providedIn: 'root' },
    withState(createInitialFilterState()),
    withComputed((store) => ({
        
    })),
    withMethods((store) => ({
        updateSearchTerm(searchTerm: string): void {
            patchState(store, { searchTerm });
        },
        toggleUserId(userId: string): void {
            const hasUser = store.userIds().includes(userId);
            const userIds = hasUser ? store.userIds().filter((x) => x !== userId) : [...store.userIds(), userId];
            patchState(store, { userIds });
        },
        toggleOnlyMyIssue(): void {
            patchState(store, { onlyMyIssue: !store.onlyMyIssue() });
        },
        toggleIgnoreResolved(): void {
            patchState(store, { ignoreResolved: !store.ignoreResolved() });
        },
        resetAll(): void {
            patchState(store, createInitialFilterState());
        },
        getOnlyMyIssue(): boolean {
            return store.onlyMyIssue();
        },
        getIgnoreResolved(): boolean {
            return store.ignoreResolved();
        },
        getAllStatuses(): boolean {
            return !!store.searchTerm() || !!store.userIds()?.length || store.onlyMyIssue() || store.ignoreResolved()
        }
    }))
)