const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Dormgoodsrelation = app.model.define('dormgoodsrelation', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		dorm_id: {
			type: DataTypes.STRING,
		},
		goods_id: {
			type: DataTypes.STRING,
		},
		total_count: {
			type: DataTypes.INTEGER,
		},
		seller_count: {
			type: DataTypes.INTEGER,
		},
		create_time: {
			type: DataTypes.DATE,
			get create_time() {
				return moment(Dormgoodsrelation.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		modify_time: {
			type: DataTypes.DATE,
			get modify_time() {
				return moment(Dormgoodsrelation.getDataValue('modify_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'dormgoodsrelation',
		timestamps: false,
	});

	Dormgoodsrelation.associate = () => {
		// Dormgoodsrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Dormgoodsrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Dormgoodsrelation;
};

