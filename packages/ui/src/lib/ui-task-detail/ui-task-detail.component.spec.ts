import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTaskDetailComponent } from './ui-task-detail.component';

describe('UiTaskDetailComponent', () => {
  let component: UiTaskDetailComponent;
  let fixture: ComponentFixture<UiTaskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
