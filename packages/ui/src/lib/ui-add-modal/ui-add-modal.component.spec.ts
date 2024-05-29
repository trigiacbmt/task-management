import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiAddModalComponent } from './ui-add-modal.component';

describe('UiAddModalComponent', () => {
  let component: UiAddModalComponent;
  let fixture: ComponentFixture<UiAddModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAddModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
