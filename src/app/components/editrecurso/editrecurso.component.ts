import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RootObject } from 'src/app/interfaces/data.interface';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-editrecurso',
  templateUrl: './editrecurso.component.html',
  styleUrls: ['./editrecurso.component.scss']
})
export class EditrecursoComponent implements OnInit {
  @Input()
  public loading: boolean = false;
  data: RootObject;
  constructor(public authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute, private ds: DataService) 
  {
    const { id } = this.activatedRoute.snapshot.params;
    this.getRecursoId(id);
   }


  ngOnInit() {
   
  }
  getRecursoId(id: string) {
    this.ds.getDataId(id).subscribe(
      (data) => {
        this.data = data;
        this.loading = true;
      },
      (err) => (alert("wwwwww"))
    );
  }
  updaterecurso(){
 
    this.ds.putdata(this.data).subscribe(
      res => {
       
        console.log(res)
        localStorage.setItem('token', res.token)
        alert("actualizado");
        this.router.navigate(['/recursos'])
      },
      err => { alert("error");} 
    )
  }
}
