/**
 * 模型: 宿舍楼
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const Dormitory = app.model.define('dormitory', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		drom_name: {
			type: DataTypes.STRING,
		},
		drom_num: {
			type: DataTypes.INTEGER,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
	}, {
		tableName: 'dormitory',
		timestamps: false,
	});

	Dormitory.associate = () => {
		Dormitory.belongsTo(app.model.Dormitorysupplierrelation, { foreignKey: 'id', targetKey: 'dorm_id' } );
		// Dormitory.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Dormitory;
};
