import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../classes/contact';
import { Address } from '../classes/address';
import { PhoneNumber } from '../classes/phone-number';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {

  firstname : string = "";
  lastname : string = "";
  email : string = "";
  phone : string = "";
  cellphone : string = "";
  street : string = "";
  city : string = "";
  zip : string = "";
  country : string = "";  

  contactId : number;
  updatedContact : Contact;

  constructor(private contactService : ContactService, private route: ActivatedRoute, private router: Router) {
    this.contactId=this.route.snapshot.params.id;
    console.log("received cId ", this.contactId);
    this.updatedContact = new Contact();
  }

  ngOnInit(): void {

    this.firstname="test";
    this.lastname="test";
    this.email="test";
    this.phone="1111111111";       
    this.cellphone="222222222222";
    this.street="street";
    this.city="city";
    this.zip="0000";
    this.country="fr";

    // this.contactService.getContactById(this.contactId).subscribe(data =>
    // {     
    //   this.firstname?data.firstname:"undefined";
    //   this.lastname?data.lastname:"undefined";
    //   this.email?data.email:"undefined";      
    //   this.phone?data.phone.phonenumber:"undefined";       
    //   this.cellphone?data.cellPhone.phonenumber:"undefined";
    //   this.street?data.address.street:"undefined";
    //   this.city?data.address.city:"undefined";
    //   this.zip?data.address.zip:"undefined";
    //   this.country?data.address.country:"undefined";
    // });
  }

  public updateContact()
  {
    //Address
    let address = new Address();
    address.city=this.city;
    address.country=this.country;
    address.street=this.street;
    address.zip=this.zip;
    address.resume=address.street+" "+address.city+" "+address.zip+" "+address.country;

    //phones
    let phone = new PhoneNumber();
    phone.phonekind="portable";
    phone.phonenumber=this.phone;

    let cellPhone = new PhoneNumber();
    phone.phonekind="fixe";
    phone.phonenumber=this.cellphone;

    //Contact
    this.updatedContact.id=this.contactId;        
    this.updatedContact.firstname=this.firstname;
    this.updatedContact.lastname=this.lastname;
    this.updatedContact.email=this.email;
    this.updatedContact.address=address;
    this.updatedContact.phone=phone;
    this.updatedContact.cellPhone=cellPhone;

    this.contactService.updateContact(this.updatedContact);
    console.log("updateContact ", this.updatedContact);
    this.router.navigate(['/contacts']);
  }
}
