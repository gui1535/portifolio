import { VerificaCampoService } from './../../../service/verificaCampo/verifica-campo.service';
import { ToastService } from './../../../service/toast/toast-service.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  constructor(
    private httpCliente: HttpClient,
    private validaService: VerificaCampoService,
    private toastService: ToastService,
  ) { }

  // Arrays
  servicos: any;
  projetos: any;

  // Inputs
  nome: string = '';
  email: string = '';
  descricao: string = '';
  checked_website: any;
  checked_design: any;
  checked_ecommerce: any;
  checked_mobile: any;

  // Button
  btnSubmitContatoDisabled: boolean = true;
  btnContatoIsLoading: boolean = false;

  /**
   * Ao iniciar...
   */
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

  /**
   * Verifica campo enquanto usuario digita para habilitar ou não o botão de submit
   */
  verificaCamposBtnDisabled() {
    let erro = false;
    if (!this.nome) {
      if (this.nome.length <= 3) {
        erro = true
      }
    }

    if (!this.email) {
      if (this.validaService.email(this.email)) {
        erro = true
      }
    }
    if (!this.descricao) {
      if (this.descricao.length == 0) {
        erro = true
      }
    }
    this.btnSubmitContatoDisabled = erro;
  }

  /**
   * Submit do formulario de contato
   */
  submitContato(): boolean {
    this.iniciaOuParaLoading();
    let post = this.criaObjetoEnviaEmail();
    this.httpCliente.get('https://api.elasticemail.com/v2/email/send', { params: post }).subscribe(data => {
      this.toastService.success('Email enviado com sucesso', 'Sucesso', 2500);
      this.limpaCampos();
      this.iniciaOuParaLoading();
    }, error => {
      this.toastService.error('Erro inesperado, tente mais tarde', 'Erro', 2500);
    })
    return true;
  }

  /**
   * Inicia ou para loading do botão de submit no contato
   */
  iniciaOuParaLoading(): void {
    this.btnContatoIsLoading == false ? this.btnContatoIsLoading = true : this.btnContatoIsLoading = false
    this.btnSubmitContatoDisabled = true;
  }

  /**
   * Limpa todos os campos do formulario de contato
   */
  limpaCampos() {
    this.email = '';
    this.nome = '';
    this.descricao = '';
    this.checked_design = false;
    this.checked_ecommerce = false;
    this.checked_website = false;
    this.checked_mobile = false;
  }

  /**
   * Cria objeto para enviar email
   * @returns Object
   */
  criaObjetoEnviaEmail(): any {
    return {
      from: 'guilherme.araujo1535@gmail.com',
      fromName: this.nome,
      apikey: '751A082F0ABBF888E5F6B6AAA6822D83FF280655719B5EE1E6CCF1275AE77309B0EBBCAE6E95E8D2790ABEC8598F807B',
      subject: this.nome,
      to: 'guilherme.araujo1535@gmail.com',
      bodyHtml: this.criaBodyHtmlEmail(),
      isTransactional: false
    }
  }

  /**
   * Cria Body HTML para ser enviado para o email
   * @returns string
   */
  criaBodyHtmlEmail(): string {
    let body = '';
    body += `<span>Nome: </span>${this.nome}<br>`;
    body += `<span>Email: </span>${this.email}<br>`;
    body += `<span>Design: </span>${this.checked_design}<br>`;
    body += `<span>Ecommerce: </span>${this.checked_ecommerce}<br>`;
    body += `<span>Mobile: </span>${this.checked_mobile}<br>`;
    body += `<span>WebSite: </span>${this.checked_website}<br>`;
    body += `<span>Descrição: </span>${this.descricao}<br>`;
    return body;
  }
}
