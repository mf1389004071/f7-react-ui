'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../../resources/less/grid.less');

var fontColorList = [['#E53333', '#E56600', '#FF9900', '#64451D'], ['#DFC5A4', '#FFE500', '#009900', '#006600'], ['#99BB00', '#B8D100', '#60D978', '#00D5FF'], ['#337FE5', '#003399', '#4C33E5', '#9933E5'], ['#CC33E5', '#EE33EE', '#FFFFFF', '#CCCCCC'], ['#999999', '#666666', '#333333', '#000000']];

var FontColor = function (_React$Component) {
  _inherits(FontColor, _React$Component);

  function FontColor(props) {
    _classCallCheck(this, FontColor);

    var _this = _possibleConstructorReturn(this, (FontColor.__proto__ || Object.getPrototypeOf(FontColor)).call(this, props));

    _this.doc = document;
    _this.state = {};
    return _this;
  }

  _createClass(FontColor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'handleChangeFontColor',
    value: function handleChangeFontColor(value, event) {

      this.setState({
        value: value
      });
      this.doc.execCommand('forecolor', false, value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'tool-block' },
        _react2.default.createElement(
          'div',
          { className: 'tool-name' },
          '\u5B57\u4F53\u989C\u8272'
        ),
        _react2.default.createElement(
          'div',
          { className: 'tool-buttons', style: { padding: '8px' } },
          _react2.default.createElement(
            'div',
            { className: 'tool-buttons-inner' },
            fontColorList.map(function (list, index) {
              return _react2.default.createElement(
                'div',
                { className: 'row no-gutter', key: index },
                list.map(function (val) {
                  return _react2.default.createElement(
                    'div',
                    { className: (0, _classnames2.default)('col-25 font-color-col', { 'active': _this2.state.value === val }), key: val },
                    _react2.default.createElement(
                      'div',
                      { className: 'btn font-color-btn', style: { backgroundColor: val, border: val === '#FFFFFF' ? '1px solid #c8c7cc' : 'none' } },
                      _react2.default.createElement('input', { type: 'radio', value: val, name: 'fontcolor', onChange: _this2.handleChangeFontColor.bind(_this2, val) })
                    )
                  );
                })
              );
            })
          )
        )
      );
    }
  }]);

  return FontColor;
}(_react2.default.Component);

module.exports = FontColor;