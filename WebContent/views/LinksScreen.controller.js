
sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",  
            ], function (Controller, MessageToast) {
               "use strict";
               return Controller.extend("insurance.links.views.LinksScreen", {
                
                 openLink1: function(){
                   window.open("http://www.baidu.com");
                 },
                 openLink2: function(){
                   window.open("http://www.baidu.com");
                 },
                 openLink3: function(){
                   window.open("http://www.baidu.com");
                 },
                 openLink4: function(){
                   window.open("http://www.nanshanlife.com.tw/");
                 },
                 openLink5: function(){
                   window.open("http://www.nanshancharity.org.tw/");
                 },
                 openLink6: function(){
                   window.open("https://www.nanshanlife.com.tw/AES3.0/index.tiles#XTOP");
                 },
                 openLink7: function(){
                   window.open("https://www.nanshanlife.com.tw/careerCenter/logout.do");
                 }
              });
            });