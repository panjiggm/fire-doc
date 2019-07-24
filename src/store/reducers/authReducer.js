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
         console.log('Signout Sukse')
         return state
      default:
         return state
   }
}

export default authReducer