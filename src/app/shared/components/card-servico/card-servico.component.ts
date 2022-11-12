import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.scss']
})
export class CardServicoComponent implements OnInit {

  constructor() { }
  
  // Propriedades
  @Input() titulo = '';
  @Input() descricao = '';
  @Input() href = '';
  @Input() icon = '';

  ngOnInit(): void {
  }

}
