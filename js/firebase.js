const firebaseConfig = {
    apiKey: "AIzaSyCGBoLiRlVZw7gWoaYo2gs8Ani_BqalNEI",
    authDomain: "al-fleet-tool-re-af7bc.firebaseapp.com",
    projectId: "al-fleet-tool-re-af7bc",
    storageBucket: "al-fleet-tool-re-af7bc.appspot.com",
    messagingSenderId: "957257966167",
    appId: "1:957257966167:web:c2d44b21ece38efb9f7912",
    measurementId: "G-YB2NNJQYFG"
};
// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);