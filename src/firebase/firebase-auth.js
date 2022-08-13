import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

let singleton;

class FirebaseAuth {
  constructor() {
    if (!singleton) singleton = this;
    return singleton;
  }

  #auth = getAuth();

  async loginUser(email, password) {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      throw new Error("Такого пользователя нет");
    }
  }

  async createUser(email, password) {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
    } catch (error) {
      throw new Error("Такой пользователь уже создан");
    }
  }

  async signOutUser() {
    try {
      await signOut(this.auth);
    } catch (error) {
      throw new Error("Что-то пошло не так");
    }
  }
}
export default new FirebaseAuth();
