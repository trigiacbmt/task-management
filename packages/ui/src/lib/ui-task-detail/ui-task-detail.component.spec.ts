import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ProjectStore } from '@trigiacbmt/data-access';
import { Task, TaskPriority, TaskStatus, TaskType } from '@trigiacbmt/util';
import { UiTaskDetailComponent } from './ui-task-detail.component';

describe('UiTaskDetailComponent', () => {
  let component: UiTaskDetailComponent;
  let fixture: ComponentFixture<UiTaskDetailComponent>;

  const mockTask = {
    id: '1',
    title: 'Mock task',
    type: TaskType.TASK,
    status: TaskStatus.BACKLOG,
    priority: TaskPriority.MEDIUM,
    listPosition: 1,
    description: 'desc',
    estimate: 0,
    timeSpent: 0,
    timeRemaining: 0,
    createdAt: '2026-11-01T00:00:00Z',
    updatedAt: '2026-11-01T00:00:00Z',
    reporterId: 'u1',
    userIds: [],
    projectId: 'p1',
  } as Task;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiTaskDetailComponent],
      providers: [
        { provide: ProjectStore, useValue: { users: signal([]) } },
        { provide: Router, useValue: { navigate: jest.fn() } },
      ],
    })
      .overrideComponent(UiTaskDetailComponent, {
        set: { imports: [CommonModule], schemas: [NO_ERRORS_SCHEMA] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(UiTaskDetailComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('task', mockTask);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render main and sidebar blocks', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('[data-testid="task-detail-main"]')).toBeTruthy();
    const sidebar = el.querySelector('[data-testid="task-detail-sidebar"]');
    expect(sidebar).toBeTruthy();
    expect(sidebar?.textContent).toContain('Details');
  });
});
