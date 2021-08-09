import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrafficComponent } from './edit-traffic.component';

describe('EditPlanetComponent', () => {
  let component: EditTrafficComponent;
  let fixture: ComponentFixture<EditTrafficComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrafficComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrafficComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
