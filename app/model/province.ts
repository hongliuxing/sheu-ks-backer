/**
 * 模型: 省份
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const Province = app.model.define('province', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		code: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		}
	}, {
		tableName: 'province',
		timestamps: false,
	});

	Province.associate = () => {
		// Province.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Province.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Province;
};

