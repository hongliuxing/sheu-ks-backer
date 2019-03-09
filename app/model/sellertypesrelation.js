"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 商户类型关系
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Sellertypesrelation = app.model.define('sellertypesrelation', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        seller_id: {
            type: DataTypes.STRING,
        },
        type_id: {
            type: DataTypes.STRING,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Sellertypesrelation.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'sellertypesrelation',
        timestamps: false,
    });
    Sellertypesrelation.associate = () => {
        // Sellertypesrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Sellertypesrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Sellertypesrelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVydHlwZXNyZWxhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlbGxlcnR5cGVzcmVsYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTtRQUNuRSxFQUFFLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLElBQUk7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxPQUFPLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxPQUFPO2dCQUNWLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzFGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLHFCQUFxQjtRQUNoQyxVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQ3BDLDBHQUEwRztRQUMxRyx3R0FBd0c7SUFDekcsQ0FBQyxDQUFBO0lBRUQsT0FBTyxtQkFBbUIsQ0FBQztBQUM1QixDQUFDLENBQUMifQ==