/**
 * 模型: 合伙人申请
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Applyforpartner = app.model.define('applyforpartner', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		sysuer_id: {
			type: DataTypes.STRING,
		},
		telephone: {
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
				return moment(Applyforpartner.getDataValue('apply_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		check_time: {
			type: DataTypes.DATE,
			get check_time() {
				return moment(Applyforpartner.getDataValue('check_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'applyforpartner',
		timestamps: false,
	});

	Applyforpartner.associate = () => {
		// Applyforpartner.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Applyforpartner.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Applyforpartner;
};

