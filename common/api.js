import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'

// 测试代码，无实际意义
export const gupiao= () => {
    return new Promise((resolve, reject) => {
        let request = {};
        // request.userCode = userCode;
        // request.password = password;
        httpUtils.get(request, httpConfig.interfaces.gupiao)
            .then((response) => {
                resolve(response);
            }).catch(()=>console.log('gupiaogg'))
    })
}

// 登录
export const login= (account,password) => {
    return new Promise((resolve, reject) => {
        let request = {};
        request.account = account;
        request.password = password;
        httpUtils.post(request, httpConfig.interfaces.login)
            .then((response) => {
                resolve(response);
            }).catch(()=>console.log('logingg'))
    })
}
