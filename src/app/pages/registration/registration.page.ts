import { Component, OnInit }     from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router }                from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  signUp(email, password) {
    this.authService.registerUser(email.value, password.value)
      .then((res) => {
        console.log(res);
        this.authService.sendVerificationMail();
        this.router.navigate(['verify-email']);
      })
      .catch((err) => console.log(err));
  }

}
