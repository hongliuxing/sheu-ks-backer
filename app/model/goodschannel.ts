/**
 * 模型: 商品频道
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Goodschannel = app.model.define('goodschannel', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		seller_id: {
			type: DataTypes.STRING,
		},
		title: {
			type: DataTypes.STRING,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
		priority: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Goodschannel.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'goodschannel',
		timestamps: false,
	});

	Goodschannel.associate = () => {
		Goodschannel.hasMany(app.model.Goods, { foreignKey: 'id', targetKey: 'channel_id' } );
		// Goodschannel.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Goodschannel.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Goodschannel;
};

