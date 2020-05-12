import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsTokenComponent } from './sms-token.component';

describe('SmsTokenComponent', () => {
  let component: SmsTokenComponent;
  let fixture: ComponentFixture<SmsTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
