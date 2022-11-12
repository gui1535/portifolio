import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  servicos: any;
  projetos: any;

  ngOnInit(): void {
    this.preencheServicos();
    this.preencheProjetos();
  }

  /**
   * Prenche a quantidade e dados dos serviços prestados
   */
  preencheServicos(): void {
    let servicos = this.criaObjetoServicos();
    this.servicos = servicos;
  }

  /**
   * Cria objeto de serviços
   * @return Object
   */
  criaObjetoServicos(): object {
    return [
      {
        titulo: "Websites",
        descricao: "Sites mordernos para empresas que querem ser diferencial e se destacar no mercado.",
        href: "",
        icon: "bi-globe",
      },
      {
        titulo: "Design",
        descricao: "Prototipação de telas modernas para seu app ou website",
        href: "",
        icon: "bi-lightbulb",
      },
      {
        titulo: "Ecommerce",
        descricao: "Uma loja virtual propria para seu comercio",
        href: "",
        icon: "bi-shop",
      },
      {
        titulo: "Mobile",
        descricao: "Aplicativos moveis com interface e funcionalidades incriveis para atender seu negocio",
        href: "",
        icon: "bi-phone",
      },
    ];
  }

  /**
 * Prenche a quantidade e dados dos projetos
 */
  preencheProjetos(): void {
    let projetos = this.criaObjetoProjetos();
    this.projetos = projetos;
  }

  /**
   * Cria objeto de projetos
   * @return Object
   */
  criaObjetoProjetos(): object {
    return [
      {
        tag: "Em Breve",
        titulo: "Em Breve",
        imagem: "../../../assets/images/projects/em_breve.jpg",
      },
      {
        tag: "Em Breve",
        titulo: "Em Breve",
        imagem: "../../../assets/images/projects/em_breve.jpg",
      },
      {
        tag: "Em Breve",
        titulo: "Em Breve",
        imagem: "../../../assets/images/projects/em_breve.jpg",
      }
    ];
  }
}
