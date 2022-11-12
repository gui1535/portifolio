import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-projeto',
  templateUrl: './card-projeto.component.html',
  styleUrls: ['./card-projeto.component.scss']
})
export class CardProjetoComponent implements OnInit {

  constructor() { }
  @Input() tag: any = '';
  @Input() titulo: any = '';
  @Input() imagem: any = '';
  ngOnInit(): void {
  }

}
