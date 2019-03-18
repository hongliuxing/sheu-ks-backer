"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: (废弃)原有的学校信息
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Schooladd = app.model.define('schooladd', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        type: {
            type: DataTypes.STRING,
        },
        province: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        district: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'schooladd',
        timestamps: false,
    });
    Schooladd.associate = () => {
        // Schooladd.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Schooladd.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Schooladd;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sYWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nob29sYWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQy9DLEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELElBQUksRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELElBQUksRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELElBQUksRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsV0FBVztRQUN0QixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUMxQixnR0FBZ0c7UUFDaEcsOEZBQThGO0lBQy9GLENBQUMsQ0FBQztJQUVGLE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9