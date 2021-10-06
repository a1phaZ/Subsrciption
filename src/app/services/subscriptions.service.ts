import { Injectable }          from '@angular/core';
import { of, Subject }         from 'rxjs';
import { delay }               from 'rxjs/operators';
import { Handlers }            from '../classes/handlers';
import { ISubscription }       from '../interfaces/isubscription';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionsService {
  list: ISubscription[] = subs;

  listChange: Subject<ISubscription[]> = new Subject<ISubscription[]>();

  constructor(
    private notify: NotificationService
  ) {
    this.getSubs().subscribe(res => this.list = res.data);
    this.listChange.next(this.list);
  }

  getSubs() {
    return of({data: this.list});
  }

  getSub(id) {
    return of({data: this.list.find((item) => item.id === id)}).pipe(delay(2000));
  }

  addSub(sub) {
    const _list = this.list;
    _list.push({...sub, id: this.list[this.list.length - 1].id + 1});
    this.listChange.next(_list);
    this.notify.showToast('Добавление успешно');
    return of({message: 'ok'});
  }

  removeSub(id) {
    const _list = Handlers.removeFormArray(this.list, id, 'id');
    this.listChange.next(_list);
    this.list = _list;
    this.notify.showToast('Удаление успешно');
    return of({message: 'Remove success', list: this.list}).pipe(delay(2000));
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
