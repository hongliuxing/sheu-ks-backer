/**
 * 模型: 快送地址
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Address = app.model.define('address', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		school_id: {
			type: DataTypes.INTEGER,
		},
		dorm_id: {
			type: DataTypes.STRING,
		},
		author_id: {
			type: DataTypes.STRING,
		},
		realname: {
			type: DataTypes.STRING,
		},
		gender: {
			type: DataTypes.INTEGER,
		},
		mobile: {
			type: DataTypes.STRING,
		},
		school_area: {
			type: DataTypes.STRING,
		},
		detail: {
			type: DataTypes.STRING,
		},
		is_default: {
			type: DataTypes.INTEGER,
		},
		created: {
			type: DataTypes.DATE,
			get created() {
				return moment(Address.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'address',
		timestamps: false,
	});

	Address.associate = () => {
		// Address.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Address.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Address;
};

