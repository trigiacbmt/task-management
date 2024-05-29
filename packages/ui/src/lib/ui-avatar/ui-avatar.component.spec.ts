import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiAvatarComponent } from './ui-avatar.component';

describe('UiAvatarComponent', () => {
  let component: UiAvatarComponent;
  let fixture: ComponentFixture<UiAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiAvatarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the avatar size', () => {
    fixture.componentRef.setInput('avatarSize', 100)
    expect(component.style().width).toBe('100px');
    expect(component.style().height).toBe('100px');
  })
});
