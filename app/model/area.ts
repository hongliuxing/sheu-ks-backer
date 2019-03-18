/**
 * 模型: 区域
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const Area = app.model.define('area', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		code: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		citycode: {
			type: DataTypes.STRING,
		},
	}, {
		tableName: 'area',
		timestamps: false,
	});

	Area.associate = () => {
		// Area.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Area.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Area;
};
