import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmar',
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.scss']
})
export class ModalConfirmarComponent {
  constructor( public activeModal: NgbActiveModal){}

  passBack() {
    this.activeModal.close();
  }

}
