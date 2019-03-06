"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 商户申请
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Applyforseller = app.model.define('applyforseller', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        school_id: {
            type: DataTypes.STRING,
        },
        seller_admin_id: {
            type: DataTypes.STRING,
        },
        partner_id: {
            type: DataTypes.STRING,
        },
        btype: {
            type: DataTypes.STRING,
        },
        sellerName: {
            type: DataTypes.STRING,
        },
        sellerType: {
            type: DataTypes.STRING,
        },
        legal_person: {
            type: DataTypes.STRING,
        },
        telephone: {
            type: DataTypes.STRING,
        },
        license_url: {
            type: DataTypes.STRING,
        },
        struts: {
            type: DataTypes.INTEGER,
        },
        reject_reason: {
            type: DataTypes.STRING,
        },
        apply_time: {
            type: DataTypes.DATE,
            get apply_time() {
                return moment(Applyforseller.getDataValue('apply_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        check_time: {
            type: DataTypes.DATE,
            get check_time() {
                return moment(Applyforseller.getDataValue('check_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'applyforseller',
        timestamps: false,
    });
    Applyforseller.associate = () => {
        // Applyforseller.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Applyforseller.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Applyforseller;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbHlmb3JzZWxsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBseWZvcnNlbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLGNBQWMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtRQUN6RCxFQUFFLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLElBQUk7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxlQUFlLEVBQUU7WUFDaEIsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsVUFBVSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsVUFBVSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsVUFBVSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsWUFBWSxFQUFFO1lBQ2IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsV0FBVyxFQUFFO1lBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsYUFBYSxFQUFFO1lBQ2QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsVUFBVSxFQUFFO1lBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLElBQUksVUFBVTtnQkFDYixPQUFPLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDeEYsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFVBQVU7Z0JBQ2IsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3hGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLGdCQUFnQjtRQUMzQixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxjQUFjLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUMvQixxR0FBcUc7UUFDckcsbUdBQW1HO0lBQ3BHLENBQUMsQ0FBQTtJQUVELE9BQU8sY0FBYyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyJ9