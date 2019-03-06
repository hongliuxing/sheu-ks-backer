/**
 * 模型: 供应商
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Sellertypes = app.model.define('sellertypes', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		ctype: {
			type: DataTypes.STRING,
		},
		clevel: {
			type: DataTypes.INTEGER,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Sellertypes.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'sellertypes',
		timestamps: false,
	});

	Sellertypes.associate = () => {
		// Sellertypes.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Sellertypes.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Sellertypes;
};

