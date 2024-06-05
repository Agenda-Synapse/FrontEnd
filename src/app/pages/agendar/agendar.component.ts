import { Component } from '@angular/core';
import { ModalConfirmarComponent } from 'src/app/components/modal-confirmar/modal-confirmar.component';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.scss']
})
export class AgendarComponent {

  data: String = "11/09/2001";
  hour: String = "00:00";



  openModal() {
    
  }

}
