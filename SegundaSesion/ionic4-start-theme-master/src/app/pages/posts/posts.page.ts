import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  posts : Post[] = [];

  constructor(private _servicePosts : PostService) { }

  ngOnInit() {
    this._servicePosts.get().subscribe(data=>{
      this.posts = data;
    }, error => {

    })
  }

}
