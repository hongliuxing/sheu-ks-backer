const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const RushGoods = app.model.define('rush_goods', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		activity_id: {
			type: DataTypes.STRING,
		},
		goods_id: {
			type: DataTypes.STRING,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		createAt: {
			type: DataTypes.DATE,
			get createAt() {
				return moment(RushGoods.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		updateAt: {
			type: DataTypes.DATE,
			get updateAt() {
				return moment(RushGoods.getDataValue('updateAt')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'rush_goods',
		timestamps: false,
	});

	RushGoods.associate = () => {
		// RushGoods.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// RushGoods.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return RushGoods;
};

