import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NevbarComponentComponent } from './nevbar-component.component';

describe('NevbarComponentComponent', () => {
  let component: NevbarComponentComponent;
  let fixture: ComponentFixture<NevbarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NevbarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NevbarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
