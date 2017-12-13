class AuthenticationService {
    constructor() {
        this.AUTHENTICATED_KEY = 'authenticated';

        this.authenticated = localStorage.getItem('authenticated') === 'true';
        this.token = null;
    }

    authenticate(email, password) {
        return new Promise((success, fail) => {
            if (email === 'hack@wpi.edu' && password === 'password') {
                localStorage.setItem(this.AUTHENTICATED_KEY, true);
                this.authenticated = true;
                success();
            } else fail();
        });

    }

    signOut() {
        localStorage.setItem(this.AUTHENTICATED_KEY, false);
        this.authenticated = false;
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new AuthenticationService();