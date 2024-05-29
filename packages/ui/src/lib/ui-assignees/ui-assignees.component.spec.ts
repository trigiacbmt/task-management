import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiAssigneesComponent } from './ui-assignees.component';

describe('UiAssigneesComponent', () => {
  let component: UiAssigneesComponent;
  let fixture: ComponentFixture<UiAssigneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAssigneesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiAssigneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
