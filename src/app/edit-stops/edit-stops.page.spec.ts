import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditStopsPage } from './edit-stops.page';

describe('EditArrangementPage', () => {
  let component: EditStopsPage;
  let fixture: ComponentFixture<EditStopsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
