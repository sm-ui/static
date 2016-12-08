define('DocHeader', function (require, exports, module) {
"use strict"

var links = [
    {name: '页面1', module: 'form', active: true},
    {name: '页面2', module: 'form1', active: false},
    {name: '页面3', module: 'form2', active: false}
];

var cur = {};
module.exports = {
    template: templates.DocHeader,
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
