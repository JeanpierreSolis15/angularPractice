import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resultado-conversion',
  templateUrl: './resultado-conversion.component.html',
  styleUrls: ['./resultado-conversion.component.css']
})
export class ResultadoConversionComponent {
  @Input() resultado:any;
  @Output() resetValue = new EventEmitter();
  constructor(){
    console.log(this.resultado)
  }

  resetear(){
    this.resetValue.emit();
  }
}
