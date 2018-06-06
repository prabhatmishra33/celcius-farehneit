import { Component, OnInit ,EventEmitter, Output , Input ,OnChanges} from '@angular/core';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'app-celcius',
  templateUrl: './celcius.component.html',
  styleUrls: ['./celcius.component.css']
})
export class CelciusComponent implements OnChanges,OnInit {
  errDisp : boolean = false
  errorMsg :String
  @Input()celciusValue =0
  //@Input() celValueprty:Number
  @Output() raiseCelciusValueEnterEvent = new EventEmitter<{ celciusEnteredValue : Number }>()
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.errDisp=false
  }


  onCeliusEnter(celciusEntered:Number){
    if( isNaN(this.celciusValue)){
      this.errorMsg = "Please enter a valid celcius in degrees";
      this.raiseCelciusValueEnterEvent.emit({ celciusEnteredValue : undefined });
      this.errDisp=true
    }
    else{
      this.errDisp=false
      console.log("--------------------------------------------------------");
      console.log("onCeliusEnter Event is Fired with data from celcius component")
      this.raiseCelciusValueEnterEvent.emit({ celciusEnteredValue : this.celciusValue });
    }
  }

}
