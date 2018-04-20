import Path from 'path';

const LocalStorage = require('node-localstorage').LocalStorage;
 var localStorage = new LocalStorage('./token');

/**
 * @class AuthService
 */
class AuthService {

    /**
     * @method saveTokenToStorage
     * @param {*} token 
     */
    static saveTokenToStorage(token) {
        if(!localStorage) {
            if (token) {
                localStorage.setItem('jwtToken', token);
                return token;
            }
        }
    }

    /**
     * @method GetTokenFromStorage
     */
    static getTokenFromStorage() {
        if(localStorage) {
            return localStorage.getItem('jwtToken');
        }
    }

    /**
     * Remove token from storage
     */
    static removeTokenFromStorage() {
        localStorage.removeItem('jwtToken');
    }
}

export default AuthService;