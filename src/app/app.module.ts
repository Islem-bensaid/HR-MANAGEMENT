import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { CandidatComponent } from './candidat/candidat.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { RecruterComponent } from './recruter/recruter.component';
import { HeaderComponent } from './header/header.component';
import { OfferComponent } from './Offer/offer.component';
import { SearchComponent } from './search/search.component';
import {MatDialogModule} from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    CandidatComponent,
    FooterComponent,
    AboutUsComponent,
    TestimonialComponent,
    ServicesComponent,
    HomeComponent,
    JobsComponent,
    AuthentificationComponent,
    RecruterComponent,
    HeaderComponent,
    OfferComponent,
    SearchComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
