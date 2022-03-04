import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  // 로그인 기능
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider).then((result) => {
      console.log(result);
    });
  }

  // 로그인의 타입을 정하는 기능
  getProvider(providerName) {
    switch (providerName) {
      case "GOOGLE":
        return this.googleProvider;

      case "GITHUB":
        return this.githubProvider;

      default:
        alert(`알수없는${providerName}입니다.`);
    }
  }
}

export default AuthService;
