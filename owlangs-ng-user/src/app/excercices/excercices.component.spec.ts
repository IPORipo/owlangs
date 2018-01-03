import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcercicesComponent } from './excercices.component';

describe('ExcercicesComponent', () => {
  let component: ExcercicesComponent;
  let fixture: ComponentFixture<ExcercicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcercicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcercicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
