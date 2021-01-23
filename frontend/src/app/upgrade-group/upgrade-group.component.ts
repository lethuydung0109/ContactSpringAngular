import { Component, OnInit } from '@angular/core';
import { Group } from '../classes/group';
import { Router, ActivatedRoute } from '@angular/router';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-upgrade-group',
  templateUrl: './upgrade-group.component.html',
  styleUrls: ['./upgrade-group.component.scss']
})
export class UpgradeGroupComponent implements OnInit {

  groupId : number;
  updatedGroup : Group;
  groupname : string ="";

  constructor(private groupService : GroupService, private route: ActivatedRoute, private router: Router) { 
    this.groupId=this.route.snapshot.params.id;
    console.log("received gId ", this.groupId);
    this.updatedGroup = new Group();
  }

  ngOnInit(): void {
    this.groupname="Mon groupe";
    // this.groupService.getGroupById(this.groupId).subscribe(data =>
    // {     
    //     this.groupname?data.groupname : "undefined";
    // })
  }

  updateGroup()
  {
    this.updatedGroup.id=this.groupId;        
    this.updatedGroup.groupname=this.groupname;

    this.groupService.updateGroup(this.updatedGroup);
    console.log("updatedGroup ", this.updatedGroup);
    this.router.navigate(['/groups']);
  }

}
