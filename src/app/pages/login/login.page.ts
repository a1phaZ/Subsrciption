import { Component, OnInit }     from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router }                from '@angular/router';
import { NotificationService }   from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public notify: NotificationService
  ) {
    if (authService.isLoggedIn) {
      router.navigate(['/main']);
    }
  }

  ngOnInit() {

  }

  logIn(email, password) {
    this.authService.signIn(email.value, password.value)
      .then((res) => {
        console.log(res);
        if (this.authService.isEmailVerified) {
          this.router.navigate(['main']);
        } else {
          this.notify.showToast('Email is not verified');
          return false;
        }
      })
      .catch(err => {
        console.log(err);
        this.notify.showToast(err.message);
      });
  }
}
