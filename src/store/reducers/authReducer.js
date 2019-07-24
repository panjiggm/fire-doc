const initState = {
   authError: null
}

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case 'LOGIN_ERROR':
         console.log('Login Error')
         return {
            ...state,
            authError: 'Login Failed!'
         }
      case 'LOGIN_SEUCCESS':
         console.log('Login Sukses')
         return {
            ...state,
            authError: null
         }
      case 'SIGNOUT_SUCCESS':
         console.log('Signout Sukses')
         return state
      case 'SIGNUP_SUCCESS':
         console.log('Signup Sukses')
         return {
            ...state,
            authError: null
         }
      case 'SIGNUP_ERROR':
         console.log('Signup Error')
         return {
            ...state,
            authError: action.err.message
         }
      default:
         return state
   }
}

export default authReducer