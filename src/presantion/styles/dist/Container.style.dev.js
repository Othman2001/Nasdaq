"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexContainer = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n display: flex;\n align-items:  ", ";\n flex-direction:  ", ";\n justify-content: center;\n\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay: grid;\ngrid-template-columns: 0.2fr 1fr 0.3fr ;\ngrid-template-areas:\n\"main  main   main  main\"\n\"main  main   main  main\"\n\"main  main   main  main\"\n\"main  main   main  main\"\n\n;\n@media (max-width: 768px) {\n grid-template-columns: 0.2fr 2fr ;\n grid-auto-rows: 1fr 1fr;\n grid-template-areas: \n \"sidebar  main main\"\n \"sidebar  news news\"\n \n\n ;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents["default"].div(_templateObject());

exports.Container = Container;

var FlexContainer = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.align;
}, function (props) {
  return props.direction;
});

exports.FlexContainer = FlexContainer;