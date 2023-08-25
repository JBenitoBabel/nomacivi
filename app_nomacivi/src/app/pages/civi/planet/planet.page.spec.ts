import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanetPage } from './planet.page';

describe('PlanetPage', () => {
  let component: PlanetPage;
  let fixture: ComponentFixture<PlanetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
