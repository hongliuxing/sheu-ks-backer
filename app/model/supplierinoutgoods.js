"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Supplierinoutgoods = app.model.define('supplierinoutgoods', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        supplier_id: {
            type: DataTypes.STRING,
        },
        goods_id: {
            type: DataTypes.STRING,
        },
        partner_id: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.INTEGER,
        },
        total_count: {
            type: DataTypes.INTEGER,
        },
        remark: {
            type: DataTypes.STRING,
        },
        create_time: {
            type: DataTypes.DATE,
            get create_time() {
                return moment(Supplierinoutgoods.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        modify_time: {
            type: DataTypes.DATE,
            get modify_time() {
                return moment(Supplierinoutgoods.getDataValue('modify_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'supplierinoutgoods',
        timestamps: false,
    });
    Supplierinoutgoods.associate = () => {
        // Supplierinoutgoods.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Supplierinoutgoods.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Supplierinoutgoods;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcGxpZXJpbm91dGdvb2RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3VwcGxpZXJpbm91dGdvb2RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO1FBQ2pFLEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELEtBQUssRUFBRTtZQUNOLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFdBQVc7Z0JBQ2QsT0FBTyxNQUFNLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDN0YsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFdBQVc7Z0JBQ2QsT0FBTyxNQUFNLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDN0YsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsb0JBQW9CO1FBQy9CLFVBQVUsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUVILGtCQUFrQixDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDbkMseUdBQXlHO1FBQ3pHLHVHQUF1RztJQUN4RyxDQUFDLENBQUM7SUFFRixPQUFPLGtCQUFrQixDQUFDO0FBQzNCLENBQUMsQ0FBQyJ9