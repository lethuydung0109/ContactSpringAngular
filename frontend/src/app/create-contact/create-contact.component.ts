import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
import { Address } from '../classes/address';
import { PhoneNumber } from '../classes/phone-number';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {

    firstname : string = "";
    lastname : string = "";
    email : string = "";
    phone : string = "";
    cellphone : string = "";
    street : string = "";
    city : string = "";
    zip : string = "";
    country : string = "";  
  

  constructor(private router :Router,private contactService : ContactService) {
 
  }

  ngOnInit() {}

  public createContact()
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
    let contact = new Contact();
    contact.firstname=this.firstname;
    contact.lastname=this.lastname;
    contact.email=this.email;
    contact.address=address;
    contact.phone=phone;
    contact.cellPhone=cellPhone;
    
    this.contactService.createContact(contact).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['/contacts']);
      }
    );
    console.log(contact)
    
  }
  
}
