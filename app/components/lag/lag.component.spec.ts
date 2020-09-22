import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagComponent } from './lag.component';

describe('LagComponent', () => {
  let component: LagComponent;
  let fixture: ComponentFixture<LagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
