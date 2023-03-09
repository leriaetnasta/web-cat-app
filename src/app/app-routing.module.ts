import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatsComponent} from "./components/cats/cats.component";
import {HomeComponent} from "./components/home/home.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:"cats",component:CatsComponent},
  {path:"home", component:HomeComponent},
  {path:"/", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
