"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 供应商
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Supplier = app.model.define('supplier', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        unionid: {
            type: DataTypes.STRING,
        },
        openid: {
            type: DataTypes.STRING,
        },
        nickname: {
            type: DataTypes.STRING,
        },
        realname: {
            type: DataTypes.STRING,
        },
        phone_num: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING,
        },
        sex: {
            type: DataTypes.INTEGER,
        },
        logo_url: {
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
        school_id: {
            type: DataTypes.INTEGER,
        },
        createAt: {
            type: DataTypes.DATE,
            get created() {
                return moment(Supplier.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        address: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'supplier',
        timestamps: false,
    });
    Supplier.associate = () => {
        Supplier.belongsTo(app.model.Dormitorysupplierrelation, { foreignKey: 'id', targetKey: 'suppli_id' });
        // Supplier.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Supplier;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcGxpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdXBwbGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDN0MsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsSUFBSSxFQUFFO1lBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsR0FBRyxFQUFFO1lBQ0osSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsZUFBZSxFQUFFO1lBQ2hCLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELGNBQWMsRUFBRTtZQUNmLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFlBQVksRUFBRTtZQUNiLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLE9BQU87Z0JBQ1YsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2hGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7UUFDRCxPQUFPLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLFVBQVU7UUFDckIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsUUFBUSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDekIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLENBQUUsQ0FBQztRQUN2Ryw2RkFBNkY7SUFDOUYsQ0FBQyxDQUFBO0lBRUQsT0FBTyxRQUFRLENBQUM7QUFDakIsQ0FBQyxDQUFDIn0=