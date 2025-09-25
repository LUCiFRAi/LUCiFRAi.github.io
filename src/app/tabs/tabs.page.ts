import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, basketballOutline, fastFoodOutline } from 'ionicons/icons';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  constructor() {
    addIcons({ triangle, ellipse, square, pawOutline, medkitOutline, logoWhatsapp, basketballOutline, fastFoodOutline });
  }
}
