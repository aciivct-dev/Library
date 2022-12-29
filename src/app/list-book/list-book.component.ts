import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MyApiService } from '../Store/my-api.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css'],
})
export class ListBookComponent {
  Book: any = [];
  constructor(public Api: MyApiService, public router: Router) {}
  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks() {
    return this.Api.getBooks().subscribe((data: {}) => {
      this.Book = data;
    });
  }

  deleteBook(id: number) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.Api.deleteBook(id).subscribe((data) => {
        this.loadBooks();
      });
    }
  }
}
