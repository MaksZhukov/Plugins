(function(window, undefined){
  "use strict";
  
  var myArray = function(){
  };
  myArray.prototype.take = function(arr,n){
    return arr.slice(0,n);
  }
  myArray.prototype.skip = function(arr,n){
    return arr.slice(n,arr.length);
  }
  myArray.prototype.map = function(arr,callback){
    var i, length = arr.length, newarr = [];
    for (i = 0; i < length; i = i + 1) {
      newarr.push(callback(i,arr[i]));
    }
    return newarr;
  }
  myArray.prototype.reduce = function(arr,callback,val){
    var i, length = arr.length, newarr = [];
    for (i = 0; i < length; i = i + 1) {
      newarr.push(callback(i,arr[i])-val);
    }
    return newarr;
  }
  myArray.prototype.filter = function(arr,callback){
    var i, length = arr.length, newarr = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback(i,arr[i]))
          newarr.push(arr[i]);
    }
    return newarr;
  }
  myArray.prototype.foreach = function(arr,callback){
    var i, length = arr.length, newarr = [];
    for (i = 0; i < length; i = i + 1) {
        if (callback(i,arr[i]))
          newarr.push(arr[i]);
    }
    return newarr;
  }
  window.superArr = new myArray();
})(window);