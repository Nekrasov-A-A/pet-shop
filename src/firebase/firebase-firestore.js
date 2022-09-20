import { collection, getDocs } from "firebase/firestore";
import db from "./firebase.config";

let singleton;

class FirebaseFirestore {
  constructor() {
    if (!singleton) singleton = this;
    return singleton;
  }
  async getStructureMenu() {
    const response = await getDocs(collection(db, "structure-menu"));
    return this.convertToArray(response);
  }
  convertToArray(payload) {
    let result = [];
    payload.forEach((doc) => {
      result.push(doc.data());
    });
    return [...result];
  }
  async getCategory() {}
}

export default new FirebaseFirestore();
