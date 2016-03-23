/**
 * ApiUtils
 *
 * From http://www.yoniweisbrod.com/network-requests-in-react-native-using-fetch/
 */

'use strict';

class ApiUtils {
    checkStatus(response) {
        // https://github.com/github/fetch
        if (response.status >= 200 && response.status < 300) {
            console.log('OK ' + response.status);
            return response;
        } else {
            console.log('Error ' + response.statusText);
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
};

export { ApiUtils as default };

