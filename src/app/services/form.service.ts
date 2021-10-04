import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }

  createForm(defaultFields) {
    return this.formBuilder.group(reduceControls(defaultFields));
  }

  getFields(defaultFields) {
    return defaultFields.map(({type, name}) => ({type, name}));
  }
}

const reduceControls = (fields) => fields.reduce((acc, cur) => {
    const {name, control} = cur;
    return {...acc, [name]: control};
  }, {});

export interface IDefaultFormField {
  control: any[];
  type: string;
  name: string;
}
