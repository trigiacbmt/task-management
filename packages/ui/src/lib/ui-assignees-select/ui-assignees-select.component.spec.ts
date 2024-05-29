import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiAssigneesSelectComponent } from './ui-assignees-select.component';

describe('UiAssigneesSelectComponent', () => {
  let component: UiAssigneesSelectComponent;
  let fixture: ComponentFixture<UiAssigneesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAssigneesSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiAssigneesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
