import { Component, OnInit }    from '@angular/core';
import { SubscriptionsService } from '../../services/subscriptions.service';
import { ISubscription }        from '../../interfaces/isubscription';
import { ActivatedRoute }       from '@angular/router';
import { NavController }        from '@ionic/angular';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.page.html',
  styleUrls: ['./detail-page.page.scss'],
})
export class DetailPagePage implements OnInit {
  public sub: ISubscription;
  constructor(
    private subs: SubscriptionsService,
    private activatedRoute: ActivatedRoute,
    private nav: NavController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.subs.getSub(+params.get('id')).subscribe(res => {
        this.sub = res.data;

      });
    });
  }

  onRemove(id: number) {
    this.subs.removeSub(id).subscribe(res => {
      console.log(res);
      this.nav.back();
    });
  }
}
