"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const RushKnight = app.model.define('rush_knight', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        activity_id: {
            type: DataTypes.STRING,
        },
        knight_id: {
            type: DataTypes.STRING,
        },
        predict_order_count: {
            type: DataTypes.INTEGER,
        },
        done_order_count: {
            type: DataTypes.INTEGER,
        },
        goods_stat: {
            type: DataTypes.STRING,
        },
        createAt: {
            type: DataTypes.DATE,
            get createAt() {
                return moment(RushKnight.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'rush_knight',
        timestamps: false,
    });
    RushKnight.associate = () => {
        RushKnight.belongsTo(app.model.Knight, { foreignKey: 'knight_id', targetKey: 'id' });
        // RushKnight.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } ); // Knight
        // RushKnight.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return RushKnight;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVzaF9rbmlnaHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJydXNoX2tuaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUVqQyxrQkFBZSxDQUFDLEdBQUcsRUFBRSxFQUFFO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFFaEMsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO1FBQ2xELEVBQUUsRUFBRTtZQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtZQUN0QixVQUFVLEVBQUUsSUFBSTtTQUNoQjtRQUNELFdBQVcsRUFBRTtZQUNaLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFNBQVMsRUFBRTtZQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELG1CQUFtQixFQUFFO1lBQ3BCLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELGdCQUFnQixFQUFFO1lBQ2pCLElBQUksRUFBRSxTQUFTLENBQUMsT0FBTztTQUN2QjtRQUNELFVBQVUsRUFBRTtZQUNYLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtTQUN0QjtRQUNELFFBQVEsRUFBRTtZQUNULElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixJQUFJLFFBQVE7Z0JBQ1gsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ2xGLENBQUM7WUFDRCxZQUFZLEVBQUUsU0FBUyxDQUFDLEdBQUc7U0FDM0I7S0FDRCxFQUFFO1FBQ0YsU0FBUyxFQUFFLGFBQWE7UUFDeEIsVUFBVSxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFDO0lBRUgsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLEVBQUU7UUFDM0IsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFFLENBQUM7UUFDdEYsMkdBQTJHO1FBQzNHLCtGQUErRjtJQUNoRyxDQUFDLENBQUE7SUFFRCxPQUFPLFVBQVUsQ0FBQztBQUNuQixDQUFDLENBQUMifQ==