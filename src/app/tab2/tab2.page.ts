import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonContent } from '@ionic/angular/standalone';
import { IonIcon, IonFab, IonFabButton, IonButtons, IonMenuButton, IonCard, IonCardContent, IonCardHeader} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline } from 'ionicons/icons';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, ExploreContainerComponent, IonIcon, IonFab, IonFabButton, IonButtons, IonMenuButton, IonCard, IonCardContent, IonCardHeader],
})
export class Tab2Page {
  constructor() {
    addIcons({ triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, footballOutline, fastFoodOutline, add });
  }
}
