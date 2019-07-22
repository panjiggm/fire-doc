export const createProject = project => {
   return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore()

      firestore.collection('projects').add({
         ...project,
         authorFirstName: 'Tatang',
         authorLastName: 'Suratang',
         authorId: 112233,
         createdAt: new Date()
      }).then(() => {
         dispatch({ type: 'CREATE_PROJECT', payload: project })
      }).catch(err => {
         dispatch({ type: 'CREATE_PROJECT_ERROR', err })
      })
   }
}