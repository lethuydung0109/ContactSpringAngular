import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';
import { GroupService } from '../services/group.service';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '../classes/group';

@Component({
  selector: 'app-contacts-group',
  templateUrl: './contacts-group.component.html',
  styleUrls: ['./contacts-group.component.scss']
})
export class ContactsGroupComponent implements OnInit {

  contacts : Array<Contact> = [];
  groupId : number;
  group: Group = new Group();

  constructor(private groupService : GroupService, private route: ActivatedRoute, private router: Router) { 
    this.groupId=this.route.snapshot.params.gId;
    console.log("received gId ", this.groupId);
  }

  ngOnInit(): void {
    this.groupService.getGroupById(this.groupId).subscribe(
      data => {
        this.group = data;
        console.log(data);
      }
    )
 
    let mesContacts : Array<Contact> =[];
    this.groupService.getContactsByGroupId(this.groupId).subscribe(data =>
    {
      data.forEach(c => {
        console.log("ctc groupe ",c)
        let newAd = c.address;
        newAd.resume = newAd.street+" "+newAd.city+" "+newAd.zip+" "+newAd.country;
        c.address = newAd;
        mesContacts.push(c);
      })
    })
    this.contacts=mesContacts;
  }

}
