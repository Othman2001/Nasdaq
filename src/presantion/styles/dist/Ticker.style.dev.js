"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardContainer = exports.TickerButton = exports.ContainerButtons = exports.ContainerBoxes = exports.FlexContainer = exports.TickerMarketBox = exports.TickerSmallBox = exports.TickerLightText = exports.TickerTitle = exports.TickerContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n// max-width: 500px;\n// text-overflow: ellipsis;\n// overflow: hidden;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 50px;\npadding:10px;\nfont-family: Roboto;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 18px;\nline-height: 13px;\n/* identical to box height */\ncolor: #443535;\nborder:none;\nbackground: #DFFFFA;\ntext-align: center;\ntransition: 0.5s ease-in-out ;\nmargin-top: 25px;\n&:hover{\n    background-color: #008871;\n    cursor: pointer;\n    color: #fff;\n}\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nflex-direction: column;\nmargin-left: 43px;\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\ngap: 10px;\n\nmargin-top: 28px;\nmargin-left: 5px;\n\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\n\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\ntext-align: center;\nbackground: #7BE36A;\ncolor: #000000;\npadding: 10px;\nmargin-top: 8px\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n\nbackground: #7BE36A;\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: 300;\nfont-size: 14px;\nline-height: 17px;\ntext-align: center;\ncolor: #000000;\npadding: 10px;\n\n\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: 300;\nfont-size: 16px;\ntext-align: center;\ncolor: #705C5C; \ndisplay: block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nfont-family: Rubik;\nfont-style: normal;\nfont-weight: normal;\nfont-size: 24px;\ntext-align: center;\ncolor: #000000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n// display: grid;\n// grid-template-columns: 1fr 1fr;\n// grid-template-rows: 1fr ;\nbackground: #9DFAEB;\nmax-width: 500px;\nmax-height: 125px;\ntext-align: center;\ndisplay: flex;\njustify-content: space-around;\n\n\nmargin-top: 37px;\nmargin-left: 5px;\nwhite-space: nowrap;\ntext-overflow: ellipsis;\n\noverflow: hidden;\nwhite-space: nowrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TickerContainer = _styledComponents["default"].div(_templateObject());

exports.TickerContainer = TickerContainer;

var TickerTitle = _styledComponents["default"].h3(_templateObject2());

exports.TickerTitle = TickerTitle;

var TickerLightText = _styledComponents["default"].span(_templateObject3());

exports.TickerLightText = TickerLightText;

var TickerSmallBox = _styledComponents["default"].div(_templateObject4());

exports.TickerSmallBox = TickerSmallBox;

var TickerMarketBox = _styledComponents["default"].div(_templateObject5());

exports.TickerMarketBox = TickerMarketBox;

var FlexContainer = _styledComponents["default"].div(_templateObject6());

exports.FlexContainer = FlexContainer;

var ContainerBoxes = _styledComponents["default"].div(_templateObject7());

exports.ContainerBoxes = ContainerBoxes;

var ContainerButtons = _styledComponents["default"].div(_templateObject8());

exports.ContainerButtons = ContainerButtons;

var TickerButton = _styledComponents["default"].button(_templateObject9());

exports.TickerButton = TickerButton;

var CardContainer = _styledComponents["default"].div(_templateObject10());

exports.CardContainer = CardContainer;