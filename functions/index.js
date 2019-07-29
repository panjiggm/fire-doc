const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from FireDoc!");
});

const createNotifications = notofications => {
   return admin.firestore().collection('notifications')
      .add(notofications)
      .then(doc => console.log("notif added", doc))
}

exports.projectCreate = functions.firestore
   .document('/projects/{projectId}')
   .onCreate(doc => {
      const project = doc.data()
      const notification = {
         user: `${project.authorFirstName} ${project.authorLastName}`,
         content: 'Ading new project',
         time: admin.firestore.FieldValue.serverTimestamp()
      }

   return createNotifications(notification)
})

exports.userJoined = functions.auth.user()
   .onCreate(user => {
      return admin.firestore().collection('user')
         .doc(user.uid).get().then(doc => {
            const newUser = doc.data()
            const notoficatios = {
               content: 'Joines the party',
               user: `${newUser.firstName} ${newUser.lastName}`,
               time: admin.firestore.FieldValue.serverTimestamp()
            }

            return createNotifications(notoficatios)
         })
})