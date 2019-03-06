"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 合伙人
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Partner = app.model.define('partner', {
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
        school_id: {
            type: DataTypes.INTEGER,
        },
        nickname: {
            type: DataTypes.STRING,
        },
        realname: {
            type: DataTypes.STRING,
        },
        person_id: {
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
        createAt: {
            type: DataTypes.DATE,
            get createAt() {
                return moment(Partner.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'partner',
        timestamps: false,
    });
    Partner.associate = () => {
        Partner.belongsTo(app.model.School, { foreignKey: 'school_id', targetKey: 'sid' });
        // Partner.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Partner;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFydG5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhcnRuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQzNDLEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFFBQVE7Z0JBQ1gsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQy9FLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLFNBQVM7UUFDcEIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDeEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFFLENBQUM7UUFDcEYsNEZBQTRGO0lBQzdGLENBQUMsQ0FBQTtJQUVELE9BQU8sT0FBTyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9