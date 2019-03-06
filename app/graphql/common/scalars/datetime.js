const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const moment = require('moment');

module.exports = new GraphQLScalarType({
  name: 'Datetime',
  description: 'Datetime custom scalar type',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return moment(value.getTime()).format('YYYY-MM-DD HH:mm:ss');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  },
});