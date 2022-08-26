import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updatePassword,
} from "firebase/auth";

let singleton;

class FirebaseAuth {
  constructor() {
    if (!singleton) singleton = this;
    return singleton;
  }

  async loginUser(email, password) {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw new Error("Такого пользователя нет");
    }
  }

  async createUser(email, password, name = "userName") {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      await this.setUserName(name);
    } catch (error) {
      throw new Error("Такой пользователь уже создан");
    }
  }

  async setUserName(name) {
    try {
      const auth = getAuth();
      await updateProfile(auth.currentUser, { displayName: name });
    } catch (error) {
      throw new Error("Что-то пошло не так");
    }
  }

  async changeUserPassword(newPassword) {
    const auth = getAuth();
    await updatePassword(auth.currentUser, newPassword);
  }

  async signOutUser() {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      throw new Error("Что-то пошло не так");
    }
  }
}
export default new FirebaseAuth();
