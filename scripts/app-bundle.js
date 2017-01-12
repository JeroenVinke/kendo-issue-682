define('app',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);

            this.dataSource = new kendo.data.DataSource();

            this.dataSource.data([{}, {}]);
        }

        App.prototype.deleteResponse = function deleteResponse(currentResponse) {
            alert('asdfadsf');
        };

        return App;
    }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-kendoui-bridge');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"aurelia-kendoui-bridge/grid/grid\"></require><require from=\"aurelia-kendoui-bridge/grid/col\"></require><require from=\"aurelia-kendoui-bridge/common/template\"></require><ak-grid id=\"nodeParams\" k-data-source.bind=\"dataSource\" k-pageable.bind=\"{ input: true, numeric: false}\" k-filterable.bind=\"true\" k-sortable.bind=\"true\" k-scrollable.bind=\"true\" k-selectable.bind=\"false\" k-auto-bind=\"false\" k-widget.bind=\"grid\" k-editable=\"popup\" k-navigatable.bind=\"true\"><ak-col k-field=\"sequenceNbr\" k-title=\"Seq\"></ak-col><ak-col k-field=\"parmEqualOrRangeFrom\" k-title=\"Parm Equals / From\"></ak-col><ak-col k-field=\"parmRangeThru\" k-title=\"Parm Thru\"></ak-col><ak-col k-field=\"parmCategoryID\" k-title=\"Parm Category\"></ak-col><ak-col k-field=\"responseTypeCategoryID\" k-title=\"Response Type\"></ak-col><ak-col k-field=\"responseValue\" k-title=\"Response Value\"></ak-col><ak-col k-field=\"nextNodeID\" k-title=\"Next Node\"></ak-col><ak-col k-title=\"&nbsp;\"><ak-template><div><button type=\"button\" class=\"btn btn-danger\" click.delegate=\"deleteResponse($this)\">Delete</button></div></ak-template></ak-col></ak-grid></template>"; });
//# sourceMappingURL=app-bundle.js.map