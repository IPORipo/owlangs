import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsBoxComponent } from './friends-box.component';

describe('FriendsBoxComponent', () => {
  let component: FriendsBoxComponent;
  let fixture: ComponentFixture<FriendsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
