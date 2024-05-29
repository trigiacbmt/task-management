import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiReporterSelectComponent } from './ui-reporter-select.component';

describe('UiReporterSelectComponent', () => {
  let component: UiReporterSelectComponent;
  let fixture: ComponentFixture<UiReporterSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiReporterSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiReporterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
