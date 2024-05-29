import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiBoardListComponent } from './ui-board-list.component';

describe('UiBoardListComponent', () => {
  let component: UiBoardListComponent;
  let fixture: ComponentFixture<UiBoardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiBoardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
