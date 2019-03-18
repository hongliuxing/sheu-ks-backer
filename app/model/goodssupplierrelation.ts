const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Goodssupplierrelation = app.model.define('goodssupplierrelation', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		goods_id: {
			type: DataTypes.STRING,
		},
		supplier_id: {
			type: DataTypes.STRING,
		},
		current_count: {
			type: DataTypes.INTEGER,
		},
		seller_count: {
			type: DataTypes.INTEGER,
		},
		modify_time: {
			type: DataTypes.DATE,
			get modify_time() {
				return moment(Goodssupplierrelation.getDataValue('modify_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		create_time: {
			type: DataTypes.DATE,
			get create_time() {
				return moment(Goodssupplierrelation.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'goodssupplierrelation',
		timestamps: false,
	});

	Goodssupplierrelation.associate = () => {
		// Goodssupplierrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		Goodssupplierrelation.belongsTo(app.model.Goods, { foreignKey: 'goods_id', targetKey: 'id', as: 'goods' } );
		Goodssupplierrelation.belongsTo(app.model.Supplier, { foreignKey: 'supplier_id', targetKey: 'id' } );
		// Goodssupplierrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Goodssupplierrelation;
};
