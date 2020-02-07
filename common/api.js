import httpUtils from '@/utils/http-utils.js'
import httpConfig from '@/common/http-config.js'


export const gupiao= () => {
    return new Promise((resolve, reject) => {
        let request = {};
        // request.userCode = userCode;
        // request.password = password;
        httpUtils.get(request, httpConfig.interfaces.gupiao)
            .then((response) => {
                resolve(response);
            }).catch(()=>console.log('gg'))
    })
}
