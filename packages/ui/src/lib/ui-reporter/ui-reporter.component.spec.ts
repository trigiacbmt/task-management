import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiReporterComponent } from './ui-reporter.component';

describe('UiReporterComponent', () => {
  let component: UiReporterComponent;
  let fixture: ComponentFixture<UiReporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiReporterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiReporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
