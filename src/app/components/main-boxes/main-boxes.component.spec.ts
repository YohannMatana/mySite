import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBoxesComponent } from './main-boxes.component';

describe('MainBoxesComponent', () => {
  let component: MainBoxesComponent;
  let fixture: ComponentFixture<MainBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainBoxesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
