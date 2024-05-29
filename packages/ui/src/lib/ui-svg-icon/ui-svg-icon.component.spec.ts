import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSvgIconComponent } from './ui-svg-icon.component';

describe('UiSvgIconComponent', () => {
  let component: UiSvgIconComponent;
  let fixture: ComponentFixture<UiSvgIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSvgIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
