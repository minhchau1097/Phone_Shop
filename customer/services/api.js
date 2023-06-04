function Api() {
    this.callApi = function (endpoint, method, data) {

        const url1 = 'https://64709e3a3de51400f724a087.mockapi.io/';
       return axios({
            url: `${url1}/${endpoint}`,
            method: method,
            data: data,
        })

    };
};