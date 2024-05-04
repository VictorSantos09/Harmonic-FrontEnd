import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCrudRadioComponent } from './page-crud-radio.component';

describe('PageCrudRadioComponent', () => {
  let component: PageCrudRadioComponent;
  let fixture: ComponentFixture<PageCrudRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCrudRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageCrudRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
