import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../classes/contact';
import { Address } from '../classes/address';
import { phoneNumber } from '../classes/phone-number';

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
  phones = new Array<phoneNumber>();

  constructor(private contactService : ContactService, private route: ActivatedRoute, private router: Router) {
    this.contactId=this.route.snapshot.params.id;
    console.log("received cId ", this.contactId);
    this.updatedContact = new Contact();
  }

  ngOnInit(): void {

    // this.firstname="test";
    // this.lastname="test";
    // this.email="test";
    // this.phone="1111111111";       
    // this.cellphone="222222222222";
    // this.street="street";
    // this.city="city";
    // this.zip="0000";
    // this.country="fr";

    this.contactService.getContactById(this.contactId).subscribe(data =>
    {     
      this.firstname = data.firstname;
      this.lastname = data.lastname;
      this.email=data.email;      
      this.phone = data.phones[1].phoneNumber!;       
      this.cellphone = data.phones[0].phoneNumber!;
      this.street=data.address.street!;
      this.city=data.address.city!;
      this.zip=data.address.zip!;
      this.country=data.address.country!;
      console.log(data)
    });
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
    let fixePhone = new phoneNumber();
    fixePhone.phoneKind="portable";
    fixePhone.phoneNumber=this.phone;

    let cellPhone = new phoneNumber();
    cellPhone.phoneKind="fixe";
    cellPhone.phoneNumber=this.cellphone;

    
    this.phones.push(fixePhone);
    this.phones.push(cellPhone);

    console.log(this.phones);

    //Contact
    this.updatedContact.idContact=this.contactId;        
    this.updatedContact.firstname=this.firstname;
    this.updatedContact.lastname=this.lastname;
    this.updatedContact.email=this.email;
    this.updatedContact.address=address;
    this.updatedContact.phones = this.phones;

    this.contactService.updateContact(this.updatedContact).subscribe(
      data => {
        console.log("updateContact ", data);
      }
    );
    
    this.router.navigate(['/contacts']);
  }
}
