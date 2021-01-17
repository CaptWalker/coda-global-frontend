import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOneDashboardComponent } from './page-one-dashboard.component';

describe('PageOneDashboardComponent', () => {
  let component: PageOneDashboardComponent;
  let fixture: ComponentFixture<PageOneDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOneDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOneDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
