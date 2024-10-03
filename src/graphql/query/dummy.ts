import { gql } from "@apollo/client";

export const GET_DUMMY = gql`
  query GET_DUMMY {
    dummy {
      city
      zip_code
      weather {
        temperature
        condition
        wind
      }
    }
  }
`;