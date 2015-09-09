
sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/m/MessageToast",  
            ], function (Controller, MessageToast) {
               "use strict";
               return Controller.extend("insurance.links.views.LinksScreen", {
                
                 openLink1: function(){
                   alert("123");
                 },
                 openLink2: function(){},
                 openLink3: function(){},
                 openLink4: function(){},
                 openLink5: function(){},
                 openLink6: function(){},
                 openLink7: function(){}
              });
            });