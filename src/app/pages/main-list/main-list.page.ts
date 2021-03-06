import { Component, OnInit }    from '@angular/core';
import { SubscriptionsService } from '../../services/subscriptions.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.page.html',
  styleUrls: ['./main-list.page.scss'],
})
export class MainListPage implements OnInit {
  public pageName = 'Главная';
  public itemList: any;

  constructor(private subs: SubscriptionsService) {
    this.itemList = subs.list;
    subs.listChange.subscribe(value => this.itemList = value);
  }

  ngOnInit() {

  }
}
