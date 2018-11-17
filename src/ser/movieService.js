import http from '../unit'
import API from '../api'


//请求正在热映的电影数据
export function getPlayingList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.PLAYING_API,
            method: 'GET',
            data: {
                token: ''
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
                return;
            }            
            //请求成功
            let newData = data.movieList.map(item=>{
                console.log(item);
                let {id, nm, img, version, sc, star, showInfo, globalReleased,wish} = item;
                img = img.replace(/w.h/, '128.180');
                sc = sc%1 == 0 ? sc + '.0': sc
                return {id, nm, img, version, sc, star, showInfo, globalReleased,wish};
            })
            //data.movieIds//获取所有的Id值
            resolve([newData, data.movieIds]);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

//请求更多正在热映的电影数据
export function getMorePlayingList(ids){
    return new Promise((resolve, reject)=>{
        http({
            url: API.MORE_PLAYING_API,
            method: 'GET',
            data: {
                token: '',
                movieIds: ids
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
                return;
            }
//          console.log(data);
            //请求成功
            console.log(data.coming)
            let newData = data.coming.map(item=>{
                let {id, nm, img, version, sc, star, showInfo, globalReleased,wish} = item;
                img = img.replace(/w.h/, '128.180');
                sc = sc%1 == 0 ? sc + '.0': sc
                return {id, nm, img, version, sc, star, showInfo, globalReleased,wish};
            })
            resolve(newData);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}

//请求即将上映的电影数据
export function getComingList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.COMING_API,
            method: 'GET',
            data: {
                ci: 30,
                token: '',
                limit: 10
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败，提醒用户
                return;
            }
            //请求成功
            //过滤数据
            let newData = data.coming.map(item=>{
                let {comingTitle, img, nm, wish, star, showInfo, globalReleased, version} = item;
                img = img.replace(/w.h/, '128.180');
                return {comingTitle, img, nm, wish, star, showInfo, globalReleased, version};
            })
            //对数据进行分类
            let dataMap = {};
            newData.map(item=>{
                if(!dataMap[item.comingTitle]){
                    dataMap[item.comingTitle] = [];
                }
                dataMap[item.comingTitle].push(item);
            })
            resolve([dataMap, data.movieIds]);
        })
        .catch(error=>{
            //请求失败
        })
    })
}
//请求最受期待的电影
export function getExpectativeList(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.EXPECTATIVE_API,
            method: 'GET',
            data: {
                ci: 30,
                token: '',
                limit: 10,
                offset: 0
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败，提醒用户
                return;
            }
            console.log(data);
            //请求成功
            //过滤数据
            let newData = data.coming.map(item=>{
                let {comingTitle, img, nm, wish, star, showInfo, globalReleased, version} = item;
                img = img.replace(/w.h/, '128.180');
                return {comingTitle, img, nm, wish, star, showInfo, globalReleased, version};
            })
            //对数据进行分类
//          let dataMap = {};
//          newData.map(item=>{
//              if(!dataMap[item.comingTitle]){
//                  dataMap[item.comingTitle] = [];
//              }
//              dataMap[item.comingTitle].push(item);
//          })
            resolve(newData);
        })
        .catch(error=>{
            //请求失败
        })
    })
}
//获取更多期待的电影
export function getMoreComingList(ids){
    return new Promise((resolve, reject)=>{
        http({
            url: API.MORECOMING_API,
            method: 'GET',
            data: {
                token: '',
                movieIds: ids
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
                return;
            }
//          console.log(data);
            //请求成功
            console.log(data.coming)
            let newData = data.coming.map(item=>{
                let {comingTitle,id, nm, img, version, sc, star, showInfo, globalReleased,wish} = item;
                img = img.replace(/w.h/, '128.180');
                sc = sc%1 == 0 ? sc + '.0': sc
                return {comingTitle,id, nm, img, version, sc, star, showInfo, globalReleased,wish};
            })
            let dataMap = {};
            newData.map(item=>{
                if(!dataMap[item.comingTitle]){
                    dataMap[item.comingTitle] = [];
                }
                dataMap[item.comingTitle].push(item);
            })
            console.log(dataMap)
            
            resolve(dataMap);
        })
        .catch(error=>{
            //请求失败
            console.log(error);
        })
    })
}
