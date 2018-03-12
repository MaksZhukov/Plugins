"use strict";
var customArrayFunctions = (function() {
    var arr;
    function isNumber(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0; i < arr.length; i++) {
                if (typeof arr[i] != 'number') {
                    return false;
                }
            }
            return true;
        }
    }
    function take(arr, n) {
        if (arguments.length === 1 && this.arr){
            n = arguments[0];
            this.arr = this.arr.slice(0, n);
            return this;
        }
        if (arguments.length === 2 && Array.isArray(arr)) {
            return arr.slice(0, n);
        }
    }

    function skip(arr, n) {
        if (arguments.length === 1 && this.arr){
            n = arguments[0];
            this.arr = this.arr.slice(n, this.arr.length);
            return this;
        }
        if (Array.isArray(arr)) {
            return arr.slice(n, arr.length);
        }
    }

    function map(arr, callback) {
        if(arguments.length === 1 && this.arr){
            var length = this.arr.length,
                newarr = [],
                callback = arguments[0];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, this.arr[i]));
            }
            this.arr=newarr;
            return this;
        }
        if (Array.isArray(arr) && arguments.length === 2) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]));
            }
            return newarr;
        }
    }

    function reduce(arr, callback, val) {
        if (arguments.length === 2){
            var length = this.arr.length,
                newarr = [],
                callback = arguments[0],
                val = arguments[1];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, this.arr[i]) - val);
            }
            this.arr = newarr;
            return this;
        }
        if (isNumber(arr) && Array.isArray(arr) && arguments.length === 3 ) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]) - val);
            }
            return newarr;
        }
    }

    function filter(arr, callback) {
        if(arguments.length === 1){
            var length = this.arr.length,
                newarr = [],
                callback = arguments[0];
            for (var i = 0; i < length; i = i + 1) {
                if (callback(i, this.arr[i])) {
                    newarr.push(this.arr[i]);
                }
            }
            this.arr = newarr;
            return this;
        }
        if (Array.isArray(arr) && arguments.length === 2) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                if (callback(i, arr[i])) {
                    newarr.push(arr[i]);
                }
            }
            return newarr;
        }
    }

    function foreach(arr, callback) {
        if (Array.isArray(arr) && arguments.length === 2) {
            var length = arr.length;
            for (var i = 0; i < length; i = i + 1) {
                arr[i]= callback(i, arr[i]) ? callback(i, arr[i]) : arr[i];
            }
        }
    }
    function chain(arr){
        this.arr = arr;
        return this;
    }
    function value(){
        return this.arr;
    }
    return {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach,
        chain: chain,
        value: value
    };
})();