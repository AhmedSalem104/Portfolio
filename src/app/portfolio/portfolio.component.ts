import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  cards = [
    {  image: './assets/imgs/poert1.png' },
    {  image: './assets/imgs/port2.png' },
    {  image: './assets/imgs/port3.png' },
    {  image: './assets/imgs/poert1.png' },
    {  image: './assets/imgs/port2.png' },
    {  image: './assets/imgs/port3.png' }
  ];

  modalImage: string | null = null;

  openModal(image: string) {
    this.modalImage = image;
  }


  closeModal(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-content')) {
      return;
    }
    this.modalImage = null;
  }

}




