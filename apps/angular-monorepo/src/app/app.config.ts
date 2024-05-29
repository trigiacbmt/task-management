import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CustomGlobalErrorHandlerInterceptor } from '@trigiacbmt/util';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    provideAnimations(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomGlobalErrorHandlerInterceptor,
      multi: true
    }
  ],
};
