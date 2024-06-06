import { ProprietarioService } from './../../shared/service/proprietario.service';
import { Component, OnInit } from '@angular/core';
import { Loja } from 'src/app/models/shop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: Loja[] = []

  constructor(private proprietarioService: ProprietarioService) { }
  ngOnInit(): void {
    this.listarLojas()
  }

  listarLojas() {
    return this.proprietarioService.getEstabelecimentos().subscribe(card => {
      console.log(card);
    })
  }

}
