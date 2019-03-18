const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Banner = app.model.define('banner', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
		pic_url: {
			type: DataTypes.STRING,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		indexes: {
			type: DataTypes.INTEGER,
		},
		createAt: {
			type: DataTypes.DATE,
			get createAt() {
				return moment(Banner.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
	}, {
		tableName: 'banner',
		timestamps: false,
	});

	Banner.associate = () => {
		// Banner.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Banner.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	};

	return Banner;
};
