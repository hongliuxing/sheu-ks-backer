"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 激活学校(关联关系)
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Schoolactivation = app.model.define('schoolactivation', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        school_id: {
            type: DataTypes.INTEGER,
        },
        state: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'schoolactivation',
        timestamps: false,
    });
    Schoolactivation.associate = () => {
        // Schoolactivation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Schoolactivation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Schoolactivation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sYWN0aXZhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjaG9vbGFjdGl2YXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO1FBQzdELEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELEtBQUssRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsa0JBQWtCO1FBQzdCLFVBQVUsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUVILGdCQUFnQixDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDakMsdUdBQXVHO1FBQ3ZHLHFHQUFxRztJQUN0RyxDQUFDLENBQUM7SUFFRixPQUFPLGdCQUFnQixDQUFDO0FBQ3pCLENBQUMsQ0FBQyJ9