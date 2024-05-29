import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTaskTitleComponent } from './ui-task-title.component';

describe('UiTaskTitleComponent', () => {
  let component: UiTaskTitleComponent;
  let fixture: ComponentFixture<UiTaskTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTaskTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
