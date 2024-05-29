import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTaskDescriptionComponent } from './ui-task-description.component';

describe('UiTaskDescriptionComponent', () => {
  let component: UiTaskDescriptionComponent;
  let fixture: ComponentFixture<UiTaskDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskDescriptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTaskDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
