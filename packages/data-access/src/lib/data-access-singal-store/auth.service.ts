import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { User } from "@trigiacbmt/util";
import { Observable, map } from "rxjs";

@Injectable({
    "providedIn": "root",
})

export class AuthService {
    #http = inject(HttpClient)

    login(): Observable<User> {
        return this.#http.get<User>('/assets/auth.json').pipe(map((res: User) => res))
    }    
}