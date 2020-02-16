<template>
    <div class="page">
        <div class="body">
            <div class="list">
                <div class="title">
                   账号：
                </div>
                <div><input v-model="account"/></div>
            </div>
            <div class="list">
                <div class="title">
                    密码：
                </div>
                <div><input password="true" v-model="password"/></div>
            </div>
            <div class="submit">
                <button @tap="submit">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '@/common/api.js'
    export default {
        data(){
            return{
                account: '',
                password: '',
            }
        },
        methods:{
            submit(){
                login(this.account,this.password)
            }
        }
    }
</script>

<style scoped lang="scss">
    input{
        border: #7f7f7f solid 1px;
    }
    .page{
        display: flex;
        justify-content: center;
        align-items: center;
        .body{
            display: flex;
            flex-direction: column;
            width: 500px;
            height:500px;
            /*background: red;*/
            border: black solid 3px;
            justify-content: center;
            align-items: center;
            .list{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                .title{
                    font-size: large;
                }
            }
            .submit{
                margin-top: 20px;
            }
        }
    }

</style>
