"use strict";
var customArrayFunctions = (function() {
    function isArrayNumber(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                return false;
            }
        }
        return true;
    }

    function take(arr, n) {
        if (Array.isArray(arr)) {
            return arr.slice(0, n);
        }
    }

    function skip(arr, n) {
        if (Array.isArray(arr)) {
            return arr.slice(n, arr.length);
        }
    }

    function map(arr, callback) {
        if (Array.isArray(arr)) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]));
            }
            return newarr;
        }
    }

    function reduce(arr, callback, val) {
        if (Array.isArray(arr) && isArrayNumber(arr)) {
            var length = arr.length,
                i=0,
                value;
            value = val === "undefined" ? arr[i++] : val; 
            for (; i < length; i++) {
                value = callback(value, arr[i]);
            }
            return value;
        }
    }

    function filter(arr, callback) {
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
    }

    function foreach(arr, callback) {
        if (Array.isArray(arr)) {
            var length = arr.length;
            for (var i = 0; i < length; i = i + 1) {
                callback(i, arr[i]);
            }
        }
    }
    function chain(arr) {
        return {
            take: function(n){
              arr = self.take.call(null,arr,n);
              return this;
          },
            skip: function(n) {
                arr = self.skip.call(null, arr,n);
                return this;
            },
            map: function(callback) {
                arr = self.map.call(null, arr,callback);
                return this;

            },
            reduce: function(callback, val) {
                 arr = self.reduce.call(null, arr,callback,val);
                return this;

            },
            filter: function(callback) {
                arr = self.filter.call(null, arr,callback);
                return this;
            },
            value: () => arr
        };
    }
    var self = {
        take: take,
        skip: skip,
        map: map,
        reduce: reduce,
        filter: filter,
        foreach: foreach,
        chain: chain
    };

    return self;
})();
