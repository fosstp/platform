(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).cy = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"cy",pluralRuleFunction:function(e,n){return n?0==e||7==e||8==e||9==e?"zero":1==e?"one":2==e?"two":3==e||4==e?"few":5==e||6==e?"many":"other":0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},fields:{year:{displayName:"Blwyddyn",relative:{0:"eleni",1:"blwyddyn nesaf","-1":"llynedd"},relativeTime:{future:{zero:"Ymhen {0} mlynedd",one:"Ymhen blwyddyn",two:"Ymhen {0} flynedd",few:"Ymhen {0} blynedd",many:"Ymhen {0} blynedd",other:"Ymhen {0} mlynedd"},past:{zero:"{0} o flynyddoedd yn ôl",one:"blwyddyn yn ôl",two:"{0} flynedd yn ôl",few:"{0} blynedd yn ôl",many:"{0} blynedd yn ôl",other:"{0} o flynyddoedd yn ôl"}}},month:{displayName:"Mis",relative:{0:"y mis hwn",1:"mis nesaf","-1":"mis diwethaf"},relativeTime:{future:{zero:"Ymhen {0} mis",one:"Ymhen mis",two:"Ymhen deufis",few:"Ymhen {0} mis",many:"Ymhen {0} mis",other:"Ymhen {0} mis"},past:{zero:"{0} mis yn ôl",one:"{0} mis yn ôl",two:"{0} fis yn ôl",few:"{0} mis yn ôl",many:"{0} mis yn ôl",other:"{0} mis yn ôl"}}},day:{displayName:"Dydd",relative:{0:"heddiw",1:"yfory",2:"drennydd","-1":"ddoe","-2":"echdoe"},relativeTime:{future:{zero:"Ymhen {0} diwrnod",one:"Ymhen diwrnod",two:"Ymhen deuddydd",few:"Ymhen tridiau",many:"Ymhen {0} diwrnod",other:"Ymhen {0} diwrnod"},past:{zero:"{0} diwrnod yn ôl",one:"{0} diwrnod yn ôl",two:"{0} ddiwrnod yn ôl",few:"{0} diwrnod yn ôl",many:"{0} diwrnod yn ôl",other:"{0} diwrnod yn ôl"}}},hour:{displayName:"Awr",relativeTime:{future:{zero:"Ymhen {0} awr",one:"Ymhen {0} awr",two:"Ymhen {0} awr",few:"Ymhen {0} awr",many:"Ymhen {0} awr",other:"Ymhen {0} awr"},past:{zero:"{0} awr yn ôl",one:"awr yn ôl",two:"{0} awr yn ôl",few:"{0} awr yn ôl",many:"{0} awr yn ôl",other:"{0} awr yn ôl"}}},minute:{displayName:"Munud",relativeTime:{future:{zero:"Ymhen {0} munud",one:"Ymhen munud",two:"Ymhen {0} funud",few:"Ymhen {0} munud",many:"Ymhen {0} munud",other:"Ymhen {0} munud"},past:{zero:"{0} munud yn ôl",one:"{0} munud yn ôl",two:"{0} funud yn ôl",few:"{0} munud yn ôl",many:"{0} munud yn ôl",other:"{0} munud yn ôl"}}},second:{displayName:"Eiliad",relative:{0:"nawr"},relativeTime:{future:{zero:"Ymhen {0} eiliad",one:"Ymhen eiliad",two:"Ymhen {0} eiliad",few:"Ymhen {0} eiliad",many:"Ymhen {0} eiliad",other:"Ymhen {0} eiliad"},past:{zero:"{0} eiliad yn ôl",one:"eiliad yn ôl",two:"{0} eiliad yn ôl",few:"{0} eiliad yn ôl",many:"{0} eiliad yn ôl",other:"{0} eiliad yn ôl"}}}}},{locale:"cy-GB",parentLocale:"cy"}];
},{}]},{},[1])(1)
});