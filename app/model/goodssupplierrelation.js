"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Goodssupplierrelation = app.model.define('goodssupplierrelation', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        goods_id: {
            type: DataTypes.STRING,
        },
        supplier_id: {
            type: DataTypes.STRING,
        },
        current_count: {
            type: DataTypes.INTEGER,
        },
        seller_count: {
            type: DataTypes.INTEGER,
        },
        modify_time: {
            type: DataTypes.DATE,
            get modify_time() {
                return moment(Goodssupplierrelation.getDataValue('modify_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        create_time: {
            type: DataTypes.DATE,
            get create_time() {
                return moment(Goodssupplierrelation.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'goodssupplierrelation',
        timestamps: false,
    });
    Goodssupplierrelation.associate = () => {
        // Goodssupplierrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        Goodssupplierrelation.belongsTo(app.model.Goods, { foreignKey: 'goods_id', targetKey: 'id', as: 'goods' });
        Goodssupplierrelation.belongsTo(app.model.Supplier, { foreignKey: 'supplier_id', targetKey: 'id' });
        // Goodssupplierrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Goodssupplierrelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNzdXBwbGllcnJlbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ29vZHNzdXBwbGllcnJlbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLHVCQUF1QixFQUFFO1FBQ3ZFLEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELGFBQWEsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFlBQVksRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFdBQVc7Z0JBQ2QsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFdBQVc7Z0JBQ2QsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDaEcsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsdUJBQXVCO1FBQ2xDLFVBQVUsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUVILHFCQUFxQixDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDdEMsNEdBQTRHO1FBQzVHLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUUsQ0FBQztRQUM1RyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBRSxDQUFDO1FBQ3JHLDBHQUEwRztJQUMzRyxDQUFDLENBQUM7SUFFRixPQUFPLHFCQUFxQixDQUFDO0FBQzlCLENBQUMsQ0FBQyJ9