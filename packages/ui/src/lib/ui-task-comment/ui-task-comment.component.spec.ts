import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTaskCommentComponent } from './ui-task-comment.component';

describe('UiTaskCommentComponent', () => {
  let component: UiTaskCommentComponent;
  let fixture: ComponentFixture<UiTaskCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskCommentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTaskCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
