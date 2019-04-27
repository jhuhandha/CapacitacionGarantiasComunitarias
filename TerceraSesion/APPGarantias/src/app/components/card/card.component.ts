import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() post : Post;
  @Output() postId = new EventEmitter();

  constructor() { 
    
  }

  ngOnInit() {
  }

  comentarios(post){
    this.postId.emit( { id : post.id } );
  }

}
