"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Dormgoodsrelation = app.model.define('dormgoodsrelation', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        dorm_id: {
            type: DataTypes.STRING,
        },
        goods_id: {
            type: DataTypes.STRING,
        },
        total_count: {
            type: DataTypes.INTEGER,
        },
        seller_count: {
            type: DataTypes.INTEGER,
        },
        create_time: {
            type: DataTypes.DATE,
            get create_time() {
                return moment(Dormgoodsrelation.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        },
        modify_time: {
            type: DataTypes.DATE,
            get modify_time() {
                return moment(Dormgoodsrelation.getDataValue('modify_time')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'dormgoodsrelation',
        timestamps: false,
    });
    Dormgoodsrelation.associate = () => {
        // Dormgoodsrelation.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Dormgoodsrelation.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Dormgoodsrelation;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9ybWdvb2RzcmVsYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkb3JtZ29vZHNyZWxhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtRQUMvRCxFQUFFLEVBQUU7WUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07WUFDdEIsVUFBVSxFQUFFLElBQUk7U0FDaEI7UUFDRCxPQUFPLEVBQUU7WUFDUixJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxRQUFRLEVBQUU7WUFDVCxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU07U0FDdEI7UUFDRCxXQUFXLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87U0FDdkI7UUFDRCxZQUFZLEVBQUU7WUFDYixJQUFJLEVBQUUsU0FBUyxDQUFDLE9BQU87U0FDdkI7UUFDRCxXQUFXLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxXQUFXO2dCQUNkLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzVGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7UUFDRCxXQUFXLEVBQUU7WUFDWixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsSUFBSSxXQUFXO2dCQUNkLE9BQU8sTUFBTSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQzVGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLG1CQUFtQjtRQUM5QixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsR0FBRyxFQUFFO1FBQ2xDLHdHQUF3RztRQUN4RyxzR0FBc0c7SUFDdkcsQ0FBQyxDQUFBO0lBRUQsT0FBTyxpQkFBaUIsQ0FBQztBQUMxQixDQUFDLENBQUMifQ==