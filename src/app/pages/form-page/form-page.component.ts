import { Component, OnInit }    from '@angular/core';
import { BaseForm }             from '../../classes/base-form';
import { IDefaultFormField }    from '../../interfaces/idefault-form-field';
import { FormService }          from '../../services/form.service';
import { ActivatedRoute }       from '@angular/router';
import { Validators }           from '@angular/forms';
import { SubscriptionsService } from '../../services/subscriptions.service';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss'],
})
export class FormPage extends BaseForm implements OnInit{

  formFields: IDefaultFormField[] = addFormFields;
  button = {
    text: 'Add sub',
  };

  constructor(
    public formService: FormService,
    public activatedRoute: ActivatedRoute,
    public subs: SubscriptionsService
  ) {
    super(formService, activatedRoute, subs);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}

const addFormFields: IDefaultFormField[] = [
  {control: [null, Validators.required], type: 'input', name: 'name', label: 'name'},
  {control: [null, Validators.required], type: 'number', name: 'price', label: 'price'},
  {control: [new Date('2021-01-01'), Validators.required], type: 'date', name: 'beginDate', label: 'begin date'},
  {control: [new Date(), Validators.required], type: 'date', name: 'endAfter', label: 'end after'},
  {control: [null, Validators.required], type: 'number', name: 'notifyBefore', label: 'notify before'}
];
