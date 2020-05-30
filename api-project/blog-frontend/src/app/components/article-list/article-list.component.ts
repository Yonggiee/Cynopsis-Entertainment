import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article/article.service';
import { ArticleNewComponent } from '../article-new/article-new.component';
import { PusherService } from 'src/app/services/pusher/pusher.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  articles;

  constructor(
    private articleService: ArticleService,
    private pusherService: PusherService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getArticles();
    this.subscribeToArticlesChannel();
  }

  getArticles() {
    this.articleService.getAllArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

  newArticle() {
    this.dialog.open(ArticleNewComponent);
  }

  subscribeToArticlesChannel() {
    const component = this;
    let channel = this.pusherService.pusher.subscribe('blog');
    channel.bind('refresh-articles', function () {
      component.getArticles();
    });
  }
}
