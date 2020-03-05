import {Component, OnInit} from '@angular/core';
import {Prize, prizeLevel} from '../../dto/adminDto';
import {AdminService} from '../admin.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {
  // 新加的礼物
  addPrize: Prize = new Prize();
  // 礼物列表
  prizeList: Prize[] = [];
  // 等级代码
  prizeLevel = prizeLevel;

  constructor(private service: AdminService,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.getPrizes();
  }

  // 新增表单提交
  onSubmit() {
    this.addPrize.sentedPrize = 0;
    this.service.savePrize(this.addPrize).subscribe(res => {
      this.getPrizes();
      this.message.info('新增成功');
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



}
