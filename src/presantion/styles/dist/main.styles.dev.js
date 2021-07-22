"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = exports.MAIN = exports.CardsContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nwidth:94%;\n background-color: #fff;\n border: none ;\nheight:43px;\n\n@media (max-width: 768px) {\n\n width: 100%;\n\n  }\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\npadding: 5rem;\ngrid-area: main;\nbackground-color: #CFFFF6;\nheight: 100%;\n@media (max-width: 768px) {\npadding: 1rem;\n    \n  }\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\ndisplay: grid;\ngrid-template-columns: 1fr 1fr ;\ngap: 20px;\npadding: 3rem;\n@media (max-width: 768px) {\ngrid-template-columns :1fr ;\ngrid-grid-template-rows: 1fr 1fr;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// the styled component of the main component in explore page 
var CardsContainer = _styledComponents["default"].div(_templateObject());

exports.CardsContainer = CardsContainer;

var MAIN = _styledComponents["default"].div(_templateObject2());

exports.MAIN = MAIN;

var Search = _styledComponents["default"].input(_templateObject3());

exports.Search = Search;