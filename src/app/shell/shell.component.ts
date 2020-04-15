import { Component, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
@ContentChild('appheader') headerElm;
  constructor() { }

  ngOnInit(): void {
    console.log(this.headerElm);
  }

}
