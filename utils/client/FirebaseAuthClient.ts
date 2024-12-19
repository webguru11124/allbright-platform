import { signInWithEmailAndPassword as signInWithEmailAndPasswordFn, signOut as SignOutFn } from "firebase/auth";

import { auth } from "@/utils/client/firebase";

export const signOut = () => SignOutFn(auth);

export const signInWithEmailAndPassword = async (email: string, password: string) =>
  await signInWithEmailAndPasswordFn(auth, email, password);

export { onAuthStateChanged } from "firebase/auth";
