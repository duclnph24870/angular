import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  @Input() rating: number = 0;

  handleClickStart () {
    alert("Số sao của sp là: "+ this.rating)
  }
}
