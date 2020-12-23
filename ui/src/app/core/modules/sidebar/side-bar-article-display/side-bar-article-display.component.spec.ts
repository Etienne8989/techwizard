import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarArticleDisplayComponent } from './side-bar-article-display.component';

describe('SideBarArticleDisplayComponent', () => {
  let component: SideBarArticleDisplayComponent;
  let fixture: ComponentFixture<SideBarArticleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarArticleDisplayComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarArticleDisplayComponent);
    fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
