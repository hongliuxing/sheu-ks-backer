"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 商品频道
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Goodschannel = app.model.define('goodschannel', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        seller_id: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
        },
        school_id: {
            type: DataTypes.INTEGER,
        },
        priority: {
            type: DataTypes.INTEGER,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Goodschannel.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'goodschannel',
        timestamps: false,
    });
    Goodschannel.associate = () => {
        Goodschannel.hasMany(app.model.Goods, { foreignKey: 'id', targetKey: 'channel_id' });
        // Goodschannel.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Goodschannel.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Goodschannel;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZHNjaGFubmVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ29vZHNjaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7O0dBRUc7QUFDSCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN0QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRWhDLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtRQUNyRCxFQUFFLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLElBQUk7U0FDaEI7UUFDRCxTQUFTLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxLQUFLLEVBQUU7WUFDTixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxTQUFTLEVBQUU7WUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87U0FDdkI7UUFDRCxRQUFRLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxPQUFPO2dCQUNWLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuRixDQUFDO1lBQ0QsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHO1NBQzNCO0tBQ0QsRUFBRTtRQUNGLFNBQVMsRUFBRSxjQUFjO1FBQ3pCLFVBQVUsRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQztJQUVILFlBQVksQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQzdCLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsQ0FBRSxDQUFDO1FBQ3RGLG1HQUFtRztRQUNuRyxpR0FBaUc7SUFDbEcsQ0FBQyxDQUFDO0lBRUYsT0FBTyxZQUFZLENBQUM7QUFDckIsQ0FBQyxDQUFDIn0=