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
  groupName : string ="";

  constructor(private groupService : GroupService, private route: ActivatedRoute, private router: Router) { 
    this.groupId=this.route.snapshot.params.id;
    console.log("received gId ", this.groupId);
    this.updatedGroup = new Group();
  }

  ngOnInit(): void {
    this.groupName="Mon groupe";
    // this.groupService.getGroupById(this.groupId).subscribe(data =>
    // {     
    //     this.groupName?data.groupname : "undefined";
    // })
  }

  updateGroup()
  {
    this.updatedGroup.idGroup=this.groupId;        
    this.updatedGroup.groupName=this.groupName;

    this.groupService.updateGroup(this.updatedGroup);
    console.log("updatedGroup ", this.updatedGroup);
    this.router.navigate(['/groups']);
  }

}
