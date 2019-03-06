"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 省份
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Province = app.model.define('province', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'province',
        timestamps: false,
    });
    Province.associate = () => {
        // Province.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Province.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Province;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmluY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm92aW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN0QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRWhDLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUM3QyxFQUFFLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLElBQUk7U0FDaEI7UUFDRCxJQUFJLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxJQUFJLEVBQUU7WUFDTCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLFVBQVU7UUFDckIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDekIsK0ZBQStGO1FBQy9GLDZGQUE2RjtJQUM5RixDQUFDLENBQUE7SUFFRCxPQUFPLFFBQVEsQ0FBQztBQUNqQixDQUFDLENBQUMifQ==