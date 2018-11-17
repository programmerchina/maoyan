import http from '../unit'
import API from '../api'


export function getCinameList({id, date, limit}){
    return new Promise((resolve, reject)=>{
        http({
            url: API.CINAMELIST_API,
            method: 'GET',
            data: {
                 day: date,
					       offset: 0,
					       limit: limit,
					       districtId: -1,
					       lineId: -1,
					       hallType: -1,
					       brandId: -1,
					       serviceId: -1,
					       areaId: -1,
					       updateShowDay: true,
					       cityId: id
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败，提醒用户
                return;
            }
            console.log(data)
            //请求成功
            //过滤数据
            let newData = data.cinemas.map(item=>{
                let {nm, addr ,promotion, distance, sellPrice,tag} = item;
                return {nm, addr ,promotion, distance, sellPrice,tag} ;
            })
            //对数据进行分类
            console.log(data)
            resolve(newData);
        })
        .catch(error=>{
            //请求失败
        })
    })
}
//影院搜索
export function searchCinameList({k, Id, stype}){
    return new Promise((resolve, reject)=>{
        http({
            url: API.SEARCH_CINAME_API,
            method: 'GET',
            data: {
                  kw: k,
			      cityId: Id,
			      stype:2
            }
        })
        .then(({data, status})=>{
            if(status != 200){
                //请求失败，提醒用户
                return;
            }
            console.log(data)
            //请求成功
            //过滤数据
            let newData = data.cinemas.list.map(item=>{
                let {nm, addr ,promotion, distance, sellPrice,tag} = item;
                return {nm, addr ,promotion, distance, sellPrice,tag} ;
            })
            //对数据进行分类
            console.log(newData)
            resolve(newData);
        })
        .catch(error=>{
            //请求失败
        })
    })
}