(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.ReactIntlLocaleData || (g.ReactIntlLocaleData = {})).kl = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[{locale:"kl",pluralRuleFunction:function(a,e){return e?"other":1==a?"one":"other"},fields:{year:{displayName:"ukioq",relative:{0:"manna ukioq",1:"tulleq ukioq","-1":"kingulleq ukioq"},relativeTime:{future:{one:"om {0} ukioq",other:"om {0} ukioq"},past:{one:"for {0} ukioq siden",other:"for {0} ukioq siden"}}},month:{displayName:"qaammat",relative:{0:"manna qaammat",1:"tulleq qaammat","-1":"kingulleq qaammat"},relativeTime:{future:{one:"om {0} qaammat",other:"om {0} qaammat"},past:{one:"for {0} qaammat siden",other:"for {0} qaammat siden"}}},day:{displayName:"ulloq",relative:{0:"ullumi",1:"aqagu",2:"aqaguagu","-1":"ippassaq","-2":"ippassaani"},relativeTime:{future:{one:"om {0} ulloq unnuarlu",other:"om {0} ulloq unnuarlu"},past:{one:"for {0} ulloq unnuarlu siden",other:"for {0} ulloq unnuarlu siden"}}},hour:{displayName:"nalunaaquttap-akunnera",relativeTime:{future:{one:"om {0} nalunaaquttap-akunnera",other:"om {0} nalunaaquttap-akunnera"},past:{one:"for {0} nalunaaquttap-akunnera siden",other:"for {0} nalunaaquttap-akunnera siden"}}},minute:{displayName:"minutsi",relativeTime:{future:{one:"om {0} minutsi",other:"om {0} minutsi"},past:{one:"for {0} minutsi siden",other:"for {0} minutsi siden"}}},second:{displayName:"sekundi",relative:{0:"now"},relativeTime:{future:{one:"om {0} sekundi",other:"om {0} sekundi"},past:{one:"for {0} sekundi siden",other:"for {0} sekundi siden"}}}}},{locale:"kl-GL",parentLocale:"kl"}];
},{}]},{},[1])(1)
});