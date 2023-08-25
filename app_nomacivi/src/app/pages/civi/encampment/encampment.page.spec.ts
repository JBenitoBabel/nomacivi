import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EncampmentPage } from './encampment.page';

describe('EncampmentPage', () => {
  let component: EncampmentPage;
  let fixture: ComponentFixture<EncampmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EncampmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
