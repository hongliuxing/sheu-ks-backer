/**
 * 模型: 商户申请
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Applyforseller = app.model.define('applyforseller', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		school_id: {
			type: DataTypes.STRING,
		},
		seller_admin_id: {
			type: DataTypes.STRING,
		},
		partner_id: {
			type: DataTypes.STRING,
		},
		btype: {
			type: DataTypes.STRING,
		},
		sellerName: {
			type: DataTypes.STRING,
		},
		sellerType: {
			type: DataTypes.STRING,
		},
		legal_person: {
			type: DataTypes.STRING,
		},
		telephone: {
			type: DataTypes.STRING,
		},
		license_url: {
			type: DataTypes.STRING,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		reject_reason: {
			type: DataTypes.STRING,
		},
		apply_time: {
			type: DataTypes.DATE,
			get apply_time() {
				return moment(Applyforseller.getDataValue('apply_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		check_time: {
			type: DataTypes.DATE,
			get check_time() {
				return moment(Applyforseller.getDataValue('check_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'applyforseller',
		timestamps: false,
	});

	Applyforseller.associate = () => {
		// Applyforseller.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Applyforseller.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Applyforseller;
};

