"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 商品类别关系
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Goodstypesrelation = app.model.define('goodstypesrelation', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        goods_id: {
            type: DataTypes.STRING,
        },
        priority: {
            type: DataTypes.INTEGER,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Goodstypesrelation.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'goodstypesrelation',
        timestamps: false,
    });
    Goodstypesrelation.associate = () => {
        // Goodstypesrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Goodstypesrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Goodstypesrelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHN0eXBlc3JlbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ29vZHN0eXBlc3JlbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN0QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRWhDLE1BQU0sa0JBQWtCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7UUFDakUsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLElBQUksT0FBTztnQkFDVixPQUFPLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUN6RixDQUFDO1lBQ0QsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHO1NBQzNCO0tBQ0QsRUFBRTtRQUNGLFNBQVMsRUFBRSxvQkFBb0I7UUFDL0IsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsa0JBQWtCLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUNuQyx5R0FBeUc7UUFDekcsdUdBQXVHO0lBQ3hHLENBQUMsQ0FBQztJQUVGLE9BQU8sa0JBQWtCLENBQUM7QUFDM0IsQ0FBQyxDQUFDIn0=