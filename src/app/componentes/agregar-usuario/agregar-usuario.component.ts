import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/servicio/api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  formUsuarios:FormGroup;

  constructor(public form:FormBuilder, private apiService:ApiServiceService, private router:Router) { 
    this.formUsuarios = this.form.group({
      nombre: [''],
      apellido: [''],
      correo: [''],
      celular: ['']
    });
  }

  ngOnInit(): void {
  }
  enviarDatos():any{
    console.log("presionaste");

    console.log(this.formUsuarios.value);
    this.apiService.AgregarUsuario(this.formUsuarios.value).subscribe(res =>{
      this.router.navigateByUrl('/listar-usuario');
    });
    
  }

}
