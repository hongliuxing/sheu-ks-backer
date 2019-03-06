/**
 * 模型: 骑士申请
 */
const moment = require('moment');

export default (app) => {
	const DataTypes = app.Sequelize;

	const Applyforknight = app.model.define('applyforknight', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		school_id: {
			type: DataTypes.STRING,
		},
		knight_id: {
			type: DataTypes.STRING,
		},
		partner_id: {
			type: DataTypes.STRING,
		},
		realname: {
			type: DataTypes.STRING,
		},
		telephone: {
			type: DataTypes.STRING,
		},
		student_card_url: {
			type: DataTypes.STRING,
		},
		struts: {
			type: DataTypes.INTEGER,
		},
		reject_reason: {
			type: DataTypes.STRING,
		},
		apply_time: {
			type: DataTypes.DATE,
			get apply_time() {
				return moment(Applyforknight.getDataValue('apply_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		},
		check_time: {
			type: DataTypes.DATE,
			get check_time() {
				return moment(Applyforknight.getDataValue('check_time')).format('YYYY-MM-DD HH:mm:ss');
			},
			defaultValue: DataTypes.NOW,
		}
	}, {
		tableName: 'applyforknight',
		timestamps: false,
	});

	Applyforknight.associate = () => {
		// Applyforknight.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
		// Applyforknight.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
	}
	
	return Applyforknight;
};

