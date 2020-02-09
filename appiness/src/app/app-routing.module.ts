import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListRepoComponent } from './list-repo/list-repo.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'userrepo/:username', component:ListRepoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
