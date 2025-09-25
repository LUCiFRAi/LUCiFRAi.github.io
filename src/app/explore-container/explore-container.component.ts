import { Component, Input } from '@angular/core';
import { IonIcon,  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline, logoInstagram, logoFacebook, logoTiktok } from 'ionicons/icons';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  imports: [IonIcon, ],
})
export class ExploreContainerComponent {
  @Input() name?: string;
  constructor() {
    addIcons({ triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline, logoInstagram, logoFacebook, logoTiktok  });
  }
}
