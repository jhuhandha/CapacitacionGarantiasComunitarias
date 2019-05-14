import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopmenuComponent } from './popmenu/popmenu.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CardComponent } from './card/card.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@NgModule({
  declarations: [PopmenuComponent, NotificationsComponent, CardComponent],
  exports : [PopmenuComponent, NotificationsComponent, CardComponent],
  entryComponents: [NotificationsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
