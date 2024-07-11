import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewkurtaComponent } from './viewkurta.component';

describe('ViewkurtaComponent', () => {
  let component: ViewkurtaComponent;
  let fixture: ComponentFixture<ViewkurtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewkurtaComponent]
    });
    fixture = TestBed.createComponent(ViewkurtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
