'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _copyToClipboard = require('copy-to-clipboard');

var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);

var onClick = function onClick(text, onCopy) {
  return function () {
    (0, _copyToClipboard2['default'])(text);
    if (onCopy) {
      onCopy(text);
    }
  };
};

var CopyToClipboard = _react2['default'].createClass({
  displayName: 'CopyToClipboard',

  propTypes: {
    text: _react2['default'].PropTypes.string.isRequired,
    onCopy: _react2['default'].PropTypes.func,
    children: _react2['default'].PropTypes.array
  },

  render: function render() {
    var _props = this.props;
    var text = _props.text;
    var onCopy = _props.onCopy;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['text', 'onCopy', 'children']);

    var elem = _react2['default'].Children.only(children);

    return _react2['default'].cloneElement(elem, Object.assign({
      onClick: onClick(text, onCopy)
    }, props));
  }
});

exports['default'] = CopyToClipboard;
module.exports = exports['default'];
//# sourceMappingURL=CopyToClipboard.js.map