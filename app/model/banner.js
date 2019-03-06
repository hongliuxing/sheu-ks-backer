"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require('moment');
exports.default = (app) => {
    const DataTypes = app.Sequelize;
    const Banner = app.model.define('banner', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        school_id: {
            type: DataTypes.INTEGER,
        },
        pic_url: {
            type: DataTypes.STRING,
        },
        struts: {
            type: DataTypes.INTEGER,
        },
        indexes: {
            type: DataTypes.INTEGER,
        },
        createAt: {
            type: DataTypes.DATE,
            get createAt() {
                return moment(Banner.getDataValue('createAt')).format('YYYY-MM-DD HH:mm:ss');
            },
            defaultValue: DataTypes.NOW,
        }
    }, {
        tableName: 'banner',
        timestamps: false,
    });
    Banner.associate = () => {
        // Banner.belongsTo(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
        // Banner.hasMany(app.model.OtherModel, { foreignKey: 'foreignKey_id', targetKey: 'id' } );
    };
    return Banner;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWpDLGtCQUFlLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUVoQyxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7UUFDekMsRUFBRSxFQUFFO1lBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1lBQ3RCLFVBQVUsRUFBRSxJQUFJO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1YsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1NBQ3RCO1FBQ0QsTUFBTSxFQUFFO1lBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsT0FBTyxFQUFFO1lBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQ3ZCO1FBQ0QsUUFBUSxFQUFFO1lBQ1QsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1lBQ3BCLElBQUksUUFBUTtnQkFDWCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDOUUsQ0FBQztZQUNELFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRztTQUMzQjtLQUNELEVBQUU7UUFDRixTQUFTLEVBQUUsUUFBUTtRQUNuQixVQUFVLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsRUFBRTtRQUN2Qiw2RkFBNkY7UUFDN0YsMkZBQTJGO0lBQzVGLENBQUMsQ0FBQTtJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2YsQ0FBQyxDQUFDIn0=