import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';
import { GroupService } from '../services/group.service';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contacts-group',
  templateUrl: './contacts-group.component.html',
  styleUrls: ['./contacts-group.component.scss']
})
export class ContactsGroupComponent implements OnInit {

  contacts : Array<Contact> = [];
  groupId : number;

  constructor(private groupService : GroupService, private route: ActivatedRoute, private router: Router) { 
    this.groupId=this.route.snapshot.params.id;
    console.log("received gId ", this.groupId);
  }

  ngOnInit(): void {
    this.groupService.getContactsByGroupId(1).subscribe(data => {
      this.contacts=data;
    });

    // let mesContacts : Array<Contact> =[];
    // this.groupService.getContactsByGroupId().subscribe(data =>
    // {
    //   data.forEach(c => { mesContacts.push(c); })
    // })
    // this.contacts=mesContacts;
  }

}
