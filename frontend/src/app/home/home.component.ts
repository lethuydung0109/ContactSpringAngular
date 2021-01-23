import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public contactService : ContactService) { }

  ngOnInit(): void {

  }

  public peupleBdd()
  {
    this.contactService.peuplerBDD();
  }

}
