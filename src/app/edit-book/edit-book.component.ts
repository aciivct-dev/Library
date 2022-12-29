import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../Store/my-api.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  id:any;
  bookData: any = [];

  bookObj={name:'',author:'',price:0};
  constructor(
    public Api: MyApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit() { 
    this.actRoute.queryParams.subscribe(data=>{
      console.log(data);
      
      this.id=data;
    })
    this.getBooks();
  }

getBooks(){
 this.Api.getBooks().subscribe(data=>{  
  this.bookData=data;

 })
}
  updateBook(name:any,author:any,price:any,id:any) {

    this.bookObj.name=name;
    this.bookObj.author=author;
    this.bookObj.price=price;
    this.id=id;

    if(window.confirm('Are you sure, you want to update?')){
      this.Api.updateBook(this.id, this.bookObj).subscribe(data => {
        this.router.navigate(['/List']);
      });
    }
  }
}
