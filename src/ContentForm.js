define('ContentForm', function (require, exports, module) {
"use strict"

var smui = require('smui');
var Dialog = smui.Dialog;


var links = [
    {name: '链接1', link: 'xxxx'},
    {name: '链接2', link: 'xxxx'},
    {name: '链接3', link: 'xxxx'}
];

var tableConf = {
    fields: ['name', 'link'],
    items: links,
    selected: false,
    cellTextMap: {
        name: function (value) {
            return value
        },
        link: function (value) {
            return '<a data-action="edit">' + value + '</a>';
        }
    },
    action: {
        edit: function () {
            var ContentForm = require('ContentForm');
            var dialog = new Dialog({
                content: Vue.extend({
                    extends: ContentForm,
                    template: templates.form2
                })
            });
            dialog.showModal();
            dialog.$on('ensure', function () {
                Dialog.alert('提交成功');
                dialog.close();
            });
        }
    }
};

module.exports = {
    template: templates.ContentForm,
    data: function () {
        return {
            tableConf: tableConf
        };
    },
    methods: {
        submit: function (e) {
            Dialog.confirm('确认提交？', function () {
                Dialog.alert('提交成功');
            });
            e.preventDefault();
            return false;
        },
    },
    components: {
        DatePicker: smui.DatePicker,
        DropList: smui.DropList,
        RichTable: smui.RichTable
    },
    events: {
        enusre: function () {
            this.submit();
        }
    }
}

})
