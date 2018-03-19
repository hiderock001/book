<template>
    <div class="wrap">
        <div class="inner">
            <div class="detail">
                <div class="title">
                    <h1>{{contact.title}}</h1>
                    <p>{{contact.author}}</p>
                </div>
                <div class="detail-desc">
                     <p v-html='contact.desc'></p>
                </div>
                <div class="detail-share">
                    <p>미리보기 상세</p>
                </div>
                <div class="js-content" ref='detailText'></div>
            </div>
            <div class="btn-wrap">
                <router-link to="/">목록으로</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"


export default {
    created : function(){
        axios.get("../static/n_list.json")
        .then((response) => {
            this.no = this.$route.params.no;
            this.contacts = response.data.list.bl;
        });
    },
    data : function(){
        return {
            no : 0,
            contacts : [],
            detail : ''
        }
    },
    computed : {
        contact : function(){
            var no = this.no;
            var arr =this.contacts.filter(function(item){
                return item.serial_num == no;
            });
            if(arr.length == 1){
                return arr[0];
            }else{
                return {};
            } 
        }
    },
    updated : function(){
        var no = this.no;
        axios.get("../static/"+no+"/"+no+".html")
        .then((response) => {
            this.detail = response.data;
            this.$refs.detailText.innerHTML = this.detail; 
        });
    }
}
</script>

<style scped>
*{margin:0;padding:0;}
.wrap{padding-top:30px;background:#f6f6f6;}
.inner{width:1000px;margin:0 auto;border:1px solid #d9d9d9;background:#fff;box-sizing:border-box;}
.detail{padding:0 29px 40px;}
.title{padding:38px 0 19px 0;}
.title h1{font-size:32px;color:#333;font-weight:500;}
.title p{margin-top:10px;font-size:14px;text-align:left;}
.detail-desc{padding:19px 0;border-top:1px solid #d5d5d5;}
.detail-desc p{font-size:14px;width:710px;line-height:22px;}
.detail-share{margin-top: 10px;padding:8px 25px;background:#ececec;border-radius:3px;}
.detail-share p{float:left;font-size:14px;color:#333;line-height:31px;font-weight:600;}
.detail-share:after{content:"";display:block;clear:both;}
.js-content{margin: 60px 0 42px 0;}
.btn-wrap{padding-bottom:40px;text-align:Center;}
.btn-wrap a{background:#c36d78;box-shadow:0 2px #f2e2e3;border-radius:5px;display:inline-block;width:142px;height:52px;bos-sizing:border-box;
line-height:52px;text-align:center;color:#fff;font-size:13px;margin:0 5px;}
@media screen and (min-width:320px) and (max-width:1024px){
.wrap{padding-top:0;}
.inner{width:auto;}
.detail-desc p{width:auto;}
}
</style>
<style>
.js-content pre{white-space:pre-wrap;font-size:14px;line-height:20px;word-wrap:break-all;}
</style>

