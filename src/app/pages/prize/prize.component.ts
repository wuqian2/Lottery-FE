import {Component, OnInit} from '@angular/core';
import {Prize} from "../../dto/adminDto";
import {HttpClient} from "@angular/common/http";
import {AdminService} from "../admin.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-prize',
  templateUrl: './prize.component.html',
  styleUrls: ['./prize.component.css']
})
export class PrizeComponent implements OnInit {
  addPrize: Prize = new Prize();
  prizeList: Prize[] = [];

  constructor(private service: AdminService,
              private message: NzMessageService) {
  }

  ngOnInit(): void {
    this.getPrizes();
  }

  // 新增表单提交
  onSubmit() {
    this.service.addPrize(this.addPrize).subscribe(res => {
      this.getPrizes()
      this.message.info('新增成功');
    });
  }

  //获取奖品列表
  getPrizes() {
    this.service.getPrizeList().subscribe(res => this.prizeList = res['data'])
  }

}
