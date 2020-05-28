import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
})
export class ArticleNewComponent implements OnInit {
  articleForm = new FormGroup({
    title: new FormControl('', Validators.required),
    desc: new FormControl('', Validators.required),
  });

  constructor(
    private dialogRef: MatDialogRef<ArticleNewComponent>,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    let newArticle = this.articleForm.value;
    this.articleService.postArticle(newArticle).subscribe(
      data => {
        newArticle = data;
      }
    );
    this.dialogRef.close([]);
  }
}
