/**
 * 模型: 商家
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Seller = app.model.define('seller', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		openid: {
			type: DataTypes.STRING,
		},
		business_id: {
			type: DataTypes.STRING,
		},
		seller_admin_id: {
			type: DataTypes.STRING,
		},
		title: {
			type: DataTypes.STRING,
		},
		logo_url: {
			type: DataTypes.STRING,
		},
		telephone: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.STRING,
		},
		notice: {
			type: DataTypes.STRING,
		},
		business_status: {
			type: DataTypes.INTEGER,
		},
		business_start: {
			type: DataTypes.STRING,
		},
		business_end: {
			type: DataTypes.STRING,
		},
		express_fee: {
			type: DataTypes.INTEGER,
		},
		min_amount: {
			type: DataTypes.INTEGER,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Seller.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		school_id: {
			type: DataTypes.INTEGER,
		}
	}, {
		tableName: 'seller',
		timestamps: false,
	});

	Seller.associate = () => {
		Seller.hasMany(app.model.Goods, { foreignKey: 'id', targetKey: 'seller_id' } );
		// Seller.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Seller.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Seller;
};

