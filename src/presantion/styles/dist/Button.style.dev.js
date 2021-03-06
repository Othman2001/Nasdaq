"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 50px;\npadding: 10px;\nbackground-color: #008871;\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 18px;\nline-height: 21px;\ntext-align: center;\norder: 1;\ncolor: #fff;\nborder:none;\n\ntransition: 0.5s ease-in-out ;\n&:hover{\n    background: #DFFFFA;\n    cursor: pointer;\n    color: #333;\n}\n@media (max-width: 768px) {\n\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject());

exports.Button = Button;