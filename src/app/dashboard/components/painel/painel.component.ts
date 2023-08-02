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
  updateCardsInfo = [
    {
      date: '02/08/23',
      title: 'Atualização Dashboard 1',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, necessitatibus ea? Doloribus blanditiis provident consectetur voluptatem eum in expedita animi libero aliquid, magnam illo veniam adipisci fuga, exercitationem, dolore quos.'
    },
    {
      date: '02/08/23',
      title: 'Atualização Dashboard 2',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, necessitatibus ea? Doloribus blanditiis provident consectetur voluptatem eum in expedita animi libero aliquid, magnam illo veniam adipisci fuga, exercitationem, dolore quos.'
    },
    {
      date: '02/08/23',
      title: 'Atualização Dashboard 3',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, necessitatibus ea? Doloribus blanditiis provident consectetur voluptatem eum in expedita animi libero aliquid, magnam illo veniam adipisci fuga, exercitationem, dolore quos.'
    },
    {
      date: '02/08/23',
      title: 'Atualização Dashboard 4',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, necessitatibus ea? Doloribus blanditiis provident consectetur voluptatem eum in expedita animi libero aliquid, magnam illo veniam adipisci fuga, exercitationem, dolore quos.'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
