import { Component, OnInit } from '@angular/core';
import { FullNorthwindCustomersService } from '../services/full-northwind-customers.service';
import { FullNorthwindOrdersService } from '../services/full-northwind-orders.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public fullNorthwindCustomersCustomers: any[] = [];
  public fullNorthwindOrdersOrders: any[] = [];

  constructor(
    private fullNorthwindCustomersService: FullNorthwindCustomersService,
    private fullNorthwindOrdersService: FullNorthwindOrdersService,
  ) {}

  ngOnInit() {
    this.fullNorthwindCustomersCustomers = this.fullNorthwindCustomersService.getData('Customers');
    this.fullNorthwindOrdersOrders = this.fullNorthwindOrdersService.getData('Orders');
  }
}
