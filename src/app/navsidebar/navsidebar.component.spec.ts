import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsidebarComponent } from './navsidebar.component';

describe('NavsidebarComponent', () => {
  let component: NavsidebarComponent;
  let fixture: ComponentFixture<NavsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
