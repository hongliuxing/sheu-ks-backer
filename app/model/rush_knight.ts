const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const RushKnight = app.model.define('rush_knight', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		activity_id: {
			type: DataTypes.STRING,
		},
		knight_id: {
			type: DataTypes.STRING,
		},
		predict_order_count: {
			type: DataTypes.INTEGER,
		},
		done_order_count: {
			type: DataTypes.INTEGER,
		},
		goods_stat: {
			type: DataTypes.STRING,
		},
		createAt: {
			type: DataTypes.DATE,
			get createAt() {
				return moment(RushKnight.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'rush_knight',
		timestamps: false,
	});

	RushKnight.associate = () => {
		RushKnight.belongsTo(app.model.Knight, { foreignKey: 'knight_id', targetKey: 'id' } );
		// RushKnight.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } ); // Knight
		// RushKnight.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return RushKnight;
};
