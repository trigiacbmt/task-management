import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTypeSelectComponent } from './ui-type-select.component';

describe('UiTypeSelectComponent', () => {
  let component: UiTypeSelectComponent;
  let fixture: ComponentFixture<UiTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTypeSelectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
