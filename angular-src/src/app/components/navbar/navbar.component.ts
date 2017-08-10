import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService:AuthService,private flash:FlashMessagesService,  private router:Router) { }

  ngOnInit() {
  }

  onLogoutClick(){
      this.authService.logout();
      this.flash.show('deslogado',{ cssClass: 'alert-warning', timeout: 15000 });
      this.router.navigate(['/login']);
      return false;
  }

}
