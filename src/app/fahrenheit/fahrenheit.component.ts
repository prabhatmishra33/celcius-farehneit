import { Component, OnInit ,Input,EventEmitter,Output,OnChanges } from '@angular/core';


@Component({
  selector: 'app-farenheit',
  templateUrl: './fahrenheit.component.html',
  styleUrls: ['./fahrenheit.component.css']
})
export class FahrenheitComponent implements OnInit,OnChanges {
  errDisp : boolean = false
  errorMsg : String
  @Input() farenValueprty 
  @Output() raiseFahrenValueEnterEvent = new EventEmitter<{ fahrenValue : Number }>();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.errDisp=false
  }

  onFahrenEnter(data:Number){
  if( isNaN(this.farenValueprty) ){
    this.errorMsg = "Please enter a valid Fahrehneit in degrees";
    this.raiseFahrenValueEnterEvent.emit({ fahrenValue : undefined });
    this.errDisp = true
  }
  else{
    this.errDisp = false
    console.log("--------------------------------------------------------");
    console.log('onFahrenEnter event Fired with data from Fahrehneit Component');
    this.raiseFahrenValueEnterEvent.emit({ fahrenValue : this.farenValueprty });
  }
}
  

}
