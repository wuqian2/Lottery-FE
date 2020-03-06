import {Component, OnInit} from '@angular/core';
import {backendUrl} from "../../../environments/environment";
import {UploadXHRArgs} from "ng-zorro-antd";
import {HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse} from "@angular/common/http";
import {Customer} from "../../dto/adminDto";
import {AdminService} from "../admin.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  uploadUrl = backendUrl + "/common/upload";
  dataSet: Customer[];
  pageIndex = 1;
  pageSize = 8;
  total;


  constructor(private http: HttpClient, private  adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getCustomerList();
  }

  // 获取客户列表
  getCustomerList() {
    this.adminService.getCustomerList(this.pageSize, this.pageIndex).subscribe(res => {
      this.total = res.data['total'];
      this.dataSet = res.data['dataSet'];
    })
  }

  // 下载模板
  downLoad() {
    window.open(backendUrl + "/common/download")
  }

  // 文件上传
  customReq = (item: UploadXHRArgs) => {
    // Create a FormData here to store files and other parameters.
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    formData.append('file', item.file as any);
    const req = new HttpRequest('POST', item.action!, formData, {
      reportProgress: true,
      withCredentials: true
    });

    return this.http.request(req).subscribe(
      // tslint:disable-next-line no-any
      (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          if (event.total! > 0) {
            // tslint:disable-next-line:no-any
            (event as any).percent = (event.loaded / event.total!) * 100;
          }
          item.onProgress!(event, item.file!);
        } else if (event instanceof HttpResponse) {
          // 服务器返回成功的信息


          item.onSuccess!(event.body, item.file!, event);
        }
      },
      err => {
        item.onError!(err, item.file!);
      }
    );
  };


}
