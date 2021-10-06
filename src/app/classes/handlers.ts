import { IDefaultFormField } from '../interfaces/idefault-form-field';
import { from, of }          from 'rxjs';
import { map }               from 'rxjs/operators';

export class Handlers {
  /**
   * Преобразование даты
   *
   * @param data
   */
  static serializeDate(data: IDefaultFormField[]): IDefaultFormField {
    let _data: IDefaultFormField;
    from(data).pipe(
      map((item: IDefaultFormField) => {
        if (item.type !== 'date') {
          return item;
        }
        this.formatDate(item.control[0]).subscribe((s) => item.control[0] = s);
        return item;
      })
    ).subscribe((d) => _data = d);
    return _data;
  }

  /**
   * Удаление элемента из массива
   *
   * @param array
   * @param id
   * @param field
   */
  static removeFormArray(array, id, field) {
    return array.filter(item => item[field] !== id);
  }

  private static formatDate(date: Date) {
    return of(date).pipe(
      map((d: Date) => {
        const _d = new Date(d);
        return {year: _d.getFullYear(), month: _d.getMonth() + 1, day: _d.getDate()};
      }),
      map((d) => {
        let s = `${d.year}-`;
        s += d.month.toString().length < 2 ? `0${d.month}-` : `${d.month}-`;
        s += d.day.toString().length < 2 ? `0${d.day}` : d.day;
        return s;
      })
    );
  }
}
