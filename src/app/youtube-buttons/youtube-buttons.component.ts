import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube-buttons',
  standalone: true,
  imports: [],
  templateUrl: './youtube-buttons.component.html',
  styleUrl: './youtube-buttons.component.css'
})
export class YoutubeButtonsComponent {
 
  openLink(link: string) {
    window.open(link, '_blank');
  }

}
