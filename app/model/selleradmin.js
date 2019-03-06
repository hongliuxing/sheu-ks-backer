"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 模型: 商家管理人
 */
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Selleradmin = app.model.define('selleradmin', {
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
        person_id: {
            type: DataTypes.STRING,
        },
        telephone: {
            type: DataTypes.STRING,
        },
        logo_url: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.INTEGER,
        },
        struts: {
            type: DataTypes.INTEGER,
        },
        created: {
            type: DataTypes.DATE,
            get created() {
                return moment(Selleradmin.getDataValue('created')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'selleradmin',
        timestamps: false,
    });
    Selleradmin.associate = () => {
        // Selleradmin.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Selleradmin.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Selleradmin;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsbGVyYWRtaW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWxsZXJhZG1pbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUU7UUFDbkQsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLElBQUksT0FBTztnQkFDVixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbEYsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsYUFBYTtRQUN4QixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxXQUFXLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUM1QixrR0FBa0c7UUFDbEcsZ0dBQWdHO0lBQ2pHLENBQUMsQ0FBQTtJQUVELE9BQU8sV0FBVyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyJ9