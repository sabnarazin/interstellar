import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetViewEditComponent } from './vieweditplanet.component';

describe('MetricComponent', () => {
  let component: PlanetViewEditComponent;
  let fixture: ComponentFixture<PlanetViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
