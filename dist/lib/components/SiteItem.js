"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var default_1 = __importDefault(require("part:@sanity/components/buttons/default"));
var SiteItem_css_1 = __importDefault(require("./SiteItem.css"));
var SiteItem = /** @class */ (function (_super) {
    __extends(SiteItem, _super);
    function SiteItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleDeployButtonClicked = function (_) {
            _this.props.onDeploy(_this.props.site);
        };
        return _this;
    }
    SiteItem.prototype.renderLinks = function () {
        var site = this.props.site;
        if (!(site.url || site.adminUrl)) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            ' (',
            site.url && (react_1.default.createElement("span", null,
                react_1.default.createElement("a", { href: site.url }, "view"))),
            site.adminUrl && (react_1.default.createElement("span", null,
                ", ",
                react_1.default.createElement("a", { href: site.adminUrl }, "admin"))),
            ')'));
    };
    SiteItem.prototype.render = function () {
        var site = this.props.site;
        return (react_1.default.createElement("li", { className: SiteItem_css_1.default.root },
            react_1.default.createElement("div", { className: SiteItem_css_1.default.status },
                react_1.default.createElement("h4", { className: SiteItem_css_1.default.title },
                    site.title,
                    this.renderLinks())),
            site.buildHookId && (react_1.default.createElement("div", { className: SiteItem_css_1.default.actions },
                react_1.default.createElement(default_1.default, { inverted: true, onClick: this.handleDeployButtonClicked }, "Deploy")))));
    };
    return SiteItem;
}(react_1.default.Component));
exports.default = SiteItem;
//# sourceMappingURL=SiteItem.js.map