import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatMoney' })
export class FormatMoneyPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let num = String(value); //数字转字符串
    let str = ''; //字符串累加
    for (let i = num.length - 1, j = 1; i >= 0; i--, j++) {
      if (j % 3 == 0 && i != 0) {
        //每隔三位加逗号，过滤正好在第一个数字的情况
        str += num[i] + ','; //加千分位逗号
        continue;
      }
      str += num[i]; //倒着累加数字
    }
    return str.split('').reverse().join(''); //字符串=>数组=>反转=>字符串
  }
}
