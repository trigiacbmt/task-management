import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiSvgDefinationComponent } from './ui-svg-defination.component';

describe('UiSvgDefinationComponent', () => {
  let component: UiSvgDefinationComponent;
  let fixture: ComponentFixture<UiSvgDefinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiSvgDefinationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSvgDefinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
