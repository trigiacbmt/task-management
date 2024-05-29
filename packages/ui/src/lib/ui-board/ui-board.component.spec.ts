import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBoardComponent } from './ui-board.component';

describe('UiBoardComponent', () => {
  let component: UiBoardComponent;
  let fixture: ComponentFixture<UiBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
