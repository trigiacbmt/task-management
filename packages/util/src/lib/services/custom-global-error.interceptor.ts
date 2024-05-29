import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError, timer } from "rxjs";

@Injectable()

export class CustomGlobalErrorHandlerInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            retry({
                count: 3,
                delay: (_, retryCount) => timer(retryCount * 1000)
            }),
            catchError(err => {
                console.log("Error Handler in Interceptor")
                return throwError(() => {
                    console.log("Error Handler Rethrow")
                    return err
                })
            })
        )
    }
    
}