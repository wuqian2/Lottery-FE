import { Component, OnInit } from '@angular/core';
import {Plan, Prize, prizeLevel} from "../../dto/adminDto";
import {AdminService} from "../admin.service";
import {NzMessageService, NzModalService} from "ng-zorro-antd";
import {PrizeInfoComponent} from "../prize-info/prize-info.component";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
// 新加的礼物
  addPrize: Prize = new Prize();
  // 礼物列表
  prizeList: Prize[] = [];
  // 等级代码
  prizeLevel = prizeLevel;
  // 计划
  plan: Plan = new Plan();

  constructor(private service: AdminService,
              private modalService: NzModalService,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.getPrizes();
    this.getPlan();
  }

  // 新增表单提交
  onSubmit() {
    this.addPrize.sentedPrize = 0;
    this.service.savePrize(this.addPrize).subscribe(res => {
      this.getPrizes();
      alert('新增成功！');
      window.location.reload();
    });
  }

  // 获取奖品列表
  getPrizes() {
    this.service.getPrizeList().subscribe(res => this.prizeList = res['data']);
  }

  // 保存商品
  savePrize(prize) {
    this.service.savePrize(prize).subscribe(res => {
      this.getPrizes();
      this.message.info('修改成功');
    });
  }

  // 删除商品
  deletePrize(id) {
    this.service.deletePrize(id).subscribe(res => {
      this.getPrizes();
      this.message.info('删除成功');
    });
  }

  // 保存计划
  savePlan() {

    this.service.savePlan(this.plan).subscribe(res => {
      // 刷新列表
      this.message.info('保存成功！');
    })
  }

  // 获取plan
  getPlan() {
    this.service.getPlan().subscribe(res => {
      this.plan = res.data;
    })
  }


  // 编辑奖品计划
  editPlanInfo(id) {
    const modal = this.modalService.create({
      nzTitle: '奖品计划',
      nzContent: PrizeInfoComponent,
      nzComponentParams: {
        prizeId: id,
        planBeginDate: this.plan.beginDate,
        planEndDate: this.plan.endDate
      },
      nzFooter: null,
      nzStyle: {width:'800px'}
    });

  }

}
