"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 宿舍楼
 */
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Dormitory = app.model.define('dormitory', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        drom_name: {
            type: DataTypes.STRING,
        },
        drom_num: {
            type: DataTypes.INTEGER,
        },
        school_id: {
            type: DataTypes.INTEGER,
        }
    }, {
        tableName: 'dormitory',
        timestamps: false,
    });
    Dormitory.associate = () => {
        Dormitory.belongsTo(app.model.Dormitorysupplierrelation, { foreignKey: 'id', targetKey: 'dorm_id' });
        // Dormitory.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Dormitory;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ybWl0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG9ybWl0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQy9DLEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsV0FBVztRQUN0QixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUMxQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBRSxDQUFDO1FBQ3RHLDhGQUE4RjtJQUMvRixDQUFDLENBQUE7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNsQixDQUFDLENBQUMifQ==