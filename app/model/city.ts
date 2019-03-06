/**
 * 模型: 城市
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const City = app.model.define('city', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		code: {
			type: DataTypes.STRING,
		},
		name: {
			type: DataTypes.STRING,
		},
		provincecode: {
			type: DataTypes.STRING,
		}
	}, {
		tableName: 'city',
		timestamps: false,
	});

	City.associate = () => {
		// City.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// City.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return City;
};

