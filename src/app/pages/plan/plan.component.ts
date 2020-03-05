import { Component, OnInit } from '@angular/core';
import {Plan, PlanInfo, Prize} from "../../dto/adminDto";
import {AdminService} from "../admin.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  planList: Plan[] = [];
  // 礼物列表
  prizeList: Prize[] = [];

  constructor(private service: AdminService,
              private message: NzMessageService) { }

  ngOnInit(): void {
    this.getPlanList();
    this.service.getPrizeList().subscribe(res => this.prizeList = res.data);
  }

  // 新增计划
  addPlan() {
    // 获取初始奖品列表
    const addPlanInfo = this.prizeList.map(item => {
      const planInfo = new PlanInfo();
      planInfo.prizeName = item.prizeName;
      planInfo.prizeLevel = item.prizeLevel;
      planInfo.prizeId = item.id;
      planInfo.sendedCount = 0;
      return planInfo;
    });
    const plan = new Plan();
    plan.planInfoList = addPlanInfo;
    this.planList.push(plan);
  }

  // 保存计划
  savePlan(plan: Plan) {
    this.service.savePlan(plan).subscribe(res => {
      // 刷新列表
      this.getPlanList();
      this.message.info('保存成功！');
    })
  }

  // 计划列表
  getPlanList() {
    this.service.getPlanList().subscribe(res => {
      this.planList = res.data;
    })
  }

  // 删除计划
  deletePlan(plan: Plan) {
    if (plan.id) {
      this.service.deletePlan(plan.id).subscribe(res => {
        this.getPlanList();
        this.message.info('删除成功！');
      })
    } else {
      this.planList = this.planList.filter(item => item !== plan);
    }
  }

  // 保存计划详情
  savePlanInfo(planInfo: PlanInfo) {

  }

}
