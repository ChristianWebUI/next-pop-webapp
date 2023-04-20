const { gql } = require('@apollo/client')

export const GET_LOCATIONS = gql`
  query GetLocations($locationCode: String) {
    getLocations(locationCode: $locationCode) {
      locationName
      locationCode
      departmentOrStateName
      countryCode
    }
  }
`
