import { FilterState } from "../types/filter.model";

export function createInitialFilterState(): FilterState {
    return {
      searchTerm: '',
      userIds: [],
      onlyMyIssue: false,
      ignoreResolved: false
    };
  }