import {Component, OnInit} from '@angular/core';
import {ModalService} from '../../services/modal.service';
import {Validators} from '@angular/forms';
import {IDefaultFormField} from '../../services/form.service';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.page.html',
  styleUrls: ['./main-list.page.scss'],
})
export class MainListPage implements OnInit {
  public pageName = 'Главная';
  public itemList = [
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

  constructor(private modal: ModalService) {
  }

  ngOnInit() {
  }

  onAddClick() {
    this.modal.presentModal({title: 'Add Sub', defaultFormFields: addFormFields});
  }
}

const addFormFields: IDefaultFormField[] = [
  {control: ['', Validators.required], type: 'input', name: 'name'},
  {control: [0, Validators.required], type: 'number', name: 'price'},
  {control: [new Date(), Validators.required], type: 'date', name: 'beginDate'},
  {control: [0, Validators.required], type: 'number', name: 'endAfter'},
  {control: [0, Validators.required], type: 'number', name: 'notifyBefore'}
];
