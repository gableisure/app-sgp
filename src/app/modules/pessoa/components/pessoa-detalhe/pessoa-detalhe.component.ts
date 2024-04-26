import { ActivatedRoute } from '@angular/router';
import { PessoaService } from './../../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.scss']
})
export class PessoaDetalheComponent implements OnInit {

  id_pessoa: string = "";
  pessoa: any = {};
  perfis: any[] = [];
  buttonSalvarIsVisible: boolean = false;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id_pessoa = params["id"]);
    this.getPessoaById();
    this.getAllPerfil();
  }

  getPessoaById = () => this.pessoaService.getPessoaById(this.id_pessoa).subscribe(pessoa => this.pessoa = pessoa);


  getAllPerfil(): void {
    this.pessoaService.getAllPerfil().subscribe((perfis: any) => {
      this.perfis = perfis.sort((a: any, b: any) => (a.nm_perfil < b.nm_perfil ? -1 : 1));
    });
  }


  changeInput = () => {
    if(!this.buttonSalvarIsVisible) this.buttonSalvarIsVisible = !this.buttonSalvarIsVisible;
  }

}
