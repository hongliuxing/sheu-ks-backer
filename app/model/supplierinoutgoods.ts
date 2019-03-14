const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Supplierinoutgoods = app.model.define('supplierinoutgoods', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		supplier_id: {
			type: DataTypes.STRING,
		},
		goods_id: {
			type: DataTypes.STRING,
		},
		partner_id: {
			type: DataTypes.STRING,
		},
		state: {
			type: DataTypes.INTEGER,
		},
		total_count: {
			type: DataTypes.INTEGER,
		},
		remark: {
			type: DataTypes.STRING,
		},
		create_time: {
			type: DataTypes.DATE,
			get create_time() {
				return moment(Supplierinoutgoods.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		modify_time: {
			type: DataTypes.DATE,
			get modify_time() {
				return moment(Supplierinoutgoods.getDataValue('modify_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'supplierinoutgoods',
		timestamps: false,
	});

	Supplierinoutgoods.associate = () => {
		// Supplierinoutgoods.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Supplierinoutgoods.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Supplierinoutgoods;
};

