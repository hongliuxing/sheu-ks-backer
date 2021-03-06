"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 商品
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Goods = app.model.define('goods', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        seller_id: {
            type: DataTypes.STRING,
        },
        dorm_id: {
            type: DataTypes.STRING,
        },
        channel_id: {
            type: DataTypes.STRING,
        },
        thumb_url: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        good_type: {
            type: DataTypes.INTEGER,
        },
        summary: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        discount_price: {
            type: DataTypes.INTEGER,
        },
        priority: {
            type: DataTypes.INTEGER,
        },
        struts: {
            type: DataTypes.INTEGER,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Goods.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        school_id: {
            type: DataTypes.INTEGER,
        },
        total_count: {
            type: DataTypes.INTEGER,
        },
        sell_count: {
            type: DataTypes.INTEGER,
        },
        history_count: {
            type: DataTypes.INTEGER,
        },
        updateAt: {
            type: DataTypes.DATE,
            get updateAt() {
                return moment(Goods.getDataValue('updateAt')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'goods',
        timestamps: false,
    });
    Goods.associate = () => {
        Goods.belongsTo(app.model.Goodschannel, { foreignKey: 'channel_id', targetKey: 'id' });
        Goods.belongsTo(app.model.Seller, { foreignKey: 'seller_id', targetKey: 'id' });
        // Goods.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Goods.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Goods;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnb29kcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7UUFDdkMsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsVUFBVSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsY0FBYyxFQUFFO1lBQ2YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLElBQUksT0FBTztnQkFDVixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDNUUsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELGFBQWEsRUFBRTtZQUNkLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFFBQVE7Z0JBQ1gsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzdFLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLE9BQU87UUFDbEIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDdEIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7UUFDeEYsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7UUFDakYsNEZBQTRGO1FBQzVGLDBGQUEwRjtJQUMzRixDQUFDLENBQUM7SUFFRixPQUFPLEtBQUssQ0FBQztBQUNkLENBQUMsQ0FBQyJ9