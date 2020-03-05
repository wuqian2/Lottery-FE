import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plan, Prize, Result} from "../dto/adminDto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) {

  }

  //新增奖品
  savePrize(prize: Prize) {
    return this.httpClient.post<Result>(this.url + '/admin/prize', prize);
  }

  //获取奖品列表
  getPrizeList() {
    return this.httpClient.get<Result>(this.url + '/admin/prize');
  }

  // 删除商品
  deletePrize(id) {
    return this.httpClient.delete<Result>(this.url + '/admin/prize/' + id);
  }

  //新增计划
  savePlan(plan: Plan) {
    return this.httpClient.post<Result>(this.url + '/admin/plan', plan);
  }

  //获取计划列表
  getPlanList() {
    return this.httpClient.get<Result>(this.url + '/admin/plan');
  }

  //删除计划
  deletePlan(id) {
    return this.httpClient.delete<Result>(this.url + '/admin/plan/' + id);
  }
}
