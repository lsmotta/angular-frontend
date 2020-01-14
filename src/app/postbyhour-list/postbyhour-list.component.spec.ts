import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbyhourListComponent } from './postbyhour-list.component';

describe('PostbyhourListComponent', () => {
  let component: PostbyhourListComponent;
  let fixture: ComponentFixture<PostbyhourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbyhourListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbyhourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
