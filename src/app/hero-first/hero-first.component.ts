import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-first',
  templateUrl: './hero-first.component.html',
  styleUrls: ['./hero-first.component.css']
})
export class HeroFirstComponent implements OnInit {


 hero : any[] =[]

 myhero ={
  name:"" ,
  power:'',
  image:""
 }
 addhero(){
  this.hero.push(this.myhero)
  this.myhero ={
    name:"" ,
    power:'',
    image:""
   }

}


  constructor() { }

  ngOnInit(): void {
  }

}
