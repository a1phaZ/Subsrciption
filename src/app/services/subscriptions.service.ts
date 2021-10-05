import { Injectable }    from '@angular/core';
import { of }            from 'rxjs';
import { ISubscription } from '../interfaces/isubscription';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  list: ISubscription[] = subs;

  constructor() {
    this.getSubs().subscribe(res => this.list = res.data);
  }

  getSubs() {
    return of({data: this.list});
  }

  addSub(sub) {
    this.list.push(sub);
    return of({message: 'ok'});
  }
}

const subs: ISubscription[] = [
  {
    id: 1,
    name: 'Test 1',
    category: 'test',
    img: 'https://via.placeholder.com/45'
  },
  {
    id: 2,
    name: 'Test 2',
    category: 'test',
    img: 'https://via.placeholder.com/45'
  },
  {
    id: 3,
    name: 'Test 3',
    category: 'test',
    img: 'https://via.placeholder.com/45'
  }
];
