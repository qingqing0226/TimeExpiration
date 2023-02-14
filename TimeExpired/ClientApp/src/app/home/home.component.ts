import { Component, OnInit } from '@angular/core';
import { TimeLicensingService } from '../services/time.licensing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: "<h2>Hello</h2>"
})
export class HomeComponent implements OnInit {

  constructor(private timeLicensingService: TimeLicensingService) { }

  ngOnInit(): void {
    this.timeLicensingService.getExpirationDate().toPromise().then((x) => {
      console.log(x);
    })
    }

}
