import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ContactsGroupComponent } from './contacts-group/contacts-group.component'; 
import { JwPaginationModule } from 'jw-angular-pagination';
import { MatSortModule } from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UpgradeGroupComponent } from './upgrade-group/upgrade-group.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    CreateContactComponent,
    FooterComponent,
    NavbarComponent,
    ContactListComponent,
    HomeComponent,
    GroupComponent,
    UpdateContactComponent,
    ContactsGroupComponent,
    UpgradeGroupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    JwPaginationModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
