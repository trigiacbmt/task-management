import { AuthState } from "../types/auth.model";

export function createInitialAuthState(): AuthState {
    return { token: `${new Date().getTime()}` } as AuthState;
  }