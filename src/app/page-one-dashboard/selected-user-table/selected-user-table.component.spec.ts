import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedUserTableComponent } from './selected-user-table.component';

describe('SelectedUserTableComponent', () => {
  let component: SelectedUserTableComponent;
  let fixture: ComponentFixture<SelectedUserTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedUserTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedUserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
