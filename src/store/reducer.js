   import defaultState from "./state"
   const reducer =(state = defaultState,action ) => {
      let newState = JSON.parse(JSON.stringify(state))
      switch (action.type) {
         case 'increment':
            newState.count += 1
            return newState
         case 'LOGIN_SUCCESS': {
            console.log(action)
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            newState.userTreeModule = action.payload.userTreeModule;
            console.log('newState')
            console.log(newState)
            return newState
         }
         default:
            console.log(1)

      }
    return state
   } 
   export default reducer