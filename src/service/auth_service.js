import { googleProvider, githubProvider } from "./firebase";
import { getAuth, signInWithPopup } from "firebase/auth";

class AuthService {
  login(providerName) {
    const auth = getAuth();
    return signInWithPopup(providerName);
  }
}
