import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TaskFormComponent} from '../task-form/task-form.component';

const DATA = [
  {
    name: 'Learn 1'
  },
  {
    name: 'Task 2'
  },
  {
    name: 'Kitty'
  }];

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent implements OnInit {

  itemList;
  keySearch;
  itemListTemp;

  constructor(
    modalService: NgbModal) {
  }

  ngOnInit() {
    this.itemList = DATA;
    this.itemListTemp = DATA;
  }

  onSearch(evt) {
    if (this.keySearch !== '') {
      this.itemList = this.itemListTemp.filter(
        (item) => item.name.toUpperCase().includes(this.keySearch.toUpperCase()));
      console.log(this.itemList);
    } else {
      this.itemList = this.itemListTemp; // lỗi trong trương hợp xóa rồi
    }
  }

  openModal(type?: string, selectedData?: any) {
    const modalRef = this.modalService.open(TaskFormComponent, {
      size: 'lg',
      backdrop: 'static',
      keyboard: false
    });
    modalRef.componentInstance.type = type;
    modalRef.componentInstance.selectedData = selectedData;
    modalRef.result.then(result => {
    }).catch(() => {
    });
  }
}
