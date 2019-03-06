/**
 * 模型: 商品类别
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Goodstypes = app.model.define('goodstypes', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		author_id: {
			type: DataTypes.STRING,
		},
		title: {
			type: DataTypes.STRING,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Goodstypes.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'goodstypes',
		timestamps: false,
	});

	Goodstypes.associate = () => {
		// Goodstypes.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Goodstypes.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Goodstypes;
};

