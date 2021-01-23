import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
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
  //pages:Array<number>;
  groups : Array<Group> = [];
  contacts : Array<Contact> = [];

  groupId: number=0;
  contactId: number=0;
  updatedGroupName : string="";
  isAddContact:boolean=false;
  hideView : boolean=true;

  sortedData : Group [] =[];
  searchText: string ="";
  searchGroup : string ="";
  pageOfItems : Array<any>=[];

  constructor(public groupService:GroupService, public http:HttpClient, public router:Router) {

      let group : Group = new Group();
      group.id=1;
      group.groupname="M2Miage";

      let grp : Group = new Group();
      grp.id=2;
      grp.groupname="Amis";

      this.groups?.push(group);
      this.groups?.push(grp);
      

      let contact : Contact = new Contact();
      contact.id=1;
      contact.firstname="toto";
      contact.lastname="toto";
      contact.email="tt@gmail.com";

      let ctc :  Contact = new Contact();
      ctc.id=2;
      ctc.firstname="tititt";
      ctc.lastname="titi";
      ctc.email="titi@gmail.com";
      
      this.contacts?.push(contact);
      this.contacts?.push(ctc);

      //this.sortedData=this.groups;

    }

    ngOnInit() {
      // let lesGroups : Array<Group> =[];
      // this.groupService.getAllGroups().subscribe(data =>
      // {
      //   data.forEach(g => { lesGroups.push(g); })
      // })
      // this.groups=lesGroups;
    }

    changeIsAddContact()
    {

      this.hideView ? this.hideView=false : this.hideView=true;
      // if (this.isAddContact==false) return true;
      // else return false;
    }
    
    addContactToGroup(gId : number, cId : number){
      console.log("grouiD : ", gId, "cId : ", cId);
      this.groupService.addContactToGroup(gId,cId).subscribe(data => console.log(data)); 
      this.router.navigate(['/contactsGroup',gId]);     
    }
    
    updateGroup(g : Group)
    {
      this.router.navigate(['/updateGroup',g.id]);
    }
      
    deleteGroup(g: Group)
    {
      if(g.id != undefined)
        this.groupService.deleteGroup(g.id).subscribe();
        this.groups.splice(this.groups.indexOf(g),1);
    }

    public showGroupContacts(g : Group)
    {
        this.router.navigate(['/contactsGroup',g.id]);
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
