import {allConstants} from '../constants';

const initialState = [
  {
    mobilePerson: '',
    contactInfo: '',
    mobileAddress: '',
    loadSetting: '',
    editMobile: '',
    editEmail: '',
    loadBasic: '',
    editPassword: '',
    addTravelCost: '',
    loadStudentGroup: '',
    saveAttendance: '',
    loadMonthAttendance: '',
    forgotPass: '',
  },
];

export function api(state = initialState, action) {
  switch (action.type) {
    case allConstants.LOGIN_REQUEST:
      return {
        logIn: true,
        user: action.user,
      };
    case allConstants.LOGIN_SUCCESS:
      return {
        logIn: true,
        user: action.user,
      };
    case allConstants.LOGIN_FAILURE:
      return {
        logIn: false,
        error: action.error,
      };
    case allConstants.LOAD_Mobile_PERSON:
      return {
        ...state,
        mobilePerson: action.data,
      };
    case allConstants.LOAD_CONTACT_INFO:
      return {
        ...state,
        contactInfo: action.data,
      };
    case allConstants.LOAD_MOBILE_ADDRESS:
      return {
        ...state,
        mobileAddress: action.data,
      };
    case allConstants.LOAD_APP_SETTING:
      return {
        ...state,
        loadSetting: action.data,
      };
    case allConstants.EDIT_EMAIL:
      return {
        ...state,
        editEmail: action.data,
      };
    case allConstants.EDIT_MOBILE:
      return {
        ...state,
        editMobile: action.data,
      };
    case allConstants.LOAD_BASIC_LIST:
      return {
        ...state,
        loadBasic: action.data,
      };
    case allConstants.EDIT_PASSWORD:
      return {
        ...state,
        editPassword: action.data,
      };
    case allConstants.ADD_TRAVEL_COST:
      return {
        ...state,
        addTravelCost: action.data,
      };
    case allConstants.LOAD_STUDENT_GROUP:
      return {
        ...state,
        loadStudentGroup: action.data,
      };
    case allConstants.SAVE_ATTENDANCE:
      return {
        ...state,
        saveAttendance: action.data,
      };
    case allConstants.LOAD_MONTH_ATTENDANCE:
      return {
        ...state,
        loadMonthAttendance: action.data,
      };
    case allConstants.FORGOT_PASSWORD:
      return {
        ...state,
        forgotPass: action.data,
      };
    default:
      return state;
  }
}
