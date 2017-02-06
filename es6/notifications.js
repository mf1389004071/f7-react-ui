'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _dom = require('./dom');

var _dom2 = _interopRequireDefault(_dom);

var _params = require('./params');

var _params2 = _interopRequireDefault(_params);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./resources/less/lists.less'); /*======================================================
                                        ************   Notifications   ************
                                        ======================================================*/

require('./resources/less/notifications.less');
var _tempNotificationElement;
var _compiledTemplates = {};
var Notifications = {};
Notifications.addNotification = function (params) {
    if (!params) return;

    if (typeof params.media === 'undefined') params.media = _params2.default.notificationMedia;
    if (typeof params.title === 'undefined') params.title = _params2.default.notificationTitle;
    if (typeof params.subtitle === 'undefined') params.subtitle = _params2.default.notificationSubtitle;
    if (typeof params.closeIcon === 'undefined') params.closeIcon = _params2.default.notificationCloseIcon;
    if (typeof params.hold === 'undefined') params.hold = _params2.default.notificationHold;
    if (typeof params.closeOnClick === 'undefined') params.closeOnClick = _params2.default.notificationCloseOnClick;
    if (typeof params.button === 'undefined') params.button = _params2.default.notificationCloseButtonText && {
        text: _params2.default.notificationCloseButtonText,
        close: true
    };

    if (!_tempNotificationElement) _tempNotificationElement = document.createElement('div');

    params.material = _params2.default.material;

    var container = (0, _dom2.default)('.notifications');
    if (container.length === 0) {
        (0, _dom2.default)('body').append('<div class="notifications list-block' + (params.material ? '' : ' media-list') + '"><ul></ul></div>');
        container = (0, _dom2.default)('.notifications');
    }
    var list = container.children('ul');

    var notificationTemplate = _params2.default.notificationTemplate || '{{#if custom}}' + '<li>{{custom}}</li>' + '{{else}}' + '<li class="notification-item notification-hidden">' + '<div class="item-content">' + '{{#if material}}' + '<div class="item-inner">' + '<div class="item-title">{{js "this.message || this.title || this.subtitle"}}</div>' + '{{#if ../button}}{{#button}}' + '<div class="item-after">' + '<a href="#" class="button {{#if color}}color-{{color}}{{/if}} {{#js_compare "this.close !== false"}}close-notification{{/js_compare}}">{{text}}</a>' + '</div>' + '{{/button}}{{/if}}' + '</div>' + '{{else}}' + '{{#if media}}' + '<div class="item-media">{{media}}</div>' + '{{/if}}' + '<div class="item-inner">' + '<div class="item-title-row">' + '{{#if title}}' + '<div class="item-title">{{title}}</div>' + '{{/if}}' + '{{#if closeIcon}}' + '<div class="item-after"><a href="#" class="close-notification"><span></span></a></div>' + '{{/if}}' + '</div>' + '{{#if subtitle}}' + '<div class="item-subtitle">{{subtitle}}</div>' + '{{/if}}' + '{{#if message}}' + '<div class="item-text">{{message}}</div>' + '</div>' + '{{/if}}' + '{{/if}}' + '</div>' + '</li>' + '{{/if}}';
    if (!_compiledTemplates.notification) {
        _compiledTemplates.notification = _template2.default.compile(notificationTemplate);
    }
    _tempNotificationElement.innerHTML = _compiledTemplates.notification(params);

    var item = (0, _dom2.default)(_tempNotificationElement).children();

    item.on('click', function (e) {
        e.preventDefault();
        var close = false;
        var target = (0, _dom2.default)(e.target);
        if (params.material && target.hasClass('button')) {
            if (params.button && params.button.onClick) params.button.onClick.call(target[0], e, item[0]);
        }
        if (target.is('.close-notification') || (0, _dom2.default)(e.target).parents('.close-notification').length > 0) {
            close = true;
        } else {
            if (params.onClick) params.onClick(e, item[0]);
            if (params.closeOnClick) close = true;
        }
        if (close) Notifications.closeNotification(item[0]);
    });
    if (params.onClose) {
        item.data('f7NotificationOnClose', function () {
            params.onClose(item[0]);
        });
    }
    if (params.additionalClass) {
        item.addClass(params.additionalClass);
    }
    if (params.hold) {
        setTimeout(function () {
            if (item.length > 0) Notifications.closeNotification(item[0]);
        }, params.hold);
    }

    list[params.material ? 'append' : 'prepend'](item[0]);
    container.show();

    var itemHeight = item.outerHeight(),
        clientLeft;
    if (params.material) {
        container.transform('translate3d(0, ' + itemHeight + 'px, 0)');
        container.transition(0);

        clientLeft = item[0].clientLeft;

        container.transform('translate3d(0, 0, 0)');
        container.transition('');
    } else {
        item.css('marginTop', -itemHeight + 'px');
        item.transition(0);

        clientLeft = item[0].clientLeft;

        item.transition('');
        item.css('marginTop', '0px');
    }

    container.transform('translate3d(0, 0,0)');
    item.removeClass('notification-hidden');

    return item[0];
};
Notifications.closeNotification = function (item) {
    item = (0, _dom2.default)(item);
    if (item.length === 0) return;
    if (item.hasClass('notification-item-removing')) return;
    var container = (0, _dom2.default)('.notifications');

    var itemHeight = item.outerHeight();
    item.css('height', itemHeight + 'px').transition(0).addClass('notification-item-removing');
    var clientLeft = item[0].clientLeft;

    item.css('height', '0px').transition('');
    if (item.data('f7NotificationOnClose')) item.data('f7NotificationOnClose')();

    if (container.find('.notification-item:not(.notification-item-removing)').length === 0) {
        container.transform('');
    }

    item.addClass('notification-hidden').transitionEnd(function () {
        item.remove();
        if (container.find('.notification-item').length === 0) {
            container.hide();
        }
    });
};

exports.default = Notifications;