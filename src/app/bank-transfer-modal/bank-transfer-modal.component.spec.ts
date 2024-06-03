import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTransferModalComponent } from './bank-transfer-modal.component';

describe('BankTransferModalComponent', () => {
  let component: BankTransferModalComponent;
  let fixture: ComponentFixture<BankTransferModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankTransferModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BankTransferModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
