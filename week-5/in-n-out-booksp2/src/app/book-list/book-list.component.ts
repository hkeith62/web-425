 /*
============================================
; Title:  book-list.component.ts
; Author: Professor Krasso
; Date: 01/25/2022
; Modified By: Keith Hall
; Description: Component.ts of the book-list component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
