import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'section-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent implements OnInit {

  datosCliente: User = {nombres:"", apellidos :"" ,email:"", celular:"", mensaje :""};
  datos: string[] = [];
  formCliente: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formCliente = new FormGroup({ nombres: new FormControl('',[Validators.required, Validators.maxLength(35), Validators.pattern("[a-zA-Z' ']+")]),
      apellidos: new FormControl('', [Validators.required, Validators.maxLength(35), Validators.pattern("[a-zA-Z' ']+")]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")]),
      celular: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[z0-9]+")]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  get nombresControl(): FormControl{return this.formCliente.get('nombres') as FormControl;}
  get apellidosControl(): FormControl{return this.formCliente.get('apellidos') as FormControl;}
  get emailControl(): FormControl{return this.formCliente.get('email') as FormControl;}
  get celularControl(): FormControl{return this.formCliente.get('celular') as FormControl;}
  get mensajeControl(): FormControl{return this.formCliente.get('mensaje') as FormControl;}


  onSubmit(){
    if(this.formCliente.invalid){
      return console.log('error');
    }
    else{
      this.datosCliente.nombres = this.formCliente.get('nombres')!.value;
      this.datosCliente.apellidos = this.formCliente.get('apellidos')!.value;
      this.datosCliente.email = this.formCliente.get('email')!.value;
      this.datosCliente.celular = this.formCliente.get('celular')!.value;
      this.datosCliente.mensaje = this.formCliente.get('mensaje')!.value;
    }

  }

}
