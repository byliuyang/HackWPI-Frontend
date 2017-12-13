class AuthenticationService {
    constructor() {
        this.BASE_URL = `/api/oauth2`;

        this.AUTHENTICATED_KEY = 'authenticated';
        this.TOKEN_KEY = 'token';

        this.authenticated = localStorage.getItem('authenticated') === 'true';
        this.token = null;
    }

    authenticate(email, password) {
        return new Promise((success, fail) => {
            let headers = new Headers();
            headers.append("Content-Type", "application/json");

            fetch(`${this.BASE_URL}/token`, {
                method: 'post',
                headers: headers,
                body: JSON.stringify({
                    email,
                    password
                })
            })
                .then(response => {
                    if (response.status !== 200) {
                        fail();
                        return;
                    }

                    response.text().then(token => {
                        localStorage.setItem(this.TOKEN_KEY, token);
                        localStorage.setItem(this.AUTHENTICATED_KEY, true);
                        this.authenticated = true;
                        success();
                    });
                });
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