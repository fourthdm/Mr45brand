import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurtaComponent } from './kurta.component';

describe('KurtaComponent', () => {
  let component: KurtaComponent;
  let fixture: ComponentFixture<KurtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KurtaComponent]
    });
    fixture = TestBed.createComponent(KurtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
