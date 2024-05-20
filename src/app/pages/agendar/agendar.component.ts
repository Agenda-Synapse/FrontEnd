import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmarComponent } from 'src/app/components/modal-confirmar/modal-confirmar.component';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent {
  constructor( public modalService: NgbModal){}

  openModal() {
    const modalRef = this.modalService.open(ModalConfirmarComponent);
  }

}
