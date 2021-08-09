import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficViewEditComponent } from './viewedittraffic.component';

describe('RouteViewEditComponent', () => {
  let component: TrafficViewEditComponent;
  let fixture: ComponentFixture<TrafficViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
