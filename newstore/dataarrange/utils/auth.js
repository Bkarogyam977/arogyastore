
import * as Lockr from "lockr";
import axios from 'axios';
import platform from "platform";

import {
    AUTH_TOKEN,
    PASSWORD,
    ROLE,
    PRACTICE,
    GROUP,
    ERROR_MSG_TYPE,
    FCM_TOKEN,
    RECAPTCHA_TOKEN
} from "../constants/dataKeys";
import {displayMessage, getAPI, handleErrorResponse, makeURL} from "./common";
import {LOGIN_URL, OTP_LOGIN_URL, USER_DATA,SWITCH_USER_STAFF_LOGIN} from "../constants/api";
import {CURRENT_PRACTICE} from "../constants/formLabels";

var reCaptchaClassRef = null;
console.log(platform)
export const loggedInUser = function () {
    const role = Lockr.get(ROLE);
    // const patient = lockr.get("patient")
    const token = Lockr.get(AUTH_TOKEN);
    const switchedUser = Lockr.get('switchedUser')
    if (role && token) {
        return {...role,switchedUser};
    }
    return null;
};

export const loggedInUserP = function () {
    // const role = lockr.get(ROLE);
    const patient = Lockr.get("patient")
    // const token = lockr.get(AUTH_TOKEN);
    // const switchedUser = lockr.get('switchedUser')
    if (patient) {
        return {...patient};
    }
    return null;
};

export const setCurrentPractice = function (practice) {
    Lockr.set(CURRENT_PRACTICE, practice);
}

export const loggedInUserPractices = function () {
    const role = Lockr.get(ROLE);
    const token = Lockr.get(AUTH_TOKEN);
    const practice = Lockr.get(PRACTICE);
    if (role && token && practice) {
        return practice;
    }
    return [];
};
export const loggedInactivePractice = function () {
    const currentPractice = Lockr.get(CURRENT_PRACTICE);
    if (currentPractice && currentPractice != {}) {
        return currentPractice;
    }
    const practice = Lockr.get(PRACTICE);
    if (practice && practice.length) {
        setCurrentPractice(practice[0].practice.id);
        return loggedInactivePractice();
    }

    return null
}


export const getAllPermissions = function () {
    const permissions = [];
    const lockrPermissions = Lockr.get('PERMISSIONS');
    if (lockrPermissions && lockrPermissions.ADMIN && lockrPermissions.ADMIN.length) {
        return lockrPermissions.ADMIN;
    }

    return permissions
}

export const logInUser = function (dataToSend, successFn, errorFn) {
    const reqData = {
        'mobile': dataToSend.email,
        [PASSWORD]: dataToSend.password,
        [FCM_TOKEN]: getFCMToken() || undefined,
    };
    axios({
        method: 'post',
        url: makeURL(LOGIN_URL),
        data: reqData,
        headers: {

        }
    }).then(function (response) {
        const {data} = response;
        Lockr.set(ROLE, data.user);
        Lockr.set(AUTH_TOKEN, data.token);
        Lockr.set(PRACTICE, data.practice_list);
        // lockr.set('PERMISSIONS', data.permissions_list);
        successFn()
    }).catch(function (error) {
        console.log(error);
        handleErrorResponse(error);
        errorFn();
    })
};
export const logInUserWithOtp = function (dataToSend, successFn, errorFn , setCurrentPatient, setActive_practiceId, setToken, setRole) {


    const reqData = {
        'phone_no': dataToSend.phone_no,
        'otp': dataToSend.otp,
        [FCM_TOKEN]: getFCMToken(),
    };
    axios({
        method: 'post',
        url: makeURL("staff_login/verify_otp_for_web/"),
        data: reqData,
        headers: {

        }
    }).then(function (response) {
        const {data} = response;
        setCurrentPatient(data.patient);
        setActive_practiceId(data.practice_list);
        setToken( data.token);
        setRole(data.user);
        // Lockr.set(ROLE, data.user);
        // Lockr.set("patient" , data.patient)
        Lockr.set(AUTH_TOKEN, data.token);
        // Lockr.set(PRACTICE, data.practice_list);
        successFn()
        
    }).catch(function (error) {
        handleErrorResponse(error);
        errorFn();
    })
};

export const logInSwitchedUserWithPhoneNum = function (phone_no, successFn, errorFn) {
    const reqData = {
        'phone_no': phone_no,
        [FCM_TOKEN]: getFCMToken(),
    };
    axios({
        method: 'post',
        url: makeURL(SWITCH_USER_STAFF_LOGIN),
        data: reqData,
        headers: {
            Authorization: `Token ${getAuthToken()}`
        }
    }).then(function (response) {
        const {data} = response;
        Lockr.set(ROLE, data.user);
        Lockr.set('switchedUser',true);
        Lockr.set(AUTH_TOKEN, data.token);
        Lockr.set(PRACTICE, data.practice_list);
        successFn()
    }).catch(function (error) {
        handleErrorResponse(error);
        errorFn();
    })
};

export const loadUserDetails = function (practice, callBackFn, callBackErrorFn) {
    const successFn = function (data) {
        Lockr.set(ROLE, data.user);
        Lockr.set(PRACTICE, data.practice_list);
        callBackFn(data);
    }
    const errorFn = function () {
        displayMessage(ERROR_MSG_TYPE, "Permission Loading Failed. Kindly refresh or check your internet connection...");
        callBackErrorFn();
    }
    getAPI(USER_DATA, successFn, errorFn, {practice});
}

export const logOutUser = function (successFn , setCurrentPatient,setActive_practiceId,setToken, setRole) {
    setCurrentPatient(null);
    setActive_practiceId(null);
    setToken( null);
    setRole(null);
    
    // Lockr.rm(ROLE);
    Lockr.rm(AUTH_TOKEN);
    // Lockr.rm(PRACTICE);
    // Lockr.rm(GROUP);
    // Lockr.rm('switchedUser');
    successFn();
};
export const getAuthToken = function () {
    const token = Lockr.get(AUTH_TOKEN);
    return token;
};

export const sendLoginOTP = function (url, phone, successFn, errorFn) {
    const reqData = {
        "phone_no": phone
    };
    axios({
        method: 'post',
        url:url,
        data: reqData,
    }).then(function (response) {
        successFn(response)
    }).catch(function (error) {
        // eslint-disable-next-line
        console.log(error);
        handleErrorResponse(error);
        errorFn();
    })
}

export const getFCMToken = function () {
    const token = Lockr.get(FCM_TOKEN);
    if (token)
        return token;
    return null;
};
export const setFCMToken = function (token) {
    Lockr.set(FCM_TOKEN, token);
    return token;

}

export const getReCapatchaToken = function () {
    const token = Lockr.get(RECAPTCHA_TOKEN);
    if (token)
        return token;
    return null;
};
export const setReCapatchaToken = function (token) {
    Lockr.set(RECAPTCHA_TOKEN, token);
    return token;

}
