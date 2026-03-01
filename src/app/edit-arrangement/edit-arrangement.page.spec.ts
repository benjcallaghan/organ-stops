import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditArrangementPage } from './edit-arrangement.page';

describe('EditArrangementPage', () => {
  let component: EditArrangementPage;
  let fixture: ComponentFixture<EditArrangementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditArrangementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
