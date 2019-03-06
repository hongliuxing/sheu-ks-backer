"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 快送地址
 */
const moment = require('moment');
exports.default = (app) => {
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
    };
    return Address;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1FBQzNDLEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLE9BQU87Z0JBQ1YsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzlFLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLFNBQVM7UUFDcEIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDeEIsOEZBQThGO1FBQzlGLDRGQUE0RjtJQUM3RixDQUFDLENBQUE7SUFFRCxPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDLENBQUMifQ==