<template>
  <div class="index-sale" v-lazy:background-image.container="'//img8.ontheroadstore.com/upload/180129/822460479eab979edbeea4dc9885893a.png@640w_1l'">
  	<p class="title">捡便宜这种好事只能在APP里才有</p>
  	<a class="openapp_btn" href="http://url.cn/5EVfeob">打开APP</a>
  </div>
</template>

<style lang="less">
  @import '../../assets/less/common.less';
  .index-sale {
    height: 100%;
    width: 100%;
    // background-image: url('//img8.ontheroadstore.com/upload/180129/822460479eab979edbeea4dc9885893a.png');
    background-repeat: no-repeat;
    background-size: 9rem auto;
    background-position: center 1rem;
    position: relative;
    text-align: center;
    background-color: #fff;
    .title {
      width: 100%;
      position: absolute;
      top: 7.8rem;
      .font-dpr(14px);
    }
    .openapp_btn {
      position: absolute;
      top: 8.75rem;
      left: 50%;
      margin-left: -2rem;
      width: 4.0rem;
      height: 1.04rem;
      box-sizing: border-box;
      border: .06rem solid #000;
      line-height: .92rem;
      .font-dpr(15px);
      display: block;
      color: #000;
      border-radius: .16rem;
    }
  }
</style>
