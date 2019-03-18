/**
 * 模型: 商户类型
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Businesstypes = app.model.define('businesstypes', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		btype: {
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
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Businesstypes.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'businesstypes',
		timestamps: false,
	});

	Businesstypes.associate = () => {
		// Businesstypes.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Businesstypes.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Businesstypes;
};
