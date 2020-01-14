import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbyhashtagListComponent } from './postbyhashtag-list.component';

describe('PostbyhashtagListComponent', () => {
  let component: PostbyhashtagListComponent;
  let fixture: ComponentFixture<PostbyhashtagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbyhashtagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbyhashtagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
