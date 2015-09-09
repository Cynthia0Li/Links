jQuery.sap.declare("insurance.links.model.CacheModel");
insurance.links.model.CacheModel = {

  setModelTW: function(){
    var rootPath = jQuery.sap.getModulePath("insurance.links");
    var typeModel = new sap.ui.model.json.JSONModel(rootPath + "/data/TypeTW.json");  
        sap.ui.getCore().setModel(typeModel, "typeModel"); 
        
  },


  setModelEN: function(){
    var rootPath = jQuery.sap.getModulePath("insurance.links");
    var typeModel = new sap.ui.model.json.JSONModel(rootPath + "/data/TypeEN.json");  
        sap.ui.getCore().setModel(typeModel, "typeModel");
  
  },
  
  setUploadModel:function(){
    var uploadModel = new sap.ui.model.json.JSONModel([]);
    sap.ui.getCore().setModel(uploadModel, "uploadModel");
  }

};