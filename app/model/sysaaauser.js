"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 测试后台
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Sysaaauser = app.model.define('sysaaauser', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        unionid: {
            type: DataTypes.STRING,
        },
        openid: {
            type: DataTypes.STRING,
        },
        nickname: {
            type: DataTypes.STRING,
        },
        realname: {
            type: DataTypes.STRING,
        },
        telephone: {
            type: DataTypes.STRING,
        },
        logo_url: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.INTEGER,
        },
        struts: {
            type: DataTypes.INTEGER,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Sysaaauser.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'sysaaauser',
        timestamps: false,
    });
    Sysaaauser.associate = () => {
        // Sysaaauser.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Sysaaauser.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Sysaaauser;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzYWFhdXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN5c2FhYXVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1FBQ2pELEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLE9BQU87Z0JBQ1YsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2pGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLFlBQVk7UUFDdkIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDM0IsaUdBQWlHO1FBQ2pHLCtGQUErRjtJQUNoRyxDQUFDLENBQUE7SUFFRCxPQUFPLFVBQVUsQ0FBQztBQUNuQixDQUFDLENBQUMifQ==