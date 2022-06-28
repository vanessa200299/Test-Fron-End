import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FABComponent } from './fab.component';

describe('FABComponent', () => {
  let component: FABComponent;
  let fixture: ComponentFixture<FABComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FABComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
