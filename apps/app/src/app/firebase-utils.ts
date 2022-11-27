import { FirebaseError } from '@angular/fire/app';
import { AuthError } from '@angular/fire/auth';

export function isAuthError(e: unknown): e is AuthError {
  return e instanceof FirebaseError && !!e.customData && 'appName' in e.customData;
}
