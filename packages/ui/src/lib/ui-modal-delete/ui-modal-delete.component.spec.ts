import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiModalDeleteComponent } from './ui-modal-delete.component';

describe('UiModalDeleteComponent', () => {
  let component: UiModalDeleteComponent;
  let fixture: ComponentFixture<UiModalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModalDeleteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiModalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
