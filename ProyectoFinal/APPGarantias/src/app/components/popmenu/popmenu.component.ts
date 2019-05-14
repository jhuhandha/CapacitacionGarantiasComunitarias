import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;

  @Output("rutas") rutas = new EventEmitter();

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  crear_ruta(){
    this.rutas.emit(1);
    return this.openMenu = !this.openMenu;
  }

  listar_ruta(){
    this.rutas.emit(2);
    return this.openMenu = !this.openMenu;
  }
}
