import { Component, OnInit, Input } from '@angular/core';

type color = "primary" | "secondary" | "danger"

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {
@Input() value = "";
@Input() color = "primary";
  constructor() { }

  ngOnInit() {}

  doClick(){}

}
