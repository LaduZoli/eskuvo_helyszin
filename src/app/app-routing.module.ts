import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { LocationComponent } from './pages/location/location.component';
import { AddLocationComponent } from './pages/add-location/add-location.component';
import { LocationDetailComponent } from './pages/location-detail/location-detail.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main'},
  { path: 'main', component: MainComponent},
  { path: 'locations-list', component: LocationComponent},
  { path: 'add-location', component: AddLocationComponent},
  { path: 'edit-location/:id', component: LocationDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
