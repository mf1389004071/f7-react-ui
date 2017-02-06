'use strict';

var _plugins = require('./plugins');

var _plugins2 = _interopRequireDefault(_plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import browser from '../core/browser'
// import utils from '../core/utils'
_plugins2.default.plugins['justify'] = function () {
    var me = this;
    'justifyleft justifyright justifycenter justifyfull'.split(' ').forEach(function (cmdName) {
        me.commands[cmdName] = {
            execCommand: function execCommand(cmdName) {
                return this.document.execCommand(cmdName);
            },
            queryCommandValue: function queryCommandValue(cmdName) {
                var val = this.document.queryCommandValue(cmdName);
                return val === true || val === 'true' ? cmdName.replace(/justify/, '') : '';
            },
            queryCommandState: function queryCommandState(cmdName) {
                return this.document.queryCommandState(cmdName) ? 1 : 0;
            }
        };
    });
}; ///import core
///commands 段落格式,居左,居右,居中,两端对齐
///commandsName  JustifyLeft,JustifyCenter,JustifyRight,JustifyJustify
///commandsTitle  居左对齐,居中对齐,居右对齐,两端对齐
/**
 * @description 居左右中
 * @name Plugins.execCommand
 * @param   {String}   cmdName     justify执行对齐方式的命令
 * @param   {String}   align               对齐方式：left居左，right居右，center居中，justify两端对齐
 * @author zhanyi
 */
/* eslint quotes : "off"*/