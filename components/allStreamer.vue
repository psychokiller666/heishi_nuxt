<template>
  <header class="hs-header">
    <div class="open_app">
      <img class="open_app_logo" src="//img8.ontheroadstore.com/upload/180130/4411f6fcf120b12854451162418b179d.png" />
        <div class="open_app_name">
          <img class="name" src="//img8.ontheroadstore.com/upload/180110/dff8eddc7f52400df96c56c133aa693f.png" />
          <div class="title">下载app 我们玩点不一样的</div>
        </div>
        <img class="open_app_close" src="//img8.ontheroadstore.com/upload/180110/98ffb1f46bc2fbeeaa2acb78ce3c7f42.png" />
        <a href="http://url.cn/5EVfeob" class="open_app_btn external">打开应用</a>
      </div>
      <div class="open_hs">
        <img class="open_hs_logo" src="//img8.ontheroadstore.com/upload/180130/6aba8194eb804edcf6ae805522965e30.png" />
        <div class="open_hs_name">
          <img class="name" src="//img8.ontheroadstore.com/upload/180130/e29dac39fea6bfe0aecaee74c058dc27.png" />
          <div class="title">更多特权服务</div>
        </div>
        <img class="open_hs_close" src="//img8.ontheroadstore.com/upload/180130/f07bbf784742ff71c8611b1167eb9713.png" />
        <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&amp;__biz=MzA3OTUyNDg2OQ==&amp;scene=124#wechat_redirect" class="open_hs_btn external">关注我们</a>
      </div>
      <slot name="content" class="nav" />
  </header>
</template>

<style lang="less">
@import '../assets/less/common.less';

header{
    &.hs-header{
        background-color: #fff;
        width: 10rem;
        overflow: hidden;
        z-index: 100;
        position: fixed;
        left: 50%;
        margin-left: -5rem;
        ul{
            height: 1.17rem;
            background-color: #FFF;
            color: #000;
            padding-left: 0.64rem;
            padding-right: 0.54rem;
            position: relative;
            border-bottom: .01rem solid #E8E8E8;
            .hs-cf;
            li{
                float: left;
                position: relative;
                margin-right: 0.64rem;
                a{
                    .font-dpr(14px);
                    display: block;
                    color: #000;
                    height: 1.17rem;
                    line-height: 1.17rem;
                    font-weight: 500;
                    &.active{
                        color: #E03B29;
                    }
                    &.active:after{
                        content: "";
                        display: block;
                        height: 0.08rem;
                        width: 0.32rem;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        -webkit-transform: translateX(-50%);
                        bottom: 0.1rem;
                        background-color: #E03B29;
                        border-radius: .27rem;
                    }
                }
            }
        .search_btn{
            position: absolute;
            right: 0.54rem;
            margin-right: 0;
            .hs-icon:before{
                .font-dpr(20px);
                content: "\e63d";
                color: #333333;
            }
        }
        }
    }
    .open_app {
      background: #676767;
      display: none;
      padding: 0.16rem 0.334rem 0.16rem 0.3rem;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .open_app_logo {
        width: 0.84rem;
        height: 0.84rem;
        margin-right: 0.334rem;
        float: left;
      }
      .open_app_name {
        float:left;
        img {
          display: block;
        }
        .name {
          width: 1.65rem;
        }
        .title {
          color: #FFFFFF;
          .font-dpr(12px);
          margin-top: 0.05rem;
          line-height: 1em;
          padding: 0;
        }
      }
      .open_app_btn {
        .font-dpr(12px);
        font-weight: 700;
        border: 0.04rem solid #fff;
        width: 1.92rem;
        height: 0.64rem;
        box-sizing: border-box;
        float: right;
        margin-top: 0.08rem;
        text-align: center;
        line-height: 0.56rem;
        color: #fff;
        margin-right: 0.3rem;
      }
      .open_app_close {
        width: 0.77rem;
        height: 0.77rem;
        float: right;
        margin-top: 0.035rem;
      }
    }
    .open_hs {
      display: none;
      background: #E03B29;
      padding: 0.16rem 0.334rem 0.16rem 0.3rem;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .open_hs_logo {
        width: 0.84rem;
        height: 0.84rem;
        margin-right: 0.334rem;
        float: left;
      }
      .open_hs_name {
        float:left;
        img{
          display: block;
        }
        .name {
          width: 0.8rem;
        }
        .title {
          color: #FFFFFF;
          .font-dpr(12px);
          margin-top: 0.05rem;
          line-height: 1em;
          padding: 0;
        }
      }
      .open_hs_btn {
        .font-dpr(12px);
        font-weight: 700;
        border: 0.04rem solid #fff;
        width: 1.92rem;
        height: 0.64rem;
        box-sizing: border-box;
        float: right;
        margin-top: 0.08rem;
        text-align: center;
        line-height: 0.56rem;
        color: #fff;
        margin-right: 0.3rem;
      }
      .open_hs_close {
        width: 0.77rem;
        height: 0.77rem;
        float: right;
        margin-top: 0.035rem;
      }
    }
}
</style>
