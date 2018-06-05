import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  farenValue = undefined
  title = 'app';

  constructor(){
    this.farenValue = 32;
    console.log("constr called");
  }

  onCelciusValueChange(data){
    console.log(data.celciusEnteredValue)
    if((data.celciusEnteredValue).trim()==''){
      this.farenValue = undefined;
    }
    else{
      var temp = data.celciusEnteredValue;
      this.farenValue  = (temp*9/5) + 32;  
    }
  }
}
