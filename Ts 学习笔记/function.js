// 函数
function buildName(val1) {
    var valR = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        valR[_i - 1] = arguments[_i];
    }
    return val1 + " " + valR.join(" "));
}
buildName('a', 'haha', 'lala');


