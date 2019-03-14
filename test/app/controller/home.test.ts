// import * as address from './graphql/address';
//import * as applyforknight from './graphql/applyforknight';
//import * as applyforpartner from './graphql/applyforpartner';
//import * as applyforseller from './graphql/applyforseller';
//import * as area from './graphql/area';
//import * as businesstypes from './graphql/businesstypes';
//import * as city from './graphql/city';
//import * as client from './graphql/client';
//import * as comment from './graphql/comment';
// import * as dormitory from './graphql/dormitory';
//import * as dormitorysupplierrelation from './graphql/dormitorysupplierrelation';
// import * as goods from './graphql/goods';
// import * as goodschannel from './graphql/goodschannel';
//import * as goodstypes from './graphql/goodstypes';
//import * as goodstypesrelation from './graphql/goodstypesrelation';
// import * as knight from './graphql/knight';
//import * as mapknighttemp from './graphql/mapknighttemp';
//import * as noticeforknight from './graphql/noticeforknight';
//import * as order from './graphql/order';
//import * as ordergoodsrelation from './graphql/ordergoodsrelation';
//import * as orderstruts from './graphql/orderstruts';
// import * as partner from './graphql/partner';
//import * as province from './graphql/province';
//import * as school from './graphql/school';
//import * as schoolactivation from './graphql/schoolactivation';
//import * as schooladd from './graphql/schooladd';
//import * as seller from './graphql/seller';
//import * as selleradmin from './graphql/selleradmin';
//import * as sellertypes from './graphql/sellertypes';
//import * as sellertypesrelation from './graphql/sellertypesrelation';
// import * as supplier from './graphql/supplier';
//import * as sysaaauser from './graphql/sysaaauser';

// import * as rush_activity from './graphql/rush_activity';
// import * as rush_goods from './graphql/rush_goods';
//import * as rush_knight from './graphql/rush_knight';
//import * as banner from './graphql/banner';

// import * as dormgoodsrelation from './graphql/dormgoodsrelation';
import * as goodssupplierrelation from './graphql/goodssupplierrelation';
// import * as supplierinoutgoods from './graphql/supplierinoutgoods';

describe('test/app/controller/home.test.ts', () => {

	// dormgoodsrelation.find();
	// dormgoodsrelation.findAll();
	// dormgoodsrelation.add();
	// dormgoodsrelation.update();
	// dormgoodsrelation.remove();

	// const supplier_id = '231dc230-42fe-11e9-8219-5b1c993210c3';
	// const goods_id = '0caa0600-42d4-11e9-8219-5b1c993210c3';
	// goodssupplierrelation.find(goods_id, supplier_id);

	// goodssupplierrelation.findAll({
	// 	supplier_id: "123415f0-3bba-11e9-b878-cb83b89bb04b",
	// 	// goods: {
	// 	// 	channel_id: '24fa7a50-3f41-11e9-a8e9-ad6c1eabe4f0',
	// 	// },
	// 	// channel_id: '24fa7a50-3f41-11e9-a8e9-ad6c1eabe4f0',
	// });

	// const supplier_id = '231dc230-42fe-11e9-8219-5b1c993210c3';
	// const channel_id = '19f40800-3669-11e9-9959-95b8e40dbfb4';
	// const channel_id = 'c15857a5-3648-11e9-bc33-00163e08112a';
	// goodssupplierrelation.remainingAll(supplier_id, channel_id);

	// goodssupplierrelation.add();
	goodssupplierrelation.update();
	// goodssupplierrelation.remove();

	// supplierinoutgoods.find();
	// supplierinoutgoods.findAll();
	// supplierinoutgoods.add();
	// supplierinoutgoods.update();
	// supplierinoutgoods.remove();

	// banner.find();
	// banner.findAll();
	// banner.add();
	// banner.update();
	// banner.remove();

	//rush_activity.find();
	// rush_activity.findAll();
	// rush_activity.add();
	// rush_activity.update();
	// rush_activity.remove();

	//rush_goods.find();
	// rush_goods.findAll();
	// rush_goods.add();
	// rush_goods.update();
	// rush_goods.remove();
	// rush_goods.screenRushGoods();

	//rush_knight.find();
	// rush_knight.findAll();
	// rush_knight.add();
	// rush_knight.update();
	// rush_knight.remove();

	// address.find();
	// address.findAll();
	// address.add();
	// address.update();
	// address.remove();
	// address.findAll();

	//applyforknight.find();
	// applyforknight.findAll();
	// applyforknight.add();
	// applyforknight.update();
	// applyforknight.remove();

	//applyforpartner.find();
	// applyforpartner.findAll();
	// applyforpartner.add();
	// applyforpartner.update();
	// applyforpartner.remove();

	//applyforseller.find();
	// applyforseller.findAll();
	// applyforseller.add();
	// applyforseller.update();
	// applyforseller.remove();

	//area.find();
	// area.findAll();
	// area.add();
	// area.update();
	// area.remove();

	//businesstypes.find();
	// businesstypes.findAll();
	// businesstypes.add();
	// businesstypes.update();
	// businesstypes.remove();

	//city.find();
	// city.findAll();
	// city.add();
	// city.update();
	// city.remove();

	//client.find();
	// client.findAll();
	// client.add();
	// client.update();
	// client.remove();

	//comment.find();
	// comment.findAll();
	// comment.add();
	// comment.update();
	// comment.remove();

	//dormitory.find();
	// dormitory.findAll();
	// dormitory.add();
	// dormitory.update();
	// dormitory.remove();

	//dormitorysupplierrelation.find();
	// dormitorysupplierrelation.findAll();
	// dormitorysupplierrelation.add();
	// dormitorysupplierrelation.update();
	// dormitorysupplierrelation.remove();

	//goods.find();
	// goods.findAll();
	// goods.add();
	// goods.update();
	// goods.remove();

	//goodschannel.find();
	// goodschannel.findAll();
	// goodschannel.add();
	// goodschannel.update();
	// goodschannel.remove();

	//goodstypes.find();
	// goodstypes.findAll();
	// goodstypes.add();
	// goodstypes.update();
	// goodstypes.remove();

	//goodstypesrelation.find();
	// goodstypesrelation.findAll();
	// goodstypesrelation.add();
	// goodstypesrelation.update();
	// goodstypesrelation.remove();

	// knight.find();
	// knight.findAll();
	// knight.add();
	// knight.update();
	// knight.remove();
	// knight.screenRushKnightAll();

	//mapknighttemp.find();
	// mapknighttemp.findAll();
	// mapknighttemp.add();
	// mapknighttemp.update();
	// mapknighttemp.remove();

	//noticeforknight.find();
	// noticeforknight.findAll();
	// noticeforknight.add();
	// noticeforknight.update();
	// noticeforknight.remove();

	//order.find();
	// order.findAll();
	// order.add();
	// order.update();
	// order.remove();

	//ordergoodsrelation.find();
	// ordergoodsrelation.findAll();
	// ordergoodsrelation.add();
	// ordergoodsrelation.update();
	// ordergoodsrelation.remove();

	//orderstruts.find();
	// orderstruts.findAll();
	// orderstruts.add();
	// orderstruts.update();
	// orderstruts.remove();

	//partner.find();
	// partner.findAll();
	// partner.add();
	// partner.update();
	// partner.remove();
	// partner.partnerLogin();

	//province.find();
	// province.findAll();
	// province.add();
	// province.update();
	// province.remove();

	//school.find();
	// school.findAll();
	// school.add();
	// school.update();
	// school.remove();

	//schoolactivation.find();
	// schoolactivation.findAll();
	// schoolactivation.add();
	// schoolactivation.update();
	// schoolactivation.remove();

	//schooladd.find();
	// schooladd.findAll();
	// schooladd.add();
	// schooladd.update();
	// schooladd.remove();

	//seller.find();
	// seller.findAll();
	// seller.add();
	// seller.update();
	// seller.remove();

	//selleradmin.find();
	// selleradmin.findAll();
	// selleradmin.add();
	// selleradmin.update();
	// selleradmin.remove();

	//sellertypes.find();
	// sellertypes.findAll();
	// sellertypes.add();
	// sellertypes.update();
	// sellertypes.remove();

	//sellertypesrelation.find();
	// sellertypesrelation.findAll();
	// sellertypesrelation.add();
	// sellertypesrelation.update();
	// sellertypesrelation.remove();

	// supplier.find();
	// supplier.findAll();
	// supplier.add();
	// supplier.update();
	// supplier.remove();

	//sysaaauser.find();
	// sysaaauser.findAll();
	// sysaaauser.add();
	// sysaaauser.update();
	// sysaaauser.remove();


});