"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverViewButton = exports.OverViewCurrencyBox = exports.OverViewLightText = exports.OverViewBalane = exports.OverViewTitle = exports.OverViewContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nmargin-top: 21%;\nborder-radius: 50px;\npadding: 10px;\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 18px;\nline-height: 21px;\ntext-align: center;\norder: 1;\ncolor: #443535;\nborder:none;\nbackground: #DFFFFA;\ntransition: 0.5s ease-in-out ;\n&:hover{\n    background-color: #008871;\n    cursor: pointer;\n    color: #fff;\n}\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\nbackground: #008871;\ncolor: #fff;\n\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 18px;\nline-height: 21px;\ntext-align: center;\npadding: 14px;\ncolor: #FFFFFF;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  \nfont-family: Rubik;\nfont-style: normal;\nfont-weight: 300;\nfont-size: 18px;\nline-height: 21px;\ntext-align: center;\ncolor: #796F6F;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nmargin-top: 28%;\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 18px;\nline-height: 21px;\ntext-align: center;\n\ncolor: #000000;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: bold;\nfont-size: 24px;\nline-height: 28px;\ntext-align: center;\n\ncolor: #000000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\nmax-width: 700px;\nmargin-top: 3rem;\npadding-top: 3rem;\ndisplay: flex;\nbackground-color: #DAF2EE;\njustify-content: space-around;\n// flex-direction: column-reverse;\nflex-wrap: wrap;\nmin-height: 170px;\nmargin-left: 12%;\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// overview box container
var OverViewContainer = _styledComponents["default"].div(_templateObject()); // overview box title


exports.OverViewContainer = OverViewContainer;

var OverViewTitle = _styledComponents["default"].h2(_templateObject2()); // overview h3 total balance


exports.OverViewTitle = OverViewTitle;

var OverViewBalane = _styledComponents["default"].h3(_templateObject3()); // overivew for light text


exports.OverViewBalane = OverViewBalane;

var OverViewLightText = _styledComponents["default"].span(_templateObject4());

exports.OverViewLightText = OverViewLightText;

var OverViewCurrencyBox = _styledComponents["default"].div(_templateObject5());

exports.OverViewCurrencyBox = OverViewCurrencyBox;

var OverViewButton = _styledComponents["default"].button(_templateObject6());

exports.OverViewButton = OverViewButton;