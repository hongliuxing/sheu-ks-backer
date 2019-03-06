"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 城市
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const City = app.model.define('city', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        code: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
        },
        provincecode: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'city',
        timestamps: false,
    });
    City.associate = () => {
        // City.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // City.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return City;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDckMsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsWUFBWSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO0tBQ0QsRUFBRTtRQUNGLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFVBQVUsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQ3JCLDJGQUEyRjtRQUMzRix5RkFBeUY7SUFDMUYsQ0FBQyxDQUFBO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDYixDQUFDLENBQUMifQ==