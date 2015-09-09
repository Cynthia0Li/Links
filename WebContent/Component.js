jQuery.sap.declare("insurance.links.Component");
jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
jQuery.sap.require("insurance.links.model.CacheModel");
jQuery.sap.require("insurance.links.util.Utils");

sap.ui.core.UIComponent.extend("insurance.links.Component", {
  metadata: {
    name: "insurance.links",
    version: "1.0",
    dependencies: {
      libs: [
        "sap.m", "sap.ui.layout"
      ],
      components: []
    },

    rootView: "insurance.links.views.Root",

    includes: [],
    config: {
      fullWidth: true,
      resourceBundle: "i18n/messageBundle.properties",
      serviceConfig: {
        name: "Northwind",
        serviceUrl: ""
      }
    },

    routing: {
      config: {

        viewType: "XML",
        viewPath: "insurance.links.views",
        targetAggregation: "pages",
        clearTarget: false
      },
      routes: [
        {

          pattern: "",
          name: "LinksScreen",
          view: "LinksScreen",
          // viewId: "ServiceRequestScreen",
          targetControl: "mainContent"
        }
      ]
    }
  },

  init: function() {
    sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
    this._oRouteMatchedHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter());
    this.getRouter().initialize();
    if (sap.ui.getCore().getConfiguration().getLanguage() === "zh-TW") {
      insurance.links.model.CacheModel.setModelTW();
    } else {
      insurance.links.model.CacheModel.setModelEN();
    }
    insurance.links.model.CacheModel.setUploadModel();

  },

  createContent: function() {
    var mConfig = this.getMetadata().getConfig();
    var oView = sap.ui.view({
      id: "app",
      viewName: "insurance.links.views.App",
      type: "XML",
      viewData: {
        component: this
      }
    });

    var rootPath = jQuery.sap.getModulePath("insurance.links");
    // set i18n model
    var i18nModel = new sap.ui.model.resource.ResourceModel({
      bundleUrl: rootPath + "/" + mConfig.resourceBundle
    });
    oView.setModel(i18nModel, "i18n");
    this.setModel(i18nModel, "i18n");
    console.log("i18nModel success");
    return oView;

  }

});