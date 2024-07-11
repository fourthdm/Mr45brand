import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpantsComponent } from './viewpants.component';

describe('ViewpantsComponent', () => {
  let component: ViewpantsComponent;
  let fixture: ComponentFixture<ViewpantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpantsComponent]
    });
    fixture = TestBed.createComponent(ViewpantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
