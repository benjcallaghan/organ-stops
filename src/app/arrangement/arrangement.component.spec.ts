import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArrangementComponent } from './arrangement.component';

describe('ArrangementComponent', () => {
  let component: ArrangementComponent;
  let fixture: ComponentFixture<ArrangementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ArrangementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
