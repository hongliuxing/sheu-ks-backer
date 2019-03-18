/**
 * 模型: 激活学校(关联关系)
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const Schoolactivation = app.model.define('schoolactivation', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
		state: {
			type: DataTypes.INTEGER,
		},
	}, {
		tableName: 'schoolactivation',
		timestamps: false,
	});

	Schoolactivation.associate = () => {
		// Schoolactivation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Schoolactivation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Schoolactivation;
};
