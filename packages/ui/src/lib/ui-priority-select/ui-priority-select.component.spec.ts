import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiPrioritySelectComponent } from './ui-priority-select.component';

describe('UiPrioritySelectComponent', () => {
  let component: UiPrioritySelectComponent;
  let fixture: ComponentFixture<UiPrioritySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiPrioritySelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiPrioritySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
