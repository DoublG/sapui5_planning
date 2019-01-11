sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	/**
		* @class be.planning.view.Detail
		* @extends sap.ui.core.mvc.Controller
		*/
	return Controller.extend("be.planning.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf be.planning.view.Detail
		 * @instance
		 */
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();

			this.oRouter = this.oOwnerComponent.getRouter();
			this.oModel = this.oOwnerComponent.getModel();

			this.oUIModel = this.oOwnerComponent.getUIModel();
			this.oDefaultModel = this.oOwnerComponent.getDefaultModel();

			this.oRouter.getRoute("Detail").attachMatched(this._onRouteMatched, this);

			this.oView = this.getView();
		},

		/**
		* @memberOf be.planning.view.Detail
		* @instance
		*/
		handleFullScreen: function () {
			var sNextLayout = this.oUIModel.getProperty("/actionButtonsInfo/midColumn/fullScreen"),
			    iWDOId = this.oView.getBindingContext().getProperty('WDOId');

			this.oRouter.navTo("Detail", {layout: sNextLayout, id: iWDOId });
		},

		/**
		* @memberOf be.planning.view.Detail
		* @instance
		*/
		handleExitFullScreen: function () {
			var sNextLayout = this.oUIModel.getProperty("/actionButtonsInfo/midColumn/exitFullScreen"),
			    iWDOId = this.oView.getBindingContext().getProperty('WDOId');

			this.oRouter.navTo("Detail", {layout: sNextLayout, id: iWDOId});
		},

		/**
		* @memberOf be.planning.view.Detail
		* @instance
		*/
		handleClose: function () {
			var sNextLayout = this.oUIModel.getProperty("/actionButtonsInfo/midColumn/closeColumn"),
			    iWDOId = this.oView.getBindingContext().getProperty('WDOId');

			this.oRouter.navTo("Master", {layout: sNextLayout, id: iWDOId});
		},

		/**
		* @memberOf be.planning.view.Detail
		* @instance
		*/
		onExit: function () {
			this.oRouter.getRoute("Detail").detachPatternMatched(this._onRouteMatched, this);
		},

		/**
		* @memberOf be.planning.view.Detail
		* @instance
		*/
		_onRouteMatched : function (oEvent) {
			var oArgs = oEvent.getParameter("arguments");

			this.oView.bindElement({ path : "/WDO_Set(" + oArgs.id + ")"});
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf be.planning.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf be.planning.view.Master
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf be.planning.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});
