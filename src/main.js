window.templates = {}

// 导入所有模板
document.querySelectorAll('.tpl').forEach(
    function (temp) {
        temp.import.querySelectorAll('template').forEach(
            function (item) {
                templates[item.id] = item.innerHTML
            }
        )
    }
);


var smui = require('smui');
var DocHeader = require('DocHeader');
var ContentForm = require('ContentForm');
var SideBar = require('SideBar');

new Vue({
    el: '#main',
    methods: {
        changeModule: function (e) {
            var mod = e.module;
            new Vue({
                el: '#content-panel',
                replace: false,
                extends: ContentForm,
                template: templates[mod]
            })
        }
    },
    components: {
        DropList: smui.DropList,
        DatePicker: smui.DatePicker,
        DocHeader: DocHeader,
        ContentForm: ContentForm,
        SideBar: SideBar
    }
})