import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  user:User = JSON.parse(sessionStorage.getItem('userData') as any);
  
  ngOnInit(): void {
  }

}
