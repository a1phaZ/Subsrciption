import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {FormService} from '../../services/form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() data: IData;

  form: FormGroup;
  fields: { name: string; type: string }[];

  constructor(
    private modal: ModalController,
    private formService: FormService
  ) {
  }

  ngOnInit() {
    const {defaultFormFields} = this.data;
    this.form = this.formService.createForm(defaultFormFields);
    console.log(this.formService.getFields(defaultFormFields));
    this.fields = this.formService.getFields(defaultFormFields);
    console.log(this.form);
  }

  dismissModal() {
    this.modal.dismiss();
  }

}

export interface IData {
  defaultFormFields: any;
  title: string;
}
