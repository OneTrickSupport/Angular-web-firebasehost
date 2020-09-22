import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import {HemComponent} from './components/hem/hem.component';
import {LagComponent} from './components/lag/lag.component';
import {SpelareComponent} from './components/spelare/spelare.component';
import { LoginComponent} from './components/login/login.component';
import {AuthguardService} from './services/authguard.service';
import {DetailComponent} from './components/detail/detail.component';
import {AboutusComponent} from './components/aboutus/aboutus.component';
import {OpsComponent} from './components/ops/ops.component';


const routes: Routes = [
  {path: '', component: HemComponent, canActivate: [AuthguardService]},
  {path: 'Lag', component: LagComponent, canActivate: [AuthguardService]},
  {path: 'Hem', component: HemComponent, canActivate: [AuthguardService]},
  {path: 'Spelare', component: SpelareComponent, canActivate: [AuthguardService]},
  {path: 'login', component: LoginComponent},
  {path: 'detail/:name', component: DetailComponent, canActivate: [AuthguardService]},
  {path: 'AboutUs', component: AboutusComponent, canActivate: [AuthguardService]},
  {path: '**', component: OpsComponent}
];




@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [AuthguardService]
})
export class AppRoutingModule { }
