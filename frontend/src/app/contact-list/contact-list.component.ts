import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts : Array<Contact> = [];
  pageOfItems : Array<any>=[];

  constructor(public contactService : ContactService,public router:Router) {
    let  c: Contact = new Contact();
    c.id=1;
    c.firstname="name";
    c.lastname="toto";
    c.email="t.t@gmail.com";
    c.address.resume="11 avenue auguste rodin 94350 Villiers-sur-marne";
    c.phone.phonenumber="0203040506";
    c.cellPhone.phonenumber="010203040506";
   

    this.contacts?.push(c);
  }

  ngOnInit() {
    // let lesContacts : Array<Contact> =[];
    // this.contactService.getAllContacts().subscribe(data =>
    // {
    //   data.forEach(c => { lesContacts.push(c); })
    // })
    // this.contacts=lesContacts;
  }

  updateContact(contact: Contact) {
    this.router.navigate(['/updateContact',contact.id]);
  }

  deleteContact(contact: Contact) {
    if( contact.id != undefined)
      this.contactService.deleteContact(contact.id).subscribe();
      this.contacts.splice(this.contacts.indexOf(contact),1);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
