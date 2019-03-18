"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 区域
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Area = app.model.define('area', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        citycode: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'area',
        timestamps: false,
    });
    Area.associate = () => {
        // Area.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Area.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Area;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJlYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDckMsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO0tBQ0QsRUFBRTtRQUNGLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFVBQVUsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLDJGQUEyRjtRQUMzRix5RkFBeUY7SUFDMUYsQ0FBQyxDQUFDO0lBRUYsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDLENBQUMifQ==