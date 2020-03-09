import { Component, OnInit } from '@angular/core';
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  recordList = [];

  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getRecordlist();
  }

  // 获取中奖记录列表
  getRecordlist() {
    this.service.getRecordList().subscribe(res => {
      this.recordList = res.data;
    })
  }

}
