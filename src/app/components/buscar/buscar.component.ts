import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";
import { RootObject, Link } from "../../interfaces/data.interface";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  recursos: RootObject[] = [];
  recursos2: RootObject[] = null;
  loading = true;
  valor:string=" ";
  exist=true;
  mensaje:string;
  constructor(
    private ds: DataService,
    private router: Router,
    private activater:ActivatedRoute
  ) { }

  ngOnInit() {

    this.ds.getData().subscribe((recursosdata) => {
      this.recursos = recursosdata;
      //console.log("this")
     // this.filtrar();
      //this.loading = false;
      //  this.applyFilter(this.selectedGenre);
      //   this.applyFilter(this.selectedGenre);
    });
//     this.loading = false;
 this.activater.params.subscribe(params=>{
//   this.recursos = this.ds.buscar(params['termino']);
//   console.log(this.recursos);
 this.valor = params['termino'];
   this.loading = false;
// //  alert(params['termino']);
 })
 for (let index = 0; index < this.recursos.length; index++) {
   let element = this.recursos[index];
   if (element.nombre.toLowerCase().indexOf(this.valor.toLowerCase()) > -1) {
     // resultmovie.push(iterator);
    //  this.recursos.push(element);
    this.loading=false;


   } else {
     this.mensaje = "El termino de busquedad debe ser mayor de 3 caracteres" + this.valor;
   };
 }
  
  }
  filtrar(){
     this.loading=false;
    if (this.valor == '' || this.valor.length < 3){ 
     
      this.exist=false}else{
      for (const iterator of this.recursos2) {
      if (iterator.nombre.toLowerCase().indexOf(this.valor.toLowerCase()) > -1) {
        // resultmovie.push(iterator);
        this.recursos.push(iterator);
       

      }else{
        this.mensaje = "El termino de busquedad debe ser mayor de 3 caracteres" + this.valor;
      };

    };
    }
    // const resultmovie = [];
    // 
    return this.recursos;
  }
  abrirdata(id: number) {
    this.router.navigate(['/recurso', this.recursos[id]._id]);

  }
}
