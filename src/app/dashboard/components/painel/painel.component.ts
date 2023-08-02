import { Component, OnInit } from '@angular/core';
import { faMagnifyingGlass, faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faBookmark = faBookmark;

  constructor() { }

  ngOnInit(): void {
  }

}
