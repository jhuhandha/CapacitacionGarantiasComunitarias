import { Component } from '@angular/core';
import { LeaguesService } from './services/leagues.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  leagues : Array<any> = [];

  constructor(private _leagues: LeaguesService){}

  ngOnInit(): void {
    this._leagues.get().subscribe(data => {
      this.leagues =  data.api.leagues;
    }, error => {
      console.log(error)
    })
  }

}
