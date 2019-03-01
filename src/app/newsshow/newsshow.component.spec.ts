import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsshowComponent } from './newsshow.component';

describe('NewsshowComponent', () => {
  let component: NewsshowComponent;
  let fixture: ComponentFixture<NewsshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
