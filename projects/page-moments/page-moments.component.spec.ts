import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMomentsComponent } from './page-moments.component';

describe('PageMomentsComponent', () => {
  let component: PageMomentsComponent;
  let fixture: ComponentFixture<PageMomentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMomentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
