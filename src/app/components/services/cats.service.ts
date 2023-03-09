import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Cat} from "../model/cat.model";
import {Observable} from "rxjs";

@Injectable(
)
export class CatsService{
   host=environment.host
  constructor(private http:HttpClient) {
  }
  getAllCats():Observable<Cat[]>{
    return this.http.get<Cat[]>(this.host+"/cats");
  }
  getAllAvailableCats():Observable<Cat[]>{
    return this.http.get<Cat[]>(this.host+"/cats?available=true");
  }
  getAllSelectedCats():Observable<Cat[]>{
    return this.http.get<Cat[]>(this.host+"/cats?selected=true");
  }
}
