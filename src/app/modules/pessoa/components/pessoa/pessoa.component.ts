import { PessoaService } from './../../pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  displayedColumns = [
    "id_pessoa",
    "nm_pessoa",
    "ed_email",
    "dt_nascimento",
    "nr_matricula_unb",
    "nr_cpf",
    "nr_registro_geral",
    "nm_orgao_emissor_rg",
    "ds_vinculo_academico"
  ];
  pessoas: any[] = [];

  constructor(
    private pessoaService: PessoaService,
  ) { }

  ngOnInit(): void {
    this.getAllPessoa();
  }

  getAllPessoa(): void {
    this.pessoaService.getAllPessoa().subscribe((pessoas: any) => {
      this.pessoas = pessoas.sort((a: any, b: any) => (a.nm_pessoa < b.nm_pessoa ? -1 : 1));
    });
  }

}
