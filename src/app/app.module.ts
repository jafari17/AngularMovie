import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { ClientsComponent } from './clients/clients.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NavfooterComponent } from './navfooter/navfooter.component';
import { MovielistComponent } from './movielist/movielist.component';
import { AddmovieComponent } from './addmovie/addmovie.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AdminsComponent,
    ClientsComponent,
    NotfoundComponent,
    HomeComponent,
    UserComponent,
    NavfooterComponent,
    MovielistComponent,
    AddmovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
