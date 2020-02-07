const isTest=true//true测试环境 false生产环境
const dateTimeformat='yyyy/MM/dd'
const dateformat='yyyy/MM/dd'
const dateSelectFormat='yyyy-MM-dd'
const dateApiFormat='yyyy/MM/dd'
const dateApiFormatTime='yyyy/MM/dd HH:mm:ss'
const version = '1.2.0'
const testUrl='http://localhost:8088'
const releaseUrl='https://ss-pm.shijicloud.com/vip-api'
//请求地址
const requestUrl=isTest?testUrl:releaseUrl
//接口名
const interfaces={
	gupiao:'/gupiao/findAll'
}
export default{
	requestUrl,
	dateTimeformat,
	dateformat,
	dateSelectFormat,
	dateApiFormat,
	interfaces
}
