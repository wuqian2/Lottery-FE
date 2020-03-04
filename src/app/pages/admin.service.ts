import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prize} from "../dto/adminDto";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url: string = 'http://localhost:8080'

  constructor(private httpClient: HttpClient) { }

  //新增奖品
  addPrize(prize: Prize) {
    return this.httpClient.post(this.url + '/admin/prize', prize);
  }

  //获取奖品列表
  getPrizeList() {
    return this.httpClient.get(this.url + '/admin/prize');
  }
}
