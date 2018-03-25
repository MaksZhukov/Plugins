"use strict";
class CustomArrayFunctions {
	constructor(){

	}
    isArrayNumber(arr) {
        for (var i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                return false;
            }
        }
        return true;
    }
    take(arr, n) {
        if (Array.isArray(arr)) {
            return arr.slice(0, n);
        }
    }

    skip(arr, n) {
        if (Array.isArray(arr)) {
            return arr.slice(n, arr.length);
        }
    }

    map(arr, callback) {
        if (Array.isArray(arr)) {
            var length = arr.length,
                newarr = [];
            for (var i = 0; i < length; i = i + 1) {
                newarr.push(callback(i, arr[i]));
            }
            return newarr;
        }
    }

    reduce(arr, callback, val) {
        if (Array.isArray(arr) && this.isArrayNumber(arr)) {
            var length = arr.length,
                i = 0,
                value;
            value = val === undefined ? arr[i++] : val;
            for (; i < length; i++) {
                value = callback(value, arr[i]);
            }
            return value;
        }
    }

    filter(arr, callback) {
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

    foreach(arr, callback) {
        if (Array.isArray(arr)) {
            var length = arr.length;
            for (var i = 0; i < length; i = i + 1) {
                callback(i, arr[i]);
            }
        }
    }
    chain(arr) {
        return new Chain(arr);
    }
}
class Chain extends CustomArrayFunctions {
    constructor(arr) {
    	super();
        this.arr = arr;
        return this;
    }
    take(n){
		this.arr = super.take(this.arr,n);
		return this;
    }
    skip(n){
    	this.arr = super.skip(this.arr,n);
    	return this;
    }
    map(callback){
    	this.arr = super.map(this.arr,callback);
    	return this;
    }
    filter(callback){
    	this.arr = super.filter(this.arr,callback);
    	return this;
    }
    value(){
    	return this.arr;
    }
}

class Sum {
	constructor (){
		this.cash = {};
		return this.sum.bind(this);
	}
    sum(arr, start, end) {
        var result = 0,
            key = arr.toString() + start + end;
        if (key in this.cash) {
            return this.cash[key];
        }
        for (let i = start - 1; i < end; i++) {
            result += arr[i];
        }
        this.cash[key] = result;
        return result;
    }
}
var sum = new Sum();
var customArrayFunctions = new CustomArrayFunctions();

