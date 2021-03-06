import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Group } from '../classes/group';
import { Observable } from 'rxjs';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  public url =environment.api_url;
  constructor(private http: HttpClient) { }

  public createGroup(group : Group) : Observable<Group>
  {
    const routeQuery=this.url+"/groups/";
    console.log("group", group)

    return this.http.post<Group>(routeQuery,group);
  }

  public updateGroup(group : Group) : Observable<any>
  {
    const routeQuery=this.url+"/groups/"+group.idGroup;
    console.log("group", group)

    return this.http.put<Group>(routeQuery,group);
  }

  public getGroupById(groupId : Number) : Observable<Group>
  {
    const routeQuery=this.url+"/groups/"+groupId;
    return this.http.get<Group>(routeQuery);
  }

  public getAllGroups() : Observable<Array<Group>>
  {
    const routeQuery=this.url+"/groups/";
    return this.http.get<Array<Group>>(routeQuery);
  }

  public getContactsByGroupId(groupId : Number) : Observable<Array<Contact>>
  {
    const routeQuery=this.url+"/contacts/group/"+groupId;
    return this.http.get<Array<Contact>>(routeQuery);
  }

  public addContactToGroup(groupId:number, contactId : number)
  {
    const routeQuery=this.url+"/contacts/group/"+groupId+"/"+contactId;
    return this.http.get<Array<Contact>>(routeQuery);
  }

  public deleteGroup (groupId :number) : Observable<any>
  {
    const routeQuery=this.url+"/groups/"+groupId;
    return this.http.delete(routeQuery);
  }

  public deleteAllGroups () : Observable<any> {
    const routeQuery=this.url+"/deleteAllGroups";
    return this.http.delete(routeQuery);
  }

}
