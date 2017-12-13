class AppStateService {
    constructor() {
        this.SERVER_URL = 'http://localhost:8000';
        this.BASE_URL = `${this.SERVER_URL}/api`;
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

    getAppState() {
        return this._getState('app');
    }

    getHomepageState() {
        return this._getState('home');
    }
}

export default new AppStateService();
