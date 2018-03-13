"use strict";
var customArrayFunctions = (function() {
    var arr;

    function overload() {
        var m = [];
        for (var i = 0; i < arguments.length; i++){
            if (typeof(arguments[i]) == "function"){
                m[arguments[i].length] = arguments[i];
            }
        }

        return function() {
            return m[arguments.length].apply(this, arguments);
        };
    }

    function isArrayNumber(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] != "number") {
                return false;
            }
        }
        return true;
    }
    var take = overload(
        function(arr, n) {
            if (arguments.length === 2 && Array.isArray(arr)) {
                return arr.slice(0, n);
            }
        },
        function(n) {
            this.arr = this.arr.slice(0, n);
            return this;
        }
    );

    var skip = overload(
        function(arr, n) {
            if (Array.isArray(arr)) {
                return arr.slice(n, arr.length);
            }
        },
        function(n) {
            this.arr = this.arr.slice(n, this.arr.length);
            return this;
        }
    );

    var map = overload(
        function(arr, callback) {
            if (Array.isArray(arr)) {
                var length = arr.length,
                    newarr = [];
                for (var i = 0; i < length; i = i + 1) {
                    newarr.push(callback(i, arr[i]));
                }
                return newarr;
            }
        },
        function(callback) {
            var length = this.arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, this.arr[i]));
            }
            this.arr = newarr;
            return this;
        }
    );

    var reduce = overload(
        function(arr, callback, val) {
            if (Array.isArray(arr) && isArrayNumber(arr)) {
                var length = arr.length,
                    newarr = [];
                for (var i = 0; i < length; i = i + 1) {
                    newarr.push(callback(i, arr[i]) - val);
                }
                return newarr;
            }
        },
        function(callback, val) {
            var length = this.arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, this.arr[i]) - val);
            }
            this.arr = newarr;
            return this;
        }
    );

    var filter = overload(
        function(arr, callback) {
            if (Array.isArray(arr)) {
                var length = arr.length,
                    newarr = [];
                for (var i = 0; i < length; i = i + 1) {
                    if (callback(i, arr[i])) {
                        newarr.push(arr[i]);
                    }
                }
                return newarr;
            }
        },
        function(callback) {
                var length = this.arr.length,
                    newarr = [];
                for (var i = 0; i < length; i = i + 1) {
                    if (callback(i, this.arr[i])) {
                        newarr.push(this.arr[i]);
                    }
                }
                this.arr = newarr;
                return this;
            }
    );

    function foreach(arr, callback) {
        if (Array.isArray(arr) && arguments.length === 2) {
            var length = arr.length;
            for (var i = 0; i < length; i = i + 1) {
                arr[i] = callback(i, arr[i]) ? callback(i, arr[i]) : arr[i];
            }
        }
    }

    function chain(arr) {
        this.arr = arr;
        return this;
    }

    function value() {
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