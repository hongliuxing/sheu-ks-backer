/**
 * 模型: 订单-商品-关系
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Ordergoodsrelation = app.model.define('ordergoodsrelation', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		out_trade_no: {
			type: DataTypes.STRING,
		},
		goods_id: {
			type: DataTypes.STRING,
		},
		goods_count: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Ordergoodsrelation.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'ordergoodsrelation',
		timestamps: false,
	});

	Ordergoodsrelation.associate = () => {
		// Ordergoodsrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Ordergoodsrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Ordergoodsrelation;
};

