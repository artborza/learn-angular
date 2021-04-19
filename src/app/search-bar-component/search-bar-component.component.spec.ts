import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponentComponent } from './search-bar-component.component';

describe('SearchBarComponentComponent', () => {
  let component: SearchBarComponentComponent;
  let fixture: ComponentFixture<SearchBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
