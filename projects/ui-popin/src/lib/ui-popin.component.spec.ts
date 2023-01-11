import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPopinComponent } from './ui-popin.component';

describe('UiPopinComponent', () => {
  let component: UiPopinComponent;
  let fixture: ComponentFixture<UiPopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiPopinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiPopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
