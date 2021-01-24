import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';
import { phoneNumber } from '../classes/phone-number';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  contacts : Array<Contact> = [];
  pageOfItems : Array<any>=[];

  constructor(public contactService : ContactService,public router:Router) {
    // let  c: Contact = new Contact();
    // c.idContact=1;
    // c.firstname="name";
    // c.lastname="toto";
    // c.email="t.t@gmail.com";
    // c.address.resume="11 avenue auguste rodin 94350 Villiers-sur-marne";
    
    // let cellphone: phoneNumber = new phoneNumber(); 
    // cellphone.phoneKind = "portable";
    // cellphone.phoneNumber = "1111";

    // let phone: phoneNumber = new phoneNumber(); 
    // phone.phoneKind = "fixe";
    // phone.phoneNumber = "2222";

    // let phones = new Array<phoneNumber>();
    // phones.push(cellphone);
    // phones.push(phone);

    // c.phones = phones;

    // this.contacts?.push(c);
  }

  ngOnInit() {
    let lesContacts : Array<Contact> =[];
    this.contactService.getAllContacts().subscribe(data =>
    {
      data.forEach(c => { 
        let newAd = c.address;
        newAd.resume = newAd.street+" "+newAd.city+" "+newAd.zip+" "+newAd.country;
        c.address = newAd;
        lesContacts.push(c); 
      })
    })
    this.contacts=lesContacts;
  }


  updateAddressResume(contact: Contact){
    contact.address.getResume();
  }

  updateContact(contact : Contact) {
    console.log(contact.idContact);
    this.router.navigate(['/updateContact/',contact.idContact]);
  }

  deleteContact(contact: Contact) {
    if( contact.idContact != undefined)
      this.contactService.deleteContact(contact.idContact).subscribe();
      this.contacts.splice(this.contacts.indexOf(contact),1);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
