sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"be/planning/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/f/FlexibleColumnLayoutSemanticHelper"
], function (UIComponent, Device, models, JSONModel, FlexibleColumnLayoutSemanticHelper) {
	"use strict";

	/** @class be.planning.Component
			@extends sap.ui.core.UIComponent
	*/
	return UIComponent.extend("be.planning.Component", {
		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 * @instance
		 * @memberOf be.planning.Component
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			//set the default values
			this.oDefaultModel = models.createDefaultModel();
			this.setModel(this.oDefaultModel, "defaults");

			//set the ui model
			this.oUIModel = models.createUIModel();
			this.setModel(this.oUIModel, "ui");

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		},

		/**
		 * get layout helper
		 * @public
		 * @returns {sap.f.FlexibleColumnLayoutSemanticHelper}
		 * @instance
		 * @memberOf be.planning.Component
		 */
		getHelper: function () {
			var oFCL = this.getRootControl().byId('flexibleColumnLayout'),
			oSettings = {
				defaultTwoColumnLayoutType: sap.f.LayoutType.TwoColumnsMidExpanded
			};

			return FlexibleColumnLayoutSemanticHelper.getInstanceFor(oFCL, oSettings);
		},

		/**
		 * get default model
		 * @public
		 * @returns {sap.ui.model.json.JSONModel}
		 * @instance
		 * @memberOf be.planning.Component
		 */
		getDefaultModel: function(){
			return this.oDefaultModel;
		},

		/**
		 * get ui model
		 * @public
		 * @returns {sap.ui.model.json.JSONModel}
		 * @instance
		 * @memberOf be.planning.Component
		 */
		getUIModel: function(){
			return this.oUIModel;
		}

	});
});
