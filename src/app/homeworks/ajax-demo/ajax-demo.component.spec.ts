import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxDemoComponent } from './ajax-demo.component';

describe('AjaxDemoComponent', () => {
  let component: AjaxDemoComponent;
  let fixture: ComponentFixture<AjaxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjaxDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjaxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
