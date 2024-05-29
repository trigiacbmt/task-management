import { inject } from '@angular/core'
import { patchState, signalStore, withHooks, withState } from '@ngrx/signals'
import { createInitialAuthState } from '@trigiacbmt/util'
import { AuthService } from './auth.service'


export const AuthStore = signalStore(
    {providedIn: 'root'},
    withState(createInitialAuthState()),
    withHooks({
        onInit(store, authService = inject(AuthService)) {
            console.log('onInit')
            authService.login().subscribe((user) => {
                patchState(store, user)
            })
        }
    })
)