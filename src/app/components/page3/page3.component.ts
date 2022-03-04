import { Component, OnInit } from '@angular/core';
import { ApiconnectService } from 'src/app/core/apiconnect.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss']
})
export class Page3Component implements OnInit {

  universities: any = [];

  constructor(private apiConnectService: ApiconnectService) { }

  ngOnInit(): void {
    this.apiConnectService
        .getInformation()
        .subscribe(response => {
          this.universities = response;
        });
  }

}
