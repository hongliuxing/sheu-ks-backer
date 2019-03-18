"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 订单-商品-关系
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Ordergoodsrelation = app.model.define('ordergoodsrelation', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        out_trade_no: {
            type: DataTypes.STRING,
        },
        goods_id: {
            type: DataTypes.STRING,
        },
        goods_count: {
            type: DataTypes.INTEGER,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Ordergoodsrelation.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'ordergoodsrelation',
        timestamps: false,
    });
    Ordergoodsrelation.associate = () => {
        Ordergoodsrelation.belongsTo(app.model.Goods, { foreignKey: 'goods_id', targetKey: 'id', as: 'goods' });
        // Ordergoodsrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Ordergoodsrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Ordergoodsrelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJnb29kc3JlbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3JkZXJnb29kc3JlbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN0QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRWhDLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7UUFDakUsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsWUFBWSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsV0FBVyxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLElBQUksT0FBTztnQkFDVixPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN6RixDQUFDO1lBQ0QsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHO1NBQzNCO0tBQ0QsRUFBRTtRQUNGLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsa0JBQWtCLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUNuQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFFLENBQUM7UUFDekcseUdBQXlHO1FBQ3pHLHVHQUF1RztJQUN4RyxDQUFDLENBQUE7SUFFRCxPQUFPLGtCQUFrQixDQUFDO0FBQzNCLENBQUMsQ0FBQyJ9