function environment() {
    let EVN = 'dev';

    switch (EVN) {
        case 'dev':
            return {
                API_BASE_URL: 'http://localhost:8000/api'
            };
        case 'prod':
            return {
                API_BASE_URL:'/api'
            };
    }
    return {
        API_BASE_URL:'/api'
    };
}

export default environment;