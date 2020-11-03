import {Router} from '@angular/router'
import {Component, OnInit} from '@angular/core'
import {DataService} from '../../services/data.service'
import {RootObject, Link} from '../../interfaces/data.interface'
@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.scss']
})
export class RecursosComponent implements OnInit {
  recursos: RootObject[] = null
  loading = true
  num:number;
  constructor(private ds: DataService, private router: Router) {}

  ngOnInit() {
    this.ds.getData().subscribe(recursosdata => {
      this.recursos = recursosdata
      this.num=this.recursos.length;
      console.log('this')
      this.loading = false
      //  this.applyFilter(this.selectedGenre);
      //   this.applyFilter(this.selectedGenre);
    })
  }
  abrirdata(id: number) {
    this.router.navigate(['/recurso', this.recursos[id]._id])
  }
}
