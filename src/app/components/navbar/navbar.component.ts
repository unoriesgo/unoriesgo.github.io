import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
user={email:""}
  constructor(public authService: AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  buscarRecurso(){
    // alert(this.user.email)
   let termino = this.user.email;
    if (this.user.email.length>=3){
this.user.email="";
  this.route.navigate(['/buscar', termino])

}else{
      alert("El termino debe ser mayor de 3 caracteres: " + this.user.email)
}

  }
}
