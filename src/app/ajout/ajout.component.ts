import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  myhero ={
  name:"" ,
  power:'',
  image:""
 }

 addhero(){
  this._shared.hero.push(this.myhero)
  this.myhero ={
    name:"" ,
    power:'',
    image:""
   }

}

  constructor(public _shared: SharedService) { }

  ngOnInit(): void {
  }

}
