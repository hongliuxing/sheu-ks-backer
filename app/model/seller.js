"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 商家
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Seller = app.model.define('seller', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        openid: {
            type: DataTypes.STRING,
        },
        business_id: {
            type: DataTypes.STRING,
        },
        seller_admin_id: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        logo_url: {
            type: DataTypes.STRING,
        },
        telephone: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        notice: {
            type: DataTypes.STRING,
        },
        business_status: {
            type: DataTypes.INTEGER,
        },
        business_start: {
            type: DataTypes.STRING,
        },
        business_end: {
            type: DataTypes.STRING,
        },
        express_fee: {
            type: DataTypes.INTEGER,
        },
        min_amount: {
            type: DataTypes.INTEGER,
        },
        struts: {
            type: DataTypes.INTEGER,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Seller.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        school_id: {
            type: DataTypes.INTEGER,
        },
    }, {
        tableName: 'seller',
        timestamps: false,
    });
    Seller.associate = () => {
        Seller.hasMany(app.model.Goods, { foreignKey: 'id', targetKey: 'seller_id' });
        // Seller.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Seller.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Seller;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VsbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN0QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRWhDLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUN6QyxFQUFFLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLElBQUk7U0FDaEI7UUFDRCxNQUFNLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxXQUFXLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxlQUFlLEVBQUU7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsZUFBZSxFQUFFO1lBQ2hCLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELGNBQWMsRUFBRTtZQUNmLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFlBQVksRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE1BQU0sRUFBRTtZQUNQLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELE9BQU8sRUFBRTtZQUNSLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLE9BQU87Z0JBQ1YsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7UUFDRCxTQUFTLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87U0FDdkI7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLFFBQVE7UUFDbkIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxDQUFFLENBQUM7UUFDL0UsNkZBQTZGO1FBQzdGLDJGQUEyRjtJQUM1RixDQUFDLENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNmLENBQUMsQ0FBQyJ9