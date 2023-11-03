import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OPTIONS } from 'src/app/chatbot-design-studio/utils';

@Component({
  selector: 'cds-options',
  templateUrl: './cds-options.component.html',
  styleUrls: ['./cds-options.component.scss']
})
export class CdsOptionsComponent implements OnInit {

  @Output() onOptionClicked = new EventEmitter<OPTIONS>();
  OPTIONS = OPTIONS

  constructor() { }

  ngOnInit(): void {
  }

  onOptionClick(option){
    this.onOptionClicked.emit(option)
  }

}
