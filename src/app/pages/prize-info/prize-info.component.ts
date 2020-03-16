import {Component, Input, OnInit} from '@angular/core';
import {PrizeInfo} from "../../dto/adminDto";
import {AdminService} from "../admin.service";
import {NzMessageService} from "ng-zorro-antd";
// @ts-ignore
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';


@Component({
  selector: 'app-prize-info',
  templateUrl: './prize-info.component.html',
  styleUrls: ['./prize-info.component.css']
})
export class PrizeInfoComponent implements OnInit {
  // 奖品ID
  @Input() prizeId: number;
  @Input() prizeCount: number;
  @Input() planBeginDate: Date;
  @Input() planEndDate: Date;

  // 奖品详情列表
  prizeInfoList: PrizeInfo[] = [];


  constructor(private service: AdminService,
              private message: NzMessageService) { }

  ngOnInit(): void {
    this.getList();
  }

  // 日期的范围
  disabledDate = (current: Date): boolean => {
    // Can not select days before today and today
    return differenceInCalendarDays(this.planBeginDate, current) > 0 || differenceInCalendarDays( this.planEndDate,current) <0;
  };

  // 获取列表
  getList() {
    this.service.getPrizeInfoList(this.prizeId).subscribe(res => {
      this.prizeInfoList = res.data;
    })
  }

  // 删除
  deletePlan(id) {
    this.service.deletePrizeInfo(id).subscribe(res => {
      this.getList();
      this.message.info("删除成功！");
    })
  }

  // 新增
  addPrizeInfo() {
     const prizeInfo = new PrizeInfo();
     prizeInfo.prizeId = this.prizeId;
    this.prizeInfoList = [ ...this.prizeInfoList,prizeInfo ];
  }

  // 保存
  savPrizeInfo() {
    this.service.savePrizeInfo(this.prizeInfoList).subscribe(res => {
      this.message.info("保存成功");
    })
  }
}
