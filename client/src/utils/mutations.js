import { gql } from '@apollo/client';

export const ADD_EMPLOYEE = gql`
    mutation addEmployee( $name: String!, $password:String!) {
        addEmployee(name: $name, password: $password) {
          name
          password
        }
    }  
`;

export const REMOVE_EMPLOYEE = gql`
    mutation removeEmployee($name: String!) {
        removeEmployee(name: $name) {
          name
        }
    }
`;

export const LOGIN_USER = gql`
  mutation login($name: String!, $password: String!) {
    login(name: $name, password: $password) {
      token
      employee {
        name
      }
    }
  }
`;

export const ADD_REACTION_START = gql`
  mutation addReactionStart($reaction: Int!) {
    addReactionStart(startTimeValue: $reaction) {
      startTimeValue
    }
  }`

export const ADD_REACTION_END = gql`
  mutation addReactionEnd($reaction: Int!) {
    addReactionEnd(endTimeValue: $reaction) {
      endTimeValue
    }
  }`


