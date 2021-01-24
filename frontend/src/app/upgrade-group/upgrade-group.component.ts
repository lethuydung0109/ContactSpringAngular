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

  groupId : Number;
  updatedGroup : Group = new Group();
  groupName : string ="";

  constructor(private groupService : GroupService, private route: ActivatedRoute, private router: Router) { 
    this.groupId=this.route.snapshot.params.id;
    this.updatedGroup.idGroup=this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    let name : string ="";
    this.groupService.getGroupById(this.groupId).subscribe(data =>
    {
        console.log("received groupe ",data);
          if(data.groupName !=undefined)
            this.groupName=data.groupName;
    })
  }

  updateGroup()
  {
    console.log("groupname ", this.groupName) 
    this.updatedGroup.groupName=this.groupName;
    console.log("updatedGroup ", this.updatedGroup);
    this.groupService.updateGroup(this.updatedGroup).subscribe(
      data => {
        console.log(data);
      }
    );
    
    this.router.navigate(['/groups']);
  }

}
