const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const SheuUser = app.model.define('sheu_user', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		openid: {
			type: DataTypes.STRING,
		},
		unionid: {
			type: DataTypes.STRING,
		},
		nickname: {
			type: DataTypes.STRING,
		},
		sex: {
			type: DataTypes.INTEGER,
		},
		language: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		province: {
			type: DataTypes.STRING,
		},
		country: {
			type: DataTypes.STRING,
		},
		headimgurl: {
			type: DataTypes.STRING,
		},
		subscribe_time: {
			type: DataTypes.STRING,
		},
		remark: {
			type: DataTypes.STRING,
		},
		groupid: {
			type: DataTypes.INTEGER,
		},
		subscribe_scene: {
			type: DataTypes.STRING,
		},
		qr_scene: {
			type: DataTypes.INTEGER,
		},
		qr_scene_str: {
			type: DataTypes.STRING,
		},
		createAt: {
			type: DataTypes.DATE,
			get createAt() {
				return moment(SheuUser.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'sheu_user',
		timestamps: false,
	});

	SheuUser.associate = () => {
		// SheuUser.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// SheuUser.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return SheuUser;
};
