/**
 * 模型: 供应商
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Supplier = app.model.define('supplier', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		unionid: {
			type: DataTypes.STRING,
		},
		openid: {
			type: DataTypes.STRING,
		},
		nickname: {
			type: DataTypes.STRING,
		},
		realname: {
			type: DataTypes.STRING,
		},
		phone_num: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.STRING,
		},
		sex: {
			type: DataTypes.INTEGER,
		},
		logo_url: {
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
		school_id: {
			type: DataTypes.INTEGER,
		},
		createAt: {
			type: DataTypes.DATE,
			get created() {
				return moment(Supplier.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		address: {
			type: DataTypes.STRING, // 地址详情, 此处主要指宿舍号
		},
	}, {
		tableName: 'supplier',
		timestamps: false,
	});

	Supplier.associate = () => {
		Supplier.belongsTo(app.model.Dormitorysupplierrelation, { foreignKey: 'id', targetKey: 'suppli_id' } );
		// Supplier.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Supplier;
};

