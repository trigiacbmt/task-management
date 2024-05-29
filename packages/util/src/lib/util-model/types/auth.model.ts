import { User } from "./user.model";

export interface AuthState extends User {
    token: string
}