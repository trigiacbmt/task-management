import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBoardFilterComponent } from './ui-board-filter.component';

describe('UiBoardFilterComponent', () => {
  let component: UiBoardFilterComponent;
  let fixture: ComponentFixture<UiBoardFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBoardFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBoardFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
