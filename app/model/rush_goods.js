"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const RushGoods = app.model.define('rush_goods', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        activity_id: {
            type: DataTypes.STRING,
        },
        goods_id: {
            type: DataTypes.STRING,
        },
        struts: {
            type: DataTypes.INTEGER,
        },
        createAt: {
            type: DataTypes.DATE,
            get createAt() {
                return moment(RushGoods.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        updateAt: {
            type: DataTypes.DATE,
            get updateAt() {
                return moment(RushGoods.getDataValue('updateAt')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
    }, {
        tableName: 'rush_goods',
        timestamps: false,
    });
    RushGoods.associate = () => {
        // RushGoods.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // RushGoods.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return RushGoods;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVzaF9nb29kcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJ1c2hfZ29vZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFakMsa0JBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUN0QixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBRWhDLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtRQUNoRCxFQUFFLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLElBQUk7U0FDaEI7UUFDRCxXQUFXLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxRQUFRLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxNQUFNLEVBQUU7WUFDUCxJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87U0FDdkI7UUFDRCxRQUFRLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxRQUFRO2dCQUNYLE9BQU8sTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNqRixDQUFDO1lBQ0QsWUFBWSxFQUFFLFNBQVMsQ0FBQyxHQUFHO1NBQzNCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLElBQUksUUFBUTtnQkFDWCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDakYsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsWUFBWTtRQUN2QixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxTQUFTLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUMxQixnR0FBZ0c7UUFDaEcsOEZBQThGO0lBQy9GLENBQUMsQ0FBQztJQUVGLE9BQU8sU0FBUyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyJ9