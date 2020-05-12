import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBlueComponent } from './aside-blue.component';

describe('AsideBlueComponent', () => {
  let component: AsideBlueComponent;
  let fixture: ComponentFixture<AsideBlueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideBlueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBlueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
