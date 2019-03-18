/**
 * 模型: 骑士地图临时缓存表?
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Mapknighttemp = app.model.define('mapknighttemp', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		knight_id: {
			type: DataTypes.STRING,
		},
		latitude: {
			type: DataTypes.STRING,
		},
		longitude: {
			type: DataTypes.STRING,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Mapknighttemp.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		modify_time: {
			type: DataTypes.DATE,
			get modify_time() {
				return moment(Mapknighttemp.getDataValue('modify_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'mapknighttemp',
		timestamps: false,
	});

	Mapknighttemp.associate = () => {
		// Mapknighttemp.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Mapknighttemp.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Mapknighttemp;
};
