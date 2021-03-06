import { Component, OnInit,Output,EventEmitter,OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  @Output() sidenavToggle=new EventEmitter<void>();
  constructor(private authService:AuthService) { }
  isAuth:boolean;
  subscribed:Subscription;

  ngOnInit() {
    this.authService.authChange.subscribe(authStatus=>{
    this.isAuth=authStatus;
    });
  }
  onToggleSideNav(){
  this.sidenavToggle.emit();
  }
  ngOnDestroy(){
  this.subscribed.unsubscribe();
  }
  onClicklogout(){
    this.authService.logout();
  }
}
