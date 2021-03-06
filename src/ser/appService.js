import http from '../unit'
import API from '../api'


export function getCityListData(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.CITY_LIST_API,
            method: 'GET'
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }else{
                //请求成功
                // 取得首字母，按字母先分类
                let map = {};
                data.cts.map(item=>{
                    let letter = item.py[0];
                    if(!map[letter]){
                        map[letter] = [];
                    }
                    map[letter].push(item);
                })
                let keys = Object.keys(map);
                //排序
                // 选择排序
                for(let i = 0; i < keys.length; i++){
                    for(let j = i+1; j < keys.length; j++){
                        if(keys[i] > keys[j]){
                            let tmp = keys[i];
                            keys[i] = keys[j];
                            keys[j] = tmp;
                        }
                    }
                }
                //组装数据
                let newData = keys.map(item=>{
                    return {
                        key: item, 
                        value: map[item]
                    }
                })
                console.log(newData)
                resolve({
                    keys: keys,
                    data: newData
                });
            }
        })
        .catch(error=>{
            //请求失败
        })
    })
}

/********************************/
export function filterCiname(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.FILTER_CINAME_API,
            method: 'GET',
            data: {
            	  movieId: '42964',
                  day: '2018-11-17'
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }
            console.log(data)
            resolve(data)
        })
        .catch(error=>{
            //请求失败
        })

    })
}

//******************* 
export function detailMovie(id){
    return new Promise((resolve, reject)=>{
        http({
            url: API.DETAIL_MOVIE_API,
            method: 'GET',
            data: {
            	  movieId: id,
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }
            console.log(data)
            resolve(data)
        })
        .catch(error=>{
            //请求失败
        })

    })
}
//*********************
export function update({rad,cid,day,mid}){
    return new Promise((resolve, reject)=>{
        http({
            url: API.FORCEUPDATE_MOVIE_API,
            method: 'POST',
            data: {
                    forceUpdate: rad,
					cityId: cid,
					day: day,
					limit: 20,
					movieId: mid,
					offset: 0,				
					updateShowDay: true
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }
            console.log(data)
            resolve(data)
        })
        .catch(error=>{
            //请求失败
        })

    })
}
//****************************
export function tomyMovieId(){
    return new Promise((resolve, reject)=>{
        http({
            url: API.TOMYMOVIEID_API,
            method: 'GET',
            data: {
                  channelId: 4        
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }
            console.log(data)
            resolve(data)
        })
        .catch(error=>{
            //请求失败
        })

    })
}
//*********************************
export function cinameDet(mid, cid){
    return new Promise((resolve, reject)=>{
        http({
            url: API.CINAMEDETAIL_API,
            method: 'GET',
            data: {
            	  movieId: mid,
                  cinemaId: cid
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败
            }
            console.log(data)
            resolve(data)
        })
        .catch(error=>{
            //请求失败
        })

    })
}