import * as types from './types';

const initialState = {
  userID: null,
  name: null,
  token: null,
  role_id: null,
  mobile_no: null,
  email: null,
  profile_image: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.REGISTER_USER: {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.data.data &&
        action.payload.status === 200
      ) {
        let user = action.payload.data;
        return {
          ...state,
          token: user.access_token,
          userID: user.data.id,
          name: user.data.name,
          role_id: user.data.role_id,
          mobile_no: user.data.mobile_no,
          email: user.data.email,
          profile_image: user.data.profile_image,
        };
      } else {
        return { ...state }
      }
    }
    case types.GET_USER: {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.status === 200
      ) {
        let user = action.payload.data;
        return {
          ...state,
          fname: user.fname,
          id: user.id,
          lname: user.lname,
          email: user.email,
          gender: user.gender,
          roles: user.roles,
          image: user.image,
          dob: user.dob,
          address: {
            address: user.address.address,
            city: user.address.city,
            state: user.address.state,
            country: user.address.country,
            zipcode: user.address.zipcode
          },
          hcp: user.hcp,
          bio: user.bio,
          created: user.created,
          modified: user.modified,
          status: user.status,
          token: (user.token) ? user.token : state.token,
          countryId: user.countryId || ''
        };
      } else {
        return { ...state }
      }
    }
    case types.USER_DETAILS: {
      if (action && action.payload) {
        let user = action.payload;
        return {
          ...state,
          fname: user.fname,
          lname: user.lname,
          id: user.id,
          email: user.email,
          gender: user.gender,
          roles: user.roles,
          image: user.image,
          dob: user.dob,
          address: {
            address: user.address && user.address.address && '',
            city: user.address && user.address.city && '',
            state: user.address && user.address.state && '',
            country: user.address && user.address.country && '',
            zipcode: user.address && user.address.zipcode && ''
          } && '',
          hcp: user.hcp,
          bio: user.bio,
          created: user.created,
          modified: user.modified,
          status: user.status,
          token: (user.token) ? user.token : state.token,
          countryId: user.countryId || ''
        };
      } else {
        return { ...state }
      }
    }
    case types.LOGIN: {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.status === 200
      ) {
        let user = action.payload.data;
        return {
          ...state,
          token: user.token,
        };
      } else {
        return { ...state }
      }
    }
    case types.SOCIAL_LOGIN: {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.status === 200
      ) {
        let user = action.payload.data;
        return {
          ...state,
          token: user.token
        };
      } else {
        return { ...state }
      }
    }
    case types.UPDATE_TOKEN: {
      return {
        ...state,
        token: state.socialLoginToken,
      }
    }
    case types.UPDATE_USER: {
      if (action.payload && action.payload.status === 204) {
        let user = action.payload.updatedUser;
        return {
          ...state,
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          gender: user.gender,
          dob: user.dob,
          hcp: user.hcp,
          bio: user.bio,
          image: user.image,
          countryId: user.countryId
        }
      } else {
        return { ...state }
      }
    }
    case types.FORGET_PASS: {
      return { ...state }
    }
    case types.EMAIL_VERIFY: {
      return { ...state }
    }
    case types.LOGOUT: {
      return { ...initialState }
    }
    case types.LANGUAGE_CODE: {
      if (action.payload && action.payload.languageCode) {
        let data = action.payload.languageCode;
        return {
          ...state,
          languageCode: data
        }
      } else {
        return { ...state }
      }
    }
    case types.COUNTRIES: {
      if (action.payload &&
        action.payload.data &&
        action.payload.status === 200) {
        let countries = action.payload.data;
        let countriesList = [];
        countries.map((country) => {
          countriesList.push({ Name: country.name, code: country.id })
        })
        return {
          ...state,
          countries: countriesList,

        }
      } else {
        return { ...state }
      }
    }
    case types.RESUME_COUNTRIES: {
      if (action.payload) {
        let countries = action.payload;
        let countriesList = [];
        countries.map((country) => {
          countriesList.push({ Name: country.name, code: country.id })
        })
        return {
          ...state,
          countries: countriesList,
        }
      } else {
        return { ...state }
      }
    }
    case types.DEEPLINK: {
      if (
        action.payload &&
        action.payload.data &&
        action.payload.status === 201
      ) {
        return { ...state };
      } else {
        return { ...state }
      }
    }
    default: {
      return { ...state };
    }
  }
};

export default reducer;
