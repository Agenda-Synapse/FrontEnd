import { Component } from '@angular/core';
import { Loja } from 'src/app/models/shop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cards: Loja[] = [
    {
      nome: 'Nail Beauty',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Boulevard da Beleza, 1024',
      status: 'FECHADO',
      tipo: 'Unhas'
    },
    {
      nome: 'Estúdio de Make',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Avenida da Beleza, 246',
      status: 'FECHADO',
      tipo: 'Maquiagem'
    },
    {
      nome: 'Barbearia Clássica',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Praça dos Cortes, 1011',
      status: 'ABERTO',
      tipo: 'Barbearia'
    },
    {
      nome: 'Unhas Perfeitas',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua das Flores, 680',
      status: 'ABERTO',
      tipo: 'Unhas'
    },
    {
      nome: 'Beleza Facial',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Praça do Encanto, 357',
      status: 'ABERTO',
      tipo: 'Maquiagem'
    },
    {
      nome: 'Salão Beleza Pura',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua da Harmonia, 123',
      status: 'ABERTO',
      tipo: 'Salão de Beleza'
    },
    {
      nome: 'Barbearia do JV',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua João Nunes, 123',
      status: 'ABERTO',
      tipo: 'Barbearia'
    },
    {
      nome: 'Makeup Art',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua da Moda, 135',
      status: 'ABERTO',
      tipo: 'Maquiagem'
    },
    {
      nome: 'Unhas & Cia',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua do Esmalte, 913',
      status: 'ABERTO',
      tipo: 'Unhas'
    },
    {
      nome: 'Beleza Natural',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Praça da Alegria, 789',
      status: 'ABERTO',
      tipo: 'Salão de Beleza'
    },
    {
      nome: 'Corte Perfeito',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua do Estilo, 789',
      status: 'ABERTO',
      tipo: 'Barbearia'
    },
    {
      nome: 'Estilo nas Unhas',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Praça das Estrelas, 802',
      status: 'ABERTO',
      tipo: 'Unhas'
    },
    {
      nome: 'Makeup Studio',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Boulevard da Moda, 579',
      status: 'FECHADO',
      tipo: 'Maquiagem'
    },
    {
      nome: 'Barbearia Moderna',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua da Modernidade, 1213',
      status: 'FECHADO',
      tipo: 'Barbearia'
    },
    {
      nome: 'Studio Glamour',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Avenida Elegante, 456',
      status: 'FECHADO',
      tipo: 'Salão de Beleza'
    },
    {
      nome: 'Glamour Makeup',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua do Charme, 468',
      status: 'ABERTO',
      tipo: 'Maquiagem'
    },
    {
      nome: 'Barbearia Elite',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Avenida dos Barbeiros, 456',
      status: 'FECHADO',
      tipo: 'Barbearia'
    },
    {
      nome: 'Nail Art Studio',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Avenida das Cores, 791',
      status: 'FECHADO',
      tipo: 'Unhas'
    },
    {
      nome: 'Espaço Vip Hair',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Rua do Estilo, 1011',
      status: 'ABERTO',
      tipo: 'Salão de Beleza'
    },
    {
      nome: 'Estética & Cia',
      imagemUrl: 'https://picsum.photos/200',
      endereco: 'Boulevard da Beleza, 1213',
      status: 'FECHADO',
      tipo: 'Salão de Beleza'
    }
  ]

}
