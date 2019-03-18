"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 合伙人申请
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Applyforpartner = app.model.define('applyforpartner', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        sysuer_id: {
            type: DataTypes.STRING,
        },
        telephone: {
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
                return moment(Applyforpartner.getDataValue('apply_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        check_time: {
            type: DataTypes.DATE,
            get check_time() {
                return moment(Applyforpartner.getDataValue('check_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'applyforpartner',
        timestamps: false,
    });
    Applyforpartner.associate = () => {
        // Applyforpartner.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Applyforpartner.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Applyforpartner;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlmb3JwYXJ0bmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwbHlmb3JwYXJ0bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN0QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRWhDLE1BQU0sZUFBZSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1FBQzNELEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELGFBQWEsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFVBQVU7Z0JBQ2IsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7UUFDRCxVQUFVLEVBQUU7WUFDWCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxVQUFVO2dCQUNiLE9BQU8sTUFBTSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN6RixDQUFDO1lBQ0QsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHO1NBQzNCO0tBQ0QsRUFBRTtRQUNGLFNBQVMsRUFBRSxpQkFBaUI7UUFDNUIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsZUFBZSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDaEMsc0dBQXNHO1FBQ3RHLG9HQUFvRztJQUNyRyxDQUFDLENBQUM7SUFFRixPQUFPLGVBQWUsQ0FBQztBQUN4QixDQUFDLENBQUMifQ==