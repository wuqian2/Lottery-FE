import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {LogsComponent} from "./pages/logs/logs.component";
import {RecordComponent} from "./pages/record/record.component";
import {UserComponent} from "./pages/user/user.component";
import {ConfigComponent} from "./pages/config/config.component";
import {PrizeInfoComponent} from "./pages/prize-info/prize-info.component";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LogsComponent,
    RecordComponent,
    UserComponent,
    ConfigComponent,
    PrizeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
