import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryMenuComponentComponent } from './catagory-menu-component.component';

describe('CatagoryMenuComponentComponent', () => {
  let component: CatagoryMenuComponentComponent;
  let fixture: ComponentFixture<CatagoryMenuComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatagoryMenuComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryMenuComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
