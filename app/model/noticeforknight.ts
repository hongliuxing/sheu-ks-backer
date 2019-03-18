/**
 * 模型: 对骑士通知表
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Noticeforknight = app.model.define('noticeforknight', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		partner_id: {
			type: DataTypes.STRING,
		},
		ntype: {
			type: DataTypes.INTEGER,
		},
		title: {
			type: DataTypes.STRING,
		},
		content: {
			type: DataTypes.STRING,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Noticeforknight.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'noticeforknight',
		timestamps: false,
	});

	Noticeforknight.associate = () => {
		// Noticeforknight.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Noticeforknight.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Noticeforknight;
};
