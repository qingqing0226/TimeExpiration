import { Component } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { TimeLicensingService } from './services/time.licensing.service';
import {from} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  postData: any;
  message: string = '';

  constructor(private timeservice: TimeLicensingService){}

  dateChange(e: MatDatepickerInputEvent<Date>){
    const date = e.value? e.value?.toLocaleDateString() : '';
    this.timeservice.postExpirationDate(date).subscribe(res => this.postData = res);
    if(this.postData) {
      console.log('Post response' + this.postData);
    }

    if(new Date(date).getTime() - Date.now() > 0) {
      this.message = "Expiration date is later than current date.";
    }

    
  }
}
