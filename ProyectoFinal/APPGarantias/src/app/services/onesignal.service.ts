import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class OnesignalService {

  constructor(private oneSignal: OneSignal, private storage : Storage) { }

  init() {
    this.oneSignal.startInit('d1bc285f-b393-497b-801d-3cd0f92b9749', '429535184287');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      // do something when a notification is opened
    });

    this.oneSignal.getIds().then(data => {
      this.storage.set("id_onesignal", data.userId);
    })


    this.oneSignal.endInit();
  }
}
