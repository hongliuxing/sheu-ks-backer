/**
 * 模型: 学校
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const School = app.model.define('school', {
		sid: {
			type: DataTypes.INTEGER,
			primaryKey: true,
		},
		uName: {
			type: DataTypes.STRING,
		},
		level: {
			type: DataTypes.STRING,
		},
		lat: {
			type: DataTypes.STRING,
		},
		lng: {
			type: DataTypes.STRING,
		},
		province: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		district: {
			type: DataTypes.STRING,
		},
		province_code: {
			type: DataTypes.STRING,
		},
		city_code: {
			type: DataTypes.STRING,
		},
		district_code: {
			type: DataTypes.STRING,
		}
	}, {
		tableName: 'school',
		timestamps: false,
	});

	School.associate = () => {
		// School.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// School.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return School;
};

