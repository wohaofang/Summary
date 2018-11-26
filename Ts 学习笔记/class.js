var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
var Demo = /** @class */ (function () {
    function Demo(message) {
        this.greeting = message;
    }
    Demo.print = function () {
        console.log('static method');
    };
    Demo.prototype.greet = function (val) {
        console.log('haha' + this.greeting + '0000' + val);
    };
    return Demo;
}());
var ha = new Demo('dingming');
console.log(ha.greet());
var Demo2 = /** @class */ (function (_super) {
    __extends(Demo2, _super);
    function Demo2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Demo2.prototype.bark = function () {
        return 'haha' + this.greeting;
    };
    return Demo2;
}(Demo));
var ha2 = new Demo2('lala');
console.log(ha2.greet(), ha2.bark());
var DD = /** @class */ (function (_super) {
    __extends(DD, _super);
    function DD(message) {
        return _super.call(this, message) || this;
    }
    DD.prototype.greet = function (val) {
        if (val === void 0) { val = 5; }
        _super.prototype.greet.call(this, val); // super可以调用派生的方法
    };
    return DD;
}(Demo));
var DD1 = new DD('llll');
DD1.greet(5555);
