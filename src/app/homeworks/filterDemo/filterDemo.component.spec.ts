import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDemoComponent } from './filterDemo.component';

describe('FilterDemoComponent', () => {
  let component: FilterDemoComponent;
  let fixture: ComponentFixture<FilterDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
