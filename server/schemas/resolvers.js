const { AuthenticationError } = require('apollo-server-express');
const { Employee, StartReaction, EndReaction } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      employees: async () => {
        return Employee.find();
      },
  
      employee: async (parent, { name }) => {
        return Employee.find({ name: name });
      },

      reactions: async (parent, {addReactionStart, addReactionEnd}) => {
        return Reaction.find()
      }
    },
  
    Mutation: {
      addEmployee: async (parent, { name, password }) => {
        const employee = await Employee.create({ name, password });
        // const token = signToken(employee);
        return { employee };
      },
      login: async (parent, { name, password }) => {
        console.log(name, password)
        const employee = await Employee.findOne({ name: name });
  
        if (!employee) {
          throw new AuthenticationError('No employee with this name found!');
        }
  
        const correctPw = await employee.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(employee);
        return { token, employee };
      },

      addReactionStart: async (parent, { startTimeValue }) => {
        const startReaction = await StartReaction.create({startTimeValue});
        return {startReaction}
      },

      addReactionEnd: async (parent, { endTimeValue }) => {
        const endReaction = await EndReaction.create({endTimeValue});
        return {endReaction}
      },
      
  
      removeEmployee: async (parent, { name }) => {
        return Employee.findOneAndDelete({ name: name });
      }
    },
  };
  
  module.exports = resolvers;
  
