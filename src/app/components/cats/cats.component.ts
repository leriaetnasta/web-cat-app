import { Component, OnInit } from '@angular/core';
import {CatsService} from "../services/cats.service";
import {Cat} from "../model/cat.model";
import {map, startWith} from "rxjs";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {
  cats$:Cat[]|null=null;//ca peut etre un null est je peux l'affecter la valeur null

  constructor(private catsService:CatsService) { }

  ngOnInit(): void {
  }

  onGetAllCats() {
    this.catsService.getAllCats()
      .pipe(
        map(data=>({dataState:"Loaded",data:data})),
        startWith(data=>(dataState:))
      )
  }
}
