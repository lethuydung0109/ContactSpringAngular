import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { GroupComponent } from './group/group.component';
import { ContactsGroupComponent } from './contacts-group/contacts-group.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { UpgradeGroupComponent } from './upgrade-group/upgrade-group.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'createContact', component: CreateContactComponent },
  { path: 'updateContact/:id', component: UpdateContactComponent },
  { path: 'groups', component: GroupComponent },
  { path: 'updateGroup/:id', component: UpgradeGroupComponent },
  { path: 'contactsGroup/:gId', component: ContactsGroupComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
