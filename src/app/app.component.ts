import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  farenValue = undefined
  celValue = undefined
  title = 'app';

  constructor(){
    this.farenValue = 32;
    this.celValue = 0;
    console.log("constructur Initialized");
  }

  onCelciusValueChange(data){

    if(!isNaN(data.celciusEnteredValue))
    {

        console.log("--------------------------------------------------------")
        console.log("Celcius data received by RHS function in app component")
        if((data.celciusEnteredValue).trim()==''){
          this.farenValue = undefined;
        }
        else{
          var temp = data.celciusEnteredValue;
          this.farenValue  = (temp*9/5) + 32;
          console.log("--------------------------------------------------------");  
          console.log("Binded the value passed with the Fahrehneit property of Fahrehneit component")
          console.log("##########################################################");  

        }
      }
      else{
        this.farenValue = undefined
      }
  }

  onFahrenValueChange(data){
    if(!isNaN(data.fahrenValue))
    {
      console.log("--------------------------------------------------------");
      console.log("Fahrehneit data received by RHS function in app component")
      if((data.fahrenValue).trim()==''){
        this.celValue = undefined;
      }
      else{
        var temp = data.fahrenValue;
        this.celValue  = Math.round((5/9 * (temp - 32))*1000)/1000
        console.log("--------------------------------------------------------");
        console.log("Binded the value passed with the Celcius property of Celcius component")
        console.log("##########################################################"); 
      }
    }
    else{
      this.celValue=undefined;
    }
  }

}
