import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsComponent } from './pages/terms/terms.component';
import { DisputeComponent } from './pages/dispute/dispute.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'privacy', component:PrivacyComponent},
{path:'about', component:AboutComponent},
{path:'terms', component:TermsComponent},
{path:'dispute', component:DisputeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
