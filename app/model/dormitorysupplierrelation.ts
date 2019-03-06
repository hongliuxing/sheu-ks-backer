/**
 * 模型: 宿舍-供应商-关系
 */
export default (app) => {
	const DataTypes = app.Sequelize;

	const Dormitorysupplierrelation = app.model.define('dormitorysupplierrelation', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		dorm_id: {
			type: DataTypes.STRING,
		},
		suppli_id: {
			type: DataTypes.STRING,
		}
	}, {
		tableName: 'dormitorysupplierrelation',
		timestamps: false,
	});

	Dormitorysupplierrelation.associate = () => {
		Dormitorysupplierrelation.belongsTo(app.model.Supplier, { foreignKey: 'suppli_id', targetKey: 'id' } );
		Dormitorysupplierrelation.belongsTo(app.model.Dormitory, { foreignKey: 'dorm_id', targetKey: 'id' } );
		// Dormitorysupplierrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Dormitorysupplierrelation;
};

