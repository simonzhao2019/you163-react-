import React, { Component } from "react";
import { reqHomeDate } from "../../../api";
import Swiper from "swiper";
import  "swiper/css/swiper.min.css";
import "./homeHeader.less";
import BScroll from "@better-scroll/core";
import loginPic from "../../../common/images/logo.png";

export default class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.swiperRef = React.createRef();
    this.state = {
      swiperImg: []
    };
  }
  //生命周期函数
  async componentDidMount() {
    if (!this.Scroll) {
      this.BScroll = new BScroll(this.scrollRef.current, {
        scrollX: true,
        click: true
      });
    } else {
      this.Scroll.refresh();
    }
    //发请求获取首页焦点轮播图
    const result = await reqHomeDate();
    if (result.code === 0) {
      const swiperImg = result.data.focusList;
      this.setState({ swiperImg }, () => {
        new Swiper(this.swiperRef.current, {
          loop: true, //这里是自动轮播
          autoplay: {
            delay: 1000,
            disableOnInteraction: false
          }
        });
      });
    }
  }

  render() {
    const { swiperImg } = this.state;
    return (
      <div id="headerSection">
        <div className="logo">
          <a href="##">
            <img src={loginPic} alt="logo" />
          </a>
          <div className="search">
            <i className="iconfont icon-sousuo"></i>
            <input type="text" placeholder="搜索商品，共23069款好物品" />
          </div>
          <button className="login">登录</button>
        </div>
        <div className="nav-wrapper" ref={this.scrollRef}>
          <ul className="nav-content">
            <li>
              <a href="##" data-index="0">
                推荐
              </a>
            </li>
            <li>
              <a href="##" data-index="1">
                居家生活
              </a>
            </li>
            <li>
              <a href="##" data-index="2">
                服饰鞋包
              </a>
            </li>
            <li>
              <a href="##" data-index="3">
                美食酒水
              </a>
            </li>
            <li>
              <a href="##" data-index="4">
                个户清洁
              </a>
            </li>
            <li>
              <a href="##" data-index="5">
                母婴亲子
              </a>
            </li>
            <li>
              <a href="##" data-index="6">
                运动旅行
              </a>
            </li>
            <li>
              <a href="##" data-index="7">
                数码家电
              </a>
            </li>
            <li>
              <a href="##" data-index="8">
                礼品特色
              </a>
            </li>
          </ul>
        </div>
        <div
          className="swiper-container"
          className="swiperList"
          ref={this.swiperRef}
        >
          <div className="swiper-wrapper">
            {swiperImg.map((item, index) => {
              return (
                <div className="swiper-slide" key={index}>
                  <img src={item.picUrl} alt="swiperItem" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
