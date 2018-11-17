import Header from "./header/header"
import Tab from "./tab/tab"
import TabItem from "./tab/tabItem"
import Content from "./content/Content"
import List from "./list/list"
import otList from "./list/otlist"


export default {
	//封装全局组件
	install(Vue){  
        Vue.component(Header.name, Header);
        Vue.component(TabItem.name, TabItem);
        Vue.component(Tab.name, Tab);
        Vue.component(Content.name, Content);
        Vue.component(List.name, List);
        Vue.component(otList.name, otList);
    }
}
