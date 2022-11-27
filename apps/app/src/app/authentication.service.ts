import { Injectable } from '@angular/core';
import {
  Auth,
  AuthCredential,
  EmailAuthProvider,
  FacebookAuthProvider,
  fetchSignInMethodsForEmail,
  GoogleAuthProvider,
  linkWithCredential,
  signInWithCredential,
  signOut,
  TwitterAuthProvider,
  updateProfile,
} from '@angular/fire/auth';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // This class handles both native auth and web auth.
  // The capacitor plugin only handles native auth (when running natively),
  // so the web layer needs to be kept in-sync after a successful login.
  constructor(private auth: Auth) {}

  async createUserWithEmailAndPassword(
    email: string,
    password: string,
    displayName: string
  ) {
    await FirebaseAuthentication.createUserWithEmailAndPassword({
      email,
      password,
    });
    const credential = EmailAuthProvider.credential(email, password);
    const user = await signInWithCredential(this.auth, credential);

    await updateProfile(user.user, { displayName });
  }

  async signInWithEmailAndPassword(email: string, password: string) {
    await FirebaseAuthentication.signInWithEmailAndPassword({
      email,
      password,
    });
    const credential = EmailAuthProvider.credential(email, password);
    await signInWithCredential(this.auth, credential);
  }

  async signInWithGoogle() {
    const result = await FirebaseAuthentication.signInWithGoogle();
    const credential = GoogleAuthProvider.credential(
      result.credential?.idToken
    );
    await signInWithCredential(this.auth, credential);
  }

  async signInWithFacebook() {
    const result = await FirebaseAuthentication.signInWithFacebook();
    const credential = FacebookAuthProvider.credential(
      result.credential?.accessToken as string
    );
    await signInWithCredential(this.auth, credential);
  }

  async signInWithTwitter() {
    const result = await FirebaseAuthentication.signInWithTwitter();
    const credential = TwitterAuthProvider.credential(
      result.credential?.accessToken as string,
      result.credential?.secret as string
    );
    await signInWithCredential(this.auth, credential);
  }

  async signOut() {
    await signOut(this.auth);
    await FirebaseAuthentication.signOut();
  }

  async linkWithCredential(credential: AuthCredential) {
    if (!this.auth.currentUser) return;
    await linkWithCredential(this.auth.currentUser, credential);
  }

  async fetchSignInMethodsForEmail(email: string) {
    return await fetchSignInMethodsForEmail(this.auth, email);
  }

  async sendEmailVerification() {
    await FirebaseAuthentication.sendEmailVerification();
  }

  async getCurrentUser() {
    const { user } = await FirebaseAuthentication.getCurrentUser();
    return user;
  }
}
