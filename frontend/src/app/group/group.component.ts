import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { ContactService } from '../services/contact.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Contact } from '../classes/contact';
import { Group } from '../classes/group';
import { CompileMetadataResolver } from '@angular/compiler';
import {MatSort, Sort} from '@angular/material/sort';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})


export class GroupComponent implements OnInit {

  pageContacts:any;
  motCle:string ="";
  pageCourante:number=0;
  size:number=4;
  pages: number[] = [];

  selectedContact = new Contact();
  selectedGroup = new Group();
  groups : Array<Group> = [];
  contacts : Array<Contact> = [];

  groupId: number=0;
  contactId: number=0;
  updatedGroupName : string="";
  isAddContact:boolean=false;
  hideView : boolean=true;
  hideCreateView : boolean=true;
  groupname : string = "";

  sortedData : Group [] =[];
  searchText: string ="";
  searchGroup : string ="";
  pageOfItems : Array<any>=[];

  constructor(public groupService:GroupService, public contactService:ContactService, public http:HttpClient, public router:Router) {
      // let group : Group = new Group();
      // group.idGroup=1;
      // group.groupName="M2Miage";

      // let grp : Group = new Group();
      // grp.idGroup=2;
      // grp.groupName="Amis";

      // this.groups?.push(group);
      // this.groups?.push(grp);


      // let contact : Contact = new Contact();
      // contact.idContact=1;
      // contact.firstname="toto";
      // contact.lastname="toto";
      // contact.email="tt@gmail.com";

      // let ctc :  Contact = new Contact();
      // ctc.idContact=2;
      // ctc.firstname="tititt";
      // ctc.lastname="titi";
      // ctc.email="titi@gmail.com";

      // this.contacts?.push(contact);
      // this.contacts?.push(ctc);

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

    ngOnInit() {
      let lesGroups : Array<Group> =[];
      this.groupService.getAllGroups().subscribe(data =>
      {
        data.forEach(g => {
          console.log(g)
          console.log(g.groupName)
          lesGroups.push(g);
        })
      })
      this.groups=lesGroups;
      this.reloadData();
      this.sortedData=this.groups;
    }

    createGroup(){
      let newGroup = new Group();
      newGroup.groupName=this.groupname;
      this.groupService.createGroup(newGroup).subscribe(data => console.log("contact : ", newGroup));
      this.reloadData();
    }

    showCreateView() {
      this.hideCreateView ? this.hideCreateView=false : this.hideCreateView=true;
    }
    changeIsAddContact() {
      this.hideView ? this.hideView=false : this.hideView=true;
    }

    addContactToGroup(){
      console.log("groupiD : ", this.selectedGroup.idGroup, "cId : ", this.selectedContact.idContact);
      this.groupService.addContactToGroup(this.selectedGroup.idGroup!,this.selectedContact.idContact!).subscribe(
        data => console.log(data)
        );
      this.router.navigate(['/contactsGroup',this.selectedGroup.idGroup]);
    }

    updateGroup(g : Group)
    {
      this.router.navigate(['/updateGroup',g.idGroup]);
    }

    deleteGroup(g: Group)
    {
      if(g.idGroup != undefined)
        this.groupService.deleteGroup(g.idGroup).subscribe();
        this.groups.splice(this.groups.indexOf(g),1);
    }

    public showGroupContacts(g : Group) {
        this.router.navigate(['/contactsGroup',g.idGroup]);
    }

    reloadData()
    {
      let lesGroups : Array<Group> =[];
      this.groupService.getAllGroups().subscribe(data =>
      {
        data.forEach(g => {
          console.log(g)
          console.log(g.groupName)
          lesGroups.push(g);
        })
      })
      this.groups=lesGroups;
    }

    onChangePage(pageOfItems: Array<any>) {
      this.pageOfItems = pageOfItems;
    }
       
    // public sortData(sort : Sort)
    // {
    //   const data= this.groups.slice();
    //   if(!sort.active || sort.direction ==='')
    //   {
    //     this.groups=data;
    //     return;
    //   }

    //   this.sortedData = data.sort((a,b) => {
    //     const isAsc= sort.direction ==='asc';
    //       switch (sort.active)
    //       {
    //           case 'id' : return this.compare(a.id,b.id,isAsc);
    //           case 'groupname' : return this.compare(a.groupname,b.groupname,isAsc);
    //           // case 'firstname' : return this.compare(a.firstname,b.firstname,isAsc);
    //           // case 'lastname' : return this.compare(a.lastname,b.lastname,isAsc);   
    //           default: return 0;       
    //       }
    //   });
    // }
    

    private compare(a: number | string | undefined, b: number | string | undefined , isAsc: boolean)
    {
      if(a != undefined && b!=undefined)
        return (a < b ? -1 : 1)*(isAsc ? 1 : -1);
      else return 0;
    }

}
