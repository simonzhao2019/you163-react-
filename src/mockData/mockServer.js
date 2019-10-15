import Mock from 'mockjs'
import homeData from './homeData.json'
import category from './category.json'
import categoryList from './categoryList.json'

// 1. 定义 模拟数据 路由接口接口 - ajax("/mock/home")  会得到 {code:0, data: homeData}
Mock.mock('/mock/home', {
  code: 0,
  data: homeData
});

Mock.mock( '/mock/category', {
  code: 0,
  data: category
});

Mock.mock( '/mock/category/list', {
  code: 0,
  data: categoryList
});
