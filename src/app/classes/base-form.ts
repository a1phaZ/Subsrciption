import { FormService }          from '../services/form.service';
import { OnInit }               from '@angular/core';
import { FormGroup }            from '@angular/forms';
import { IDefaultFormField }    from '../interfaces/idefault-form-field';
import { IFormField }           from '../interfaces/iform-field';
import { ActivatedRoute }       from '@angular/router';
import { Handlers }             from './handlers';
import { SubscriptionsService } from '../services/subscriptions.service';

export abstract class BaseForm implements OnInit {
  form: FormGroup;
  fields: IFormField[];
  action: string;
  abstract formFields: IDefaultFormField[];

  protected constructor(
    public formService: FormService,
    public activatedRoute: ActivatedRoute,
    public subs: SubscriptionsService
  ) {
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.action = params.get('action');
      this.createForm();
      this.getFields();
    });
  }

  createForm() {
    Handlers.serializeDate(this.formFields);
    this.form = this.formService.createForm(this.formFields);
  }

  getFields() {
    this.fields = this.formService.getFields(this.formFields);
  }

  submit() {
    // TODO Прикрутить веб-сервер, запросы на основании полученного при инициализации параметра
    this.subs.addSub(this.form.value).subscribe(res => {
      if (res.message) {
        this.form.reset();
      }
    });
  }

}
