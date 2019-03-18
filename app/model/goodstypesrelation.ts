/**
 * 模型: 商品类别关系
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Goodstypesrelation = app.model.define('goodstypesrelation', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		goods_id: {
			type: DataTypes.STRING,
		},
		priority: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Goodstypesrelation.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'goodstypesrelation',
		timestamps: false,
	});

	Goodstypesrelation.associate = () => {
		// Goodstypesrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Goodstypesrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Goodstypesrelation;
};
