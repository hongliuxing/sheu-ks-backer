/**
 * 模型: 测试后台
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Sysaaauser = app.model.define('sysaaauser', {
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
				return moment(Sysaaauser.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'sysaaauser',
		timestamps: false,
	});

	Sysaaauser.associate = () => {
		// Sysaaauser.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Sysaaauser.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Sysaaauser;
};

