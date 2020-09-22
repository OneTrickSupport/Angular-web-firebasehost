import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HemComponent } from './components/hem/hem.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {LagComponent} from './components/lag/lag.component';
import { AppRoutingModule } from './app-routing.module';
import { SpelareComponent } from './components/spelare/spelare.component';

import { AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { OpsComponent } from './components/ops/ops.component';

@NgModule({
  declarations: [
    AppComponent,
    HemComponent,
    LagComponent,
    HeaderComponent,
    FooterComponent,
    SpelareComponent,
    LoginComponent,
    DetailComponent,
    AboutusComponent,
    OpsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
