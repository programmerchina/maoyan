//开发环境
const SAT_HOST = 'http://localhost:8080';
//测试
const UAT_HOST = 'http://10.213.12.98:8080';
//生产
const PRO_HOST = 'https://m.maoyan.com';


/*
正在热映的接口
参数： token 用户标识
*/
const PLAYING_API = '/ajax/movieOnInfoList';

/*
更多正在热映数据的接口
参数：
    token 用户标识
    movieIds  请求的电影id
*/
const MORE_PLAYING_API = '/ajax/moreComingList';

/*
即将上映的接口
参数： ci   城市id
      token   用户标识
      limit   数据长度
*/
const COMING_API = '/ajax/comingList';


/*
  近期最受期待的电影 
  参数： ci 30 城市id
       limit 10 数据长度
       offset 0
       token 用户标识
*/
const EXPECTATIVE_API = '/ajax/mostExpected';

/*
 更多最受期待的电影
 参数： token 用户标识
       movieIds 请求的电影id
*/

const MORECOMING_API = '/ajax/moreComingList';

/*
 获取电影院信息
 参数：  day=2018-11-16
       offset=0
       limit=20
       districtId=-1
       lineId=-1
       hallType=-1
       brandId=-1
       serviceId=-1
       areaId=-1
       stationId=-
       item=
       updateShowDay=true
       reqId=1542336032525
       cityId=3
       //更多
       2018-11-17&
       offset=20&
       limit=20&
       districtId=-1
       &lineId=-1&
       hallType=-1&
       brandId=-1&
       serviceId=-1&
       areaId=-1&
       stationId=-1
       &item=&
       updateShowDay=false&
       reqId=1542416946571&
       cityId=45
 */
const CINAMELIST_API = '/ajax/cinemaList';
/*
城市列表接口
*/
const CITY_LIST_API = '/dianying/cities.json';
/*
 搜索影院
 参数： 
      kw: 搜索的值
      cityId： 城市ID
      stype：？？？？
 */
const SEARCH_CINAME_API = '/ajax/search';

/*
detail影院
参数：
    movieId: 42964
    day: 2018-11-17
 */
const  FILTER_CINAME_API = '/ajax/filterCinemas'
export default {
    SAT_HOST,
    UAT_HOST,
    PRO_HOST,
    PLAYING_API,
    COMING_API,
    MORE_PLAYING_API,
    EXPECTATIVE_API,
    MORECOMING_API,
    CINAMELIST_API,
    CITY_LIST_API,
    SEARCH_CINAME_API,
    FILTER_CINAME_API
}
