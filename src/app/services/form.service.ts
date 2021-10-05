import {Injectable}          from '@angular/core';
import {FormBuilder}         from '@angular/forms';
import { IFormField }        from '../interfaces/iform-field';
import { IDefaultFormField } from '../interfaces/idefault-form-field';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private formBuilder: FormBuilder) { }

  createForm(defaultFields: IDefaultFormField[]) {
    return this.formBuilder.group(reduceControls(defaultFields));
  }

  getFields(defaultFields: IDefaultFormField[]) {
    return defaultFields.map(({type, name, label}: IFormField) => ({type, name, label}));
  }
}

const reduceControls = (fields: IDefaultFormField[]) => fields.reduce((acc, cur) => {
    const {name, control} = cur;
    return {...acc, [name]: control};
  }, {});
