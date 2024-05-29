import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTaskTypeComponent } from './ui-task-type.component';

describe('UiTaskTypeComponent', () => {
  let component: UiTaskTypeComponent;
  let fixture: ComponentFixture<UiTaskTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTaskTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
