
import { Component } from '@angular/core';

@Component({
  selector: 'app-hist-agenda',
  templateUrl: './hist-agenda.component.html',
  styleUrls: ['./hist-agenda.component.scss']
})
export class HistAgendaComponent {

   agendamentos = [
    {id: 1, procedimento: 'Corte degrade', data: '09/05/2024', horario: '10:20', local: 'Barbearia da Mari', status: 'Agendado'},
    {id: 2, procedimento: 'Barba completa', data: '10/05/2024', horario: '15:00', local: 'Barbearia do João', status: 'Agendado'},
    {id: 3, procedimento: 'Corte social', data: '11/05/2024', horario: '11:30', local: 'Barbearia do Pedro', status: 'Agendado'},
    {id: 4, procedimento: 'Barba simples', data: '12/05/2024', horario: '14:45', local: 'Barbearia do Carlos', status: 'Agendado'},
    {id: 5, procedimento: 'Corte e barba', data: '13/05/2024', horario: '09:00', local: 'Barbearia da Ana', status: 'Agendado'},
    {id: 6, procedimento: 'Design de sobrancelhas', data: '14/05/2024', horario: '16:20', local: 'Barbearia da Marina', status: 'Agendado'}
  ]

}
