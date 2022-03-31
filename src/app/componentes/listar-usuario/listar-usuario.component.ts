import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/servicio/api-service.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  Usuarios: any;
  constructor(private apiService :ApiServiceService
    ) { }

  ngOnInit(): void {
    this.apiService.ObtenerUsuarios().subscribe(res =>{
      console.log(res);
      this.Usuarios = res;
    });
  }

}
