import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() Product_id: any;
  @Input() Fabric_id: any;
  @Input() Pattern_id: any;
  @Input() Size_id: any;

  enquiry: any[] = [];
  enquiryform: FormGroup;

  AllPattern: any[] = [];
  AllFabric: any[] = [];
  AllSize: any[] = [];
  AllProduct: any[] = [];


  constructor(private _rest: RestService, private _route: Router, private fb: FormBuilder) {
    this.enquiryform = this.fb.group({
      Name: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      MobileNo: ['', [Validators.required]],
      Products: [[], [Validators.required]],
      Fabric: [[], [Validators.required]],
      Pattern: [[], [Validators.required]],
      Size: [[], [Validators.required]],
      Message: ['']
    });
  }

  ngOnInit(): void {
    this.Products();
    this.Pattern();
    this.Fabric();
    this.Size();    
  }

  Addcontact() {
    const formValue = this.enquiryform.value;
    formValue.Message = `Customer Interested to knowing about Products: ${formValue.Products.join(', ')}, Fabrics: ${formValue.Fabric.join(', ')}, Pattern: ${formValue.Pattern.join(', ')},Size: ${formValue.Size.join(', ')}`;

    this._rest.Enquiry(formValue).subscribe(
      (result: any) => {
        console.log(result);
        this.enquiry.push(result);
        this.enquiryform.reset();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  Products() {
    this._rest.AllProducts().subscribe((data: any) => {
      console.log(data);
      this.AllProduct = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Pattern() {
    this._rest.AllPattern().subscribe((data: any) => {
      console.log(data);
      this.AllPattern = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Fabric() {
    this._rest.AllFabric().subscribe((data: any) => {
      console.log(data);
      this.AllFabric = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  Size() {
    this._rest.AllSize().subscribe((data: any) => {
      console.log(data);
      this.AllSize = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

}
