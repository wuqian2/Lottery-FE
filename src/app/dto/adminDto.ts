export const prizeLevel = [
  {code: '1', value: '一等奖'},
  {code: '2', value: '二等奖'},
  {code: '3', value: '三等奖'},
  {code: '4', value: '四等奖'},
  {code: '5', value: '五等奖'},
  {code: '6', value: '六等奖'},
];


export class Prize {
  public id: number;
  public prizeName: string;
  public prizeLevel: string;
  public prizeCount: number;
  public sentedPrize: number;

}

export class Plan {
  public id: number;
  public beginDate: Date;
  public endDate: Date;
  public baseProbability: number;
  public planInfoList: PlanInfo[];
}

export class PlanInfo {
  public id: number;
  public prizeId: number;
  public prizeName: string;
  public prizeLevel: string;
  public planCount: number;
  public sendedCount: number;
  public quantityLimit: number;
  public amountLimit: number;
}

export class Result {
  public code: number;
  public message: string;
  public data: any;
}
