"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 学校
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const School = app.model.define('school', {
        sid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        uName: {
            type: DataTypes.STRING,
        },
        level: {
            type: DataTypes.STRING,
        },
        lat: {
            type: DataTypes.STRING,
        },
        lng: {
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
        province_code: {
            type: DataTypes.STRING,
        },
        city_code: {
            type: DataTypes.STRING,
        },
        district_code: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'school',
        timestamps: false,
    });
    School.associate = () => {
        // School.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // School.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return School;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nob29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1FBQ3pDLEdBQUcsRUFBRTtZQUNKLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztZQUN2QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELEtBQUssRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELEtBQUssRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELEdBQUcsRUFBRTtZQUNKLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELEdBQUcsRUFBRTtZQUNKLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELElBQUksRUFBRTtZQUNMLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELGFBQWEsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELGFBQWEsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsUUFBUTtRQUNuQixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUN2Qiw2RkFBNkY7UUFDN0YsMkZBQTJGO0lBQzVGLENBQUMsQ0FBQztJQUVGLE9BQU8sTUFBTSxDQUFDO0FBQ2YsQ0FBQyxDQUFDIn0=