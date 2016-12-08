define('SideBar', function (require, exports, module) {
"use strict"

var links = [
    {name: '注册', link: '', module: 'form1'},
    {name: '神马', link: 'http://e.sm.cn/'},
    {name: '百度', link: 'http://www.baidu.com/'},
    {name: '谷歌', link: 'http://www.google.com/'}
];

var cur = {};
module.exports = {
    template: templates.SideBar,
    data: function () {
        cur = links[0];
        cur.active = true;
        return {
            items: links
        };
    },
    methods: {
        load: function (item) {
            cur.active = false;
            item.active = true;
            cur = item;
            this.$emit('change-module', {module: item.module})
        }
    }
}

})
