import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

import'./FootTab.less';

export default class FootTab extends Component {
  render() {
    return (
      <>
        <footer id="footer_guide">
          <NavLink className="guide_item" to="/home"  >
            <span className="item_icon">
              <i className="iconfont icon-home"></i>
            </span>
            <span>首页</span>
          </NavLink>
          <NavLink className="guide_item" to="/category">
            <span className="item_icon">
              <i className="iconfont icon--shangpinfenlei-gai"></i>
            </span>
            <span>分类</span>
          </NavLink>
          <NavLink className="guide_item" to="/recognize">
            <span className="item_icon">
              <i className="iconfont icon-tupian1"></i>
            </span>
            <span>识物</span>
          </NavLink>
          <NavLink className="guide_item" to="/cart">
            <span className="item_icon">
              <i className="iconfont icon-gouwuche"></i>
            </span>
            <span>购物车</span>
          </NavLink>
          <NavLink className="guide_item" to="/personal">
            <span className="item_icon">
              <i className="iconfont icon-gerensvg"></i>
            </span>
            <span>个人</span>
          </NavLink>
        </footer>
      </>
    );
  }
}
