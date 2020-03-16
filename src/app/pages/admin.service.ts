import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Plan, Prize, PrizeInfo, Result} from "../dto/adminDto";
import {Observable} from "rxjs";
import {backendUrl} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = backendUrl;

  constructor(private httpClient: HttpClient) {

  }

  //保存prizeInfo
  savePrizeInfo(prizeInfo: PrizeInfo[]) {
    return this.httpClient.post<Result>(this.url + '/admin/prizeInfo', prizeInfo);
  }

  //获取奖品列表
  getPrizeInfoList(prizeId: number) {
    return this.httpClient.get<Result>(this.url + '/admin/prizeInfo/'+prizeId);
  }

  // 删除商品
  deletePrizeInfo(id) {
    return this.httpClient.delete<Result>(this.url + '/admin/prizeInfo/' + id);
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
  getPlan() {
    return this.httpClient.get<Result>(this.url + '/admin/plan');
  }

  //删除计划
  deletePlan(id) {
    return this.httpClient.delete<Result>(this.url + '/admin/plan/' + id);
  }

  //获取客户列表
  getCustomerList(pageSize, pageIndex) {
    return this.httpClient.get<Result>(this.url + '/common/customer', {params:{'pageSize': pageSize,'pageIndex': pageIndex}});
  }

  //获取记录列表
  getRecordList() {
    return this.httpClient.get<Result>(this.url + '/common/record');
  }
}
