import { Component } from '@angular/core';

@Component({
  selector: 'app-perfilprop',
  templateUrl: './perfilprop.component.html',
  styleUrls: ['./perfilprop.component.scss']
})
export class PerfilpropComponent {
  services = [
    { name: 'Corte degrade', time: '01:00', price: '30,00',  },
    { name: 'Barba', time: '00:45', price: '25,00' },
    { name: 'Corte  Degrade', time: '01:30', price: '30,00' },
    { name: 'Barba', time: '00:45', price: '25,00' }
  ];
}
