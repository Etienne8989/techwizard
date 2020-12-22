import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarFolderComponent } from './side-bar-folder.component';

describe('SideBarFolderComponent', () => {
  let component: SideBarFolderComponent;
  let fixture: ComponentFixture<SideBarFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
