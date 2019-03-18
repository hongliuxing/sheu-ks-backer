/**
 * 模型: 商品
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Goods = app.model.define('goods', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		seller_id: {
			type: DataTypes.STRING,
		},
		dorm_id: {
			type: DataTypes.STRING,
		},
		channel_id: {
			type: DataTypes.STRING,
		},
		thumb_url: {
			type: DataTypes.STRING,
		},
		title: {
			type: DataTypes.STRING,
		},
		good_type: {
			type: DataTypes.INTEGER,
		},
		summary: {
			type: DataTypes.STRING,
		},
		price: {
			type: DataTypes.INTEGER,
		},
		discount_price: {
			type: DataTypes.INTEGER,
		},
		priority: {
			type: DataTypes.INTEGER,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Goods.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
		total_count: { // 当前总数量(剩余)
			type: DataTypes.INTEGER,
		},
		sell_count: { // 已销售数量
			type: DataTypes.INTEGER,
		},
		history_count: { // 历史总数量
			type: DataTypes.INTEGER,
		},
		updateAt: {
			type: DataTypes.DATE,
			get updateAt() {
				return moment(Goods.getDataValue('updateAt')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'goods',
		timestamps: false,
	});

	Goods.associate = () => {
		Goods.belongsTo(app.model.Goodschannel, { foreignKey: 'channel_id', targetKey: 'id' } );
		Goods.belongsTo(app.model.Seller, { foreignKey: 'seller_id', targetKey: 'id' } );
		// Goods.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Goods.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Goods;
};
