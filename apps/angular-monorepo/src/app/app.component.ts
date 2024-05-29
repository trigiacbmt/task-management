import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AuthStore, ProjectStore } from '@trigiacbmt/data-access';
import { UiSvgDefinationComponent } from '@trigiacbmt/ui-lib';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NzSpinModule, UiSvgDefinationComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ProjectStore]
})
export class AppComponent {
  title = 'angular-monorepo';
  #store = inject(ProjectStore);
  #authStore = inject(AuthStore);

  isLoading = computed(() => {
    return this.#store.isLoading();
  })

  constructor() {
    this.#store.loadProjects()
  }

}
