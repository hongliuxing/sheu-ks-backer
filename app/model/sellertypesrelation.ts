/**
 * 模型: 商户类型关系
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Sellertypesrelation = app.model.define('sellertypesrelation', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		seller_id: {
			type: DataTypes.STRING,
		},
		type_id: {
			type: DataTypes.STRING,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Sellertypesrelation.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'sellertypesrelation',
		timestamps: false,
	});

	Sellertypesrelation.associate = () => {
		// Sellertypesrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Sellertypesrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Sellertypesrelation;
};

