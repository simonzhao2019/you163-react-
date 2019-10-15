import ajax from './ajax';
export const reqCategoryList=()=>ajax({
  url:"/mock/category/list"
})
export const reqHomeDate=()=>ajax({
  url:"/mock/home"
})
export const reqHotSearch=()=>ajax({
  url:""
})
export const reqSearchData=()=>ajax({
  url:"/api/xhr/search/init.json"
})
export const reqSearchWord = keywords =>
         ajax({
           url: "/api/xhr/search/searchAutoComplete.json",
           method: "GET",
           params: {
             keywordPrefix: keywords
           }
         });
export const reqRecognizeNav = () => ajax("/api/topic/v1/find/getTabs.json");
//识物recommend
export const reqRecommendData = () =>
  ajax("/api/topic/v1/find/recManual.json"); 

