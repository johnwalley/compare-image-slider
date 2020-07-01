(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  Object.defineProperty(exports, "__esModule", { value: true });
  exports.ReactCompareImageSlider = void 0;
  var React = require("react");
  require("compare-image-slider");
  function ReactCompareImageSlider(_a) {
      var leftImage = _a.leftImage, rightImage = _a.rightImage;
      return (React.createElement(React.Fragment, null,
          React.createElement("before-after-slider", null,
              React.createElement("img", { slot: "left", width: "100%", draggable: "false", src: leftImage }),
              React.createElement("img", { slot: "right", width: "100%", draggable: "false", src: rightImage }))));
  }
  exports.ReactCompareImageSlider = ReactCompareImageSlider;

})));
//# sourceMappingURL=index.js.map
