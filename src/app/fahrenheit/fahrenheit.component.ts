import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-farenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css']
})
export class FahrenheitComponent implements OnInit {
  @Input() farenValueprty:Number 
  constructor() { }

  ngOnInit() {
  }

  onFarenEntered(farenData:Number){
      console.log(farenData);
  }

  // onCelciusValueChange(celciusData : { data : Number}){
  //   console.log('event raised');
  //   this.farenValueprty = celciusData.data;
  // }

}
