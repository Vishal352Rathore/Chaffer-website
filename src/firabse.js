import { initializeApp } from 'firebase/app';
import { getMessaging  ,getToken} from "firebase/messaging";

// Replace this firebaseConfig object with the congurations for the project you created on your firebase console. 
const firebaseConfig = {
  apiKey: "AIzaSyBwjeVvT9oL3MeMQVzF-kOg-BWqzSgi8GM",
  authDomain: "crested-athlete-416110.firebaseapp.com",
  projectId: "crested-athlete-416110",
  storageBucket: "crested-athlete-416110.appspot.com",
  messagingSenderId: "768140966466",
  appId: "1:768140966466:web:9694e4a2bc651640e2cbdb",
  measurementId: "G-K9G2WSTHXH"
};
 initializeApp(firebaseConfig);
// export const requestForToken = async () => {
//     try {
//     const currentToken = await getToken(messaging, { vapidKey: "BIj2tsjalZAcMNhYY2F5SU4509uEWQOCIZGsfk-yKvsi8HNIKRjhwNXp8B8TIrvq5p5mMTXE9PTt7nY-1jwm1hw" });
//     if (currentToken) {
//       console.log('current token for client: ', currentToken);
//     } else {
//       // Show permission request UI
//       console.log('No registration token available. Request permission to generate one.');
//     }
//   } catch (err) {
//     console.log('An error occurred while retrieving token. ', err);
//   }
//   };

  export const messaging = getMessaging();

