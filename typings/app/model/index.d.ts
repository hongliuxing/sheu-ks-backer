// This file was auto created by egg-ts-helper
// Do not modify this file!!!!!!!!!

import 'egg'; // Make sure ts to import egg declaration at first
import Address from '../../../app/model/address';
import Applyforknight from '../../../app/model/applyforknight';
import Applyforpartner from '../../../app/model/applyforpartner';
import Applyforseller from '../../../app/model/applyforseller';
import Area from '../../../app/model/area';
import Banner from '../../../app/model/banner';
import Businesstypes from '../../../app/model/businesstypes';
import City from '../../../app/model/city';
import Client from '../../../app/model/client';
import Comment from '../../../app/model/comment';
import Dormitory from '../../../app/model/dormitory';
import Dormitorysupplierrelation from '../../../app/model/dormitorysupplierrelation';
import Goods from '../../../app/model/goods';
import Goodschannel from '../../../app/model/goodschannel';
import Goodstypes from '../../../app/model/goodstypes';
import Goodstypesrelation from '../../../app/model/goodstypesrelation';
import Knight from '../../../app/model/knight';
import Mapknighttemp from '../../../app/model/mapknighttemp';
import Noticeforknight from '../../../app/model/noticeforknight';
import Order from '../../../app/model/order';
import Ordergoodsrelation from '../../../app/model/ordergoodsrelation';
import Orderstruts from '../../../app/model/orderstruts';
import Partner from '../../../app/model/partner';
import Province from '../../../app/model/province';
import RushActivity from '../../../app/model/rush_activity';
import RushGoods from '../../../app/model/rush_goods';
import RushKnight from '../../../app/model/rush_knight';
import School from '../../../app/model/school';
import Schoolactivation from '../../../app/model/schoolactivation';
import Schooladd from '../../../app/model/schooladd';
import Seller from '../../../app/model/seller';
import Selleradmin from '../../../app/model/selleradmin';
import Sellertypes from '../../../app/model/sellertypes';
import Sellertypesrelation from '../../../app/model/sellertypesrelation';
import SheuUser from '../../../app/model/sheu_user';
import Supplier from '../../../app/model/supplier';
import Sysaaauser from '../../../app/model/sysaaauser';
import CommonBase from '../../../app/model/common/base';

declare module 'sequelize' {
  interface Sequelize {
    Address: ReturnType<typeof Address>;
    Applyforknight: ReturnType<typeof Applyforknight>;
    Applyforpartner: ReturnType<typeof Applyforpartner>;
    Applyforseller: ReturnType<typeof Applyforseller>;
    Area: ReturnType<typeof Area>;
    Banner: ReturnType<typeof Banner>;
    Businesstypes: ReturnType<typeof Businesstypes>;
    City: ReturnType<typeof City>;
    Client: ReturnType<typeof Client>;
    Comment: ReturnType<typeof Comment>;
    Dormitory: ReturnType<typeof Dormitory>;
    Dormitorysupplierrelation: ReturnType<typeof Dormitorysupplierrelation>;
    Goods: ReturnType<typeof Goods>;
    Goodschannel: ReturnType<typeof Goodschannel>;
    Goodstypes: ReturnType<typeof Goodstypes>;
    Goodstypesrelation: ReturnType<typeof Goodstypesrelation>;
    Knight: ReturnType<typeof Knight>;
    Mapknighttemp: ReturnType<typeof Mapknighttemp>;
    Noticeforknight: ReturnType<typeof Noticeforknight>;
    Order: ReturnType<typeof Order>;
    Ordergoodsrelation: ReturnType<typeof Ordergoodsrelation>;
    Orderstruts: ReturnType<typeof Orderstruts>;
    Partner: ReturnType<typeof Partner>;
    Province: ReturnType<typeof Province>;
    RushActivity: ReturnType<typeof RushActivity>;
    RushGoods: ReturnType<typeof RushGoods>;
    RushKnight: ReturnType<typeof RushKnight>;
    School: ReturnType<typeof School>;
    Schoolactivation: ReturnType<typeof Schoolactivation>;
    Schooladd: ReturnType<typeof Schooladd>;
    Seller: ReturnType<typeof Seller>;
    Selleradmin: ReturnType<typeof Selleradmin>;
    Sellertypes: ReturnType<typeof Sellertypes>;
    Sellertypesrelation: ReturnType<typeof Sellertypesrelation>;
    SheuUser: ReturnType<typeof SheuUser>;
    Supplier: ReturnType<typeof Supplier>;
    Sysaaauser: ReturnType<typeof Sysaaauser>;
    Common: {
      Base: ReturnType<typeof CommonBase>;
    };
  }
}
