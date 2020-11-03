import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { RootObject,Link } from "../../interfaces/data.interface";
import { FormGroup, FormControl, FormArray,FormBuilder, Validators } from '@angular/forms';
import { Data } from 'src/app/models/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarrecurso',
  templateUrl: './agregarrecurso.component.html',
  styleUrls: ['./agregarrecurso.component.scss']
})
export class AgregarrecursoComponent implements OnInit {
  data = {
    nombre: '',
    imagen: '',
    descripcion: '',
    links: [
      {Plataforma: 'Telegram', url: ''},
      {Plataforma: 'Mega', url: ''},
      {Plataforma: 'Google Drive', url: ''},
      {Plataforma: 'Mediafire', url: ''}
    ],
    etiquetas: ['', '', '', '', '', '']
  }
  constructor(private ds: DataService, private router: Router) {}
  ngOnInit() {}
  addrecurso() {
    console.log(this.data)
    if(this.data.nombre.length>=10){
      this.enviarrecurso(this.data);  
    }else{alert("El recurso no tine nombre mayor de 10 caracteres")}
    
  }
  enviarrecurso(data) {
    this.ds.postdata(data).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['/recursos'])
      },
      err => console.log(err)
    )
  }
}
