import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyApiService } from '../Store/my-api.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  bookDetails={name:'',price:0,author:''};
  constructor(public myApi:MyApiService,public router:Router) {}
  ngOnInit() {}
  addBook() {
    this.myApi.createBook(this.bookDetails).subscribe((data: {}) => {
      this.router.navigate(['/List'])
    })
  }
}
  