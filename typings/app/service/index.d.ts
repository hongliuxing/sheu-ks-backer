// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Access from '../../../app/service/access';
import Order from '../../../app/service/order';
import CommonBase from '../../../app/service/common/base';

declare module 'egg' {
  interface IService {
    access: Access;
    order: Order;
    common: {
      base: CommonBase;
    };
  }
}
