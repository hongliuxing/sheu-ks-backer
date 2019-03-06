/**
 * 模型: 骑士
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Knight = app.model.define('knight', {
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
		person_id: {
			type: DataTypes.STRING,
		},
		telephone: {
			type: DataTypes.STRING,
		},
		logo_url: {
			type: DataTypes.STRING,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
		gender: {
			type: DataTypes.INTEGER,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Knight.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		dorm_id: {
			type: DataTypes.STRING,
		},
	}, {
		tableName: 'knight',
		timestamps: false,
	});

	Knight.associate = () => {
		Knight.belongsTo(app.model.Dormitory, { foreignKey: 'dorm_id', targetKey: 'id' } ); // RushKnight
		Knight.hasMany(app.model.RushKnight, { foreignKey: 'id', targetKey: 'knight_id' } );
		// Knight.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Knight.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Knight;
};

