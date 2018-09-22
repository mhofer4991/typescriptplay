import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxikingComponent } from './maxiking.component';

describe('MaxikingComponent', () => {
  let component: MaxikingComponent;
  let fixture: ComponentFixture<MaxikingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxikingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxikingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
