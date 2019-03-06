"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 宿舍-供应商-关系
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Dormitorysupplierrelation = app.model.define('dormitorysupplierrelation', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        dorm_id: {
            type: DataTypes.STRING,
        },
        suppli_id: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'dormitorysupplierrelation',
        timestamps: false,
    });
    Dormitorysupplierrelation.associate = () => {
        Dormitorysupplierrelation.belongsTo(app.model.Supplier, { foreignKey: 'suppli_id', targetKey: 'id' });
        Dormitorysupplierrelation.belongsTo(app.model.Dormitory, { foreignKey: 'dorm_id', targetKey: 'id' });
        // Dormitorysupplierrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Dormitorysupplierrelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ybWl0b3J5c3VwcGxpZXJyZWxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRvcm1pdG9yeXN1cHBsaWVycmVsYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLDJCQUEyQixFQUFFO1FBQy9FLEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsMkJBQTJCO1FBQ3RDLFVBQVUsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUVILHlCQUF5QixDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDMUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUUsQ0FBQztRQUN2Ryx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO1FBQ3RHLDhHQUE4RztJQUMvRyxDQUFDLENBQUE7SUFFRCxPQUFPLHlCQUF5QixDQUFDO0FBQ2xDLENBQUMsQ0FBQyJ9