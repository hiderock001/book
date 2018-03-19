<template>
    <div class="wrap">
        <div class="inner">
            <h1>북큐브 프리미엄 로맨스</h1>
            <p>무료 미리보기를 먼저 보세요</p>
            <p class="pc-ps">회원가입 후 본인인증하면<br /><span>적립금 2,000원 + 할인쿠폰 즉시 지급</span></p>
            <div>
                <div class="list-wrap">
                    <h2 class="roma-title">로맨스 단권 미리보기</h2>
                    <ul class="bl-list">
                        <li v-for="book in books">
                            <router-link v-bind:to="'/contact/'+book.serial_num"><span class="im_br"><img v-bind:src="'/static/images/'+book.serial_num+'.jpg'" /></span></router-link><div>
                            <h3>{{book.title}}</h3><p>{{book.author}}</p></div>
                        </li>
                    </ul>
                </div>
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
            this.books = response.data.list.bl;
        });
    },
    data : function(){
        return {
            books : []
        }
    }
}
</script>

<style scoped>
*{margin:0;padding:0;}
a{text-decoration:none;}
a:link, a:visited { text-decoration:none;color:#666;}
.wrap{padding-top:30px;background:#f6f6f6;}
.inner{width:1000px;margin:0 auto;border:1px solid #d9d9d9;background:#fff;box-sizing:border-box;}
h1{margin-top:80px;text-align:center;font-size:60px;font-weight:600;color:#333;}
.inner > p{margin-top:5px;text-align:center;font-size:30px;color:#666;}
.inner > p span{color:#f26532;}
.inner > p.pc-ps{padding-top:20px;font-size:15px;text-align:center;font-weight:600;}
.list-wrap{padding-top:30px;}
.list-wrap h2{width:80%;margin:0 auto;background:#f0e4e8;color:#5e293b;font-weight:400;height:45px;line-height:45px;text-align:center;font-size:27px;border-radius:20px;}
li{list-style:none;}
.bl-list{margin-top:50px;margin-bottom:40px;}
.bl-list:after{content:"";display:block;clear:both;}
.bl-list li{float:left;width:33.33%;margin-bottom:20px;}
.bl-list a{display:block;width:96%;margin:0 auto;position:relative;}
.bl-list a img{display:block;width:100%;}
.bl-list li div{padding:10px 16px;border:1px solid #e6e6e6;border-top:none;height:76px;box-sizing:border-box;background:#fff;width:96%;margin:0 auto;}
.romance-title{background:#f7d5e3;color:#bf2364;}
.bl-list li div h3{color:#323232;font-size:14px;margin-bottom:7px;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.bl-list li div p{color:#707070;font-size:11px;}
.im_br:after {display:block;position:absolute;top:0px;right:0px;bottom:0px;left:0px;z-index:10;border:1px solid rgba(0, 0, 0,0.2);content:"";}

@media screen and (min-width:320px) and (max-width:1024px){
.wrap{padding-top:0;}
.inner{width:auto;}
.inner > p{font-size:13px;}
.inner > p.pc-ps{padding-top:5px;font-size:14px;}
h1{margin-top:40px;color:#333;font-size:28px;font-weight:600;text-align:center;}
.list-wrap h2{border-radius:0;font-size:14px;width:100%;}
.bl-list{margin-top:20px;}
.bl-list li{width:50%;margin-bottom:15px;}
.bl-list li div{border:none;height:50px;}
}

</style>


