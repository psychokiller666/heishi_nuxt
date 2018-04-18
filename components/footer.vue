<template>
<footer class="hs-footer iphoneX_footer">
  <ul>
    <li>
        <a href="/Portal/Index/index.html" class="external active">
            <span class="hs-icon home"></span>
            <span class="text">黑市</span>
        </a>
    </li>
    <li>
        <a href="/Portal/HsCategories/index.html" class="external ">
            <span class="hs-icon culture"></span>
            <span class="text">分类</span>
        </a>
    </li>
    <li>
        <a href="/User/MyChart/index.html" class="external ">
            <span class="hs-icon shopping"></span>
            <span class="text">购物车</span>
            <div class="shopping-num"></div>        </a>
    </li>
    <li>
        <a href="/user/HsMessage/index.html" class="external ">
            <span class="hs-icon explore"></span>
            <span class="text">消息</span>
            <div class="information newComment"></div>
        </a>
    </li>
    <li>
        <a href="/User/Center/index.html" class="external ">
            <span class="hs-icon me"></span>
            <span class="text">我的</span>
            <!-- <div class="information"></div> -->
        </a>
    </li>
  </ul>
</footer>
</template>

<script>
export default {
  props: {
    banner_item: {
      type: Array
    }
  }
}
</script>

<style lang="less">
  @import '../assets/less/common.less';

  footer {
    &.hs-footer {
        width: 10rem;
        position: fixed;
        z-index: 100;
        bottom: 0;
        background-color: #FFF;
        color: #E03B29;
        height: 1.306rem;
        left: 50%;
        margin-left: -5rem;
        ul {
            border-top: 0.0133rem solid #e8e8e8;
            padding-left: 0.266667rem;
            padding-right: 0.266667rem;
            .hs-cf;
            li {
                float: left;
                width: 20%;
                text-align: center;
                padding: .136rem 0;
                overflow: hidden;
                &.notice_btn.active {
                    color: #E03B29;
                    opacity: 1;
                }
                a {
                    display: block;
                    position: relative;
                    &:hover {
                        text-decoration:none;
                    }
                    &.active span {
                        color: #E03B29;
                        opacity: 1;
                    }
                    span {
                        display: block;
                        color: #000000;
                        text-align: center;
                        &.text {
                            font-size: 0.32rem;
                            line-height: 1em;
                            transform: scale(0.9);
                            line-height: 10px;
                            margin-top: 0.2rem;
                        }
                        &.hs-icon {
                            font-size: 0.533rem;
                            &.home:before {
                                content: "\e645";
                            }
                            &.culture:before {
                                content: "\e646";
                            }
                            &.me:before {
                                content: "\e64a";
                            }
                            &.explore:before {
                                content: "\e64b";
                            }
                            &.shopping:before {
                                content: "\e648";
                            }
                            &.new:after {
                                content: "";
                                width: .2rem;
                                height: .2rem;
                                border-radius: .3rem;
                                background-color: #E03B29;
                                position: absolute;
                                top: -0.04rem;
                                right: .6rem;
                            }
                        }
                    }
                    .shopping-num{
                        position: absolute;
                        content: "";
                        width: .25rem;
                        height: .25rem;
                        border-radius: 200%;
                        top: 0;
                        right: 30%;
                        background-color: #E03B29;
                        display: none;
                    }
                    .information{
                        position: absolute;
                        content: "";
                        width: .25rem;
                        height: .25rem;
                        border-radius: 200%;
                        top: 0;
                        right: 28%;
                        background-color: #E03B29;
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
