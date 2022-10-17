import { gql } from '@apollo/client';

export const QUERY_EMPLOYEE = gql`
    query employee {
        employee {
            name
        }
    }
`;

export const QUERY_EMPLOYEES = gql`
    query employees {
        employees {
            name
        }
    }
`;


