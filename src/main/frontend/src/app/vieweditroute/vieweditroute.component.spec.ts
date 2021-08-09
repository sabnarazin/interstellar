import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteViewEditComponent } from './vieweditroute.component';

describe('RouteViewEditComponent', () => {
  let component: RouteViewEditComponent;
  let fixture: ComponentFixture<RouteViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
