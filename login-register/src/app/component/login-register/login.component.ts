import { Component, OnInit, Input } from '@angular/core';
import { AlertifyService } from 'src/app/service/alertify.service';
import { NgbNavConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbNavConfig]
})

export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private alertify: AlertifyService, config: NgbNavConfig) { }
  ngOnInit() {
  }

  login(){
    this.alertify.success('My Dummy Login');
  }

  register(){
    this.alertify.success('My Dummy Register');
  }
}
