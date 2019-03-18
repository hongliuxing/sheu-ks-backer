/**
 * 模型: (废弃)原有的学校信息
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const Schooladd = app.model.define('schooladd', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		type: {
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
		name: {
			type: DataTypes.STRING,
		},
	}, {
		tableName: 'schooladd',
		timestamps: false,
	});

	Schooladd.associate = () => {
		// Schooladd.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Schooladd.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Schooladd;
};
