"use strict";
// Generics
// 함수에서 Generics 사용하기
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// function merge(a: any, b: any): any {
//     return {
//         ...a,
//         ...b
//     }
// }
// 위 merge함수를 Generics 이용하기
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var merged = merge({ foo: 1 }, { bar: 1 });
// Generics 이용한 또다른 함수 예
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap(10);
