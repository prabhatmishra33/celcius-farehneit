import { Component, OnInit ,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-celcius',
  templateUrl: './celcius.component.html',
  styleUrls: ['./celcius.component.css']
})
export class CelciusComponent implements OnInit {
  celciusValue =0
  @Output() raiseCelciusValueEnterEvent = new EventEmitter<{ celciusEnteredValue : Number }>()
  constructor() { }

  ngOnInit() {
  }

  onCeliusEnter(celciusEntered:Number){
    console.log(this.celciusValue)
    this.raiseCelciusValueEnterEvent.emit({ celciusEnteredValue : this.celciusValue });
  }

}
