(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).mgo = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"mgo",pluralRuleFunction:function(e,t){return t?"other":1==e?"one":"other"},fields:{year:{displayName:"fituʼ",relative:{0:"this year",1:"next year","-1":"last year"},relativeTime:{future:{other:"+{0} y"},past:{other:"-{0} y"}}},month:{displayName:"iməg",relative:{0:"this month",1:"next month","-1":"last month"},relativeTime:{future:{one:"+{0} m",other:"+{0} m"},past:{one:"-{0} m",other:"-{0} m"}}},day:{displayName:"anəg",relative:{0:"tèchɔ̀ŋ",1:"isu",2:"isu ywi","-1":"ikwiri"},relativeTime:{future:{one:"+{0} d",other:"+{0} d"},past:{one:"-{0} d",other:"-{0} d"}}},hour:{displayName:"Hour",relativeTime:{future:{one:"+{0} h",other:"+{0} h"},past:{one:"-{0} h",other:"-{0} h"}}},minute:{displayName:"Minute",relativeTime:{future:{one:"+{0} min",other:"+{0} min"},past:{one:"-{0} min",other:"-{0} min"}}},second:{displayName:"Second",relative:{0:"now"},relativeTime:{future:{one:"+{0} s",other:"+{0} s"},past:{one:"-{0} s",other:"-{0} s"}}}}},{locale:"mgo-CM",parentLocale:"mgo"}];
},{}]},{},[1])(1)
});