class AppStateService {
    constructor() {
        this.BASE_URL = `/api`;
        this.TOKEN_KEY = 'token';
    }

    _getState(path) {
        return new Promise((success, fail) => {
            fetch(`${this.BASE_URL}/${path}`)
                .then(response => {
                    if (response.status !== 200) {
                        fail();
                        return;
                    }

                    response.json().then(function (data) {
                        success(data);
                    });
                });
        });
    }

    _setState(path, state) {
        return new Promise((success, fail) => {
            let headers = new Headers();
            let token = localStorage.getItem(this.TOKEN_KEY);
            headers.append('Authorization', `Bearer ${token}`);
            headers.append("Content-Type", "application/json");

            fetch(`${this.BASE_URL}/${path}`, {
                method: 'put',
                headers: headers,
                body: JSON.stringify(state)
            })
                .then(response => {
                    if (response.status >= 400) {
                        fail();
                        return;
                    }

                    success();
                });
        });
    }

    setCommonState(state) {
        return this._setState('common', state);
    }

    getCommonState() {
        return this._getState('common');
    }

    getHomepageState() {
        return this._getState('home');
    }
}

export default new AppStateService();
