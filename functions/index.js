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