import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChangeStatusComponent } from './modal-change-status.component';

describe('ModalChangeStatusComponent', () => {
  let component: ModalChangeStatusComponent;
  let fixture: ComponentFixture<ModalChangeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalChangeStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalChangeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
