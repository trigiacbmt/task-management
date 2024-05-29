import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTaskPriorityComponent } from './ui-task-priority.component';

describe('UiTaskPriorityComponent', () => {
  let component: UiTaskPriorityComponent;
  let fixture: ComponentFixture<UiTaskPriorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskPriorityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTaskPriorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
