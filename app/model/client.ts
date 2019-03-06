/**
 * 模型: 用户
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Client = app.model.define('client', {
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
		telephone: {
			type: DataTypes.STRING,
		},
		logo_url: {
			type: DataTypes.STRING,
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
				return moment(Client.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		dorm_id: {
			type: DataTypes.STRING,
		},
	}, {
		tableName: 'client',
		timestamps: false,
	});

	Client.associate = () => {
		// Client.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Client.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Client;
};

