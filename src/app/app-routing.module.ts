import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule} from '@angular/router';

import { DashboardComponent} from './components/dashboard/dashboard.component';
import { LoginComponent} from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { AddClientComponent} from './components/add-client/add-client.component';
import { EditClientComponent} from './components/edit-client/edit-client.component';
import { SettingsComponent} from './components/settings/settings.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ClientDetailsComponent} from './components/client-details/client-details.component';
import {Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: DashboardComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },
  {path: 'client/add', component: AddClientComponent},
  {path: 'client/edit/:id', component: EditClientComponent},
  {path: 'client/:id', component: ClientDetailsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
