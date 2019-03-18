/**
 * 模型: 订单表
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Order = app.model.define('order', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		client_id: {
			type: DataTypes.STRING,
		},
		seller_id: {
			type: DataTypes.STRING,
		},
		knight_id: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.STRING,
		},
		out_trade_no: {
			type: DataTypes.STRING,
		},
		device: {
			type: DataTypes.STRING,
		},
		spbill_create_ip: {
			type: DataTypes.STRING,
		},
		gift_fee: {
			type: DataTypes.INTEGER,
		},
		discount_fee: {
			type: DataTypes.INTEGER,
		},
		express_fee: {
			type: DataTypes.INTEGER,
		},
		total_fee: {
			type: DataTypes.INTEGER,
		},
		goods_detail: {
			type: DataTypes.STRING,
		},
		remark: {
			type: DataTypes.STRING,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Order.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
		realname: {
			type: DataTypes.STRING,
		},
		gender: {
			type: DataTypes.INTEGER,
		},
		mobile: {
			type: DataTypes.STRING,
		},
		school_area: {
			type: DataTypes.STRING,
		},
		detail: {
			type: DataTypes.STRING,
		},
		dorm_id: {
			type: DataTypes.STRING,
		},
		rush_activity_id: {
			type: DataTypes.STRING,
		},
	}, {
		tableName: 'order',
		timestamps: false,
	});

	Order.associate = () => {
		// Order.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } ); //Ordergoodsrelation
		Order.belongsTo(app.model.Orderstruts, { foreignKey: 'out_trade_no', targetKey: 'id', as: 'orderstruts' } );
		Order.belongsTo(app.model.Dormitory, { foreignKey: 'dorm_id', targetKey: 'id' } );

		Order.hasMany(app.model.Ordergoodsrelation, { foreignKey: 'out_trade_no', targetKey: 'out_trade_no' } );
		// Order.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Order;
};

