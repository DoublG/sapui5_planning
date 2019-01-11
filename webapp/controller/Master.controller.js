sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	/**
		* @class be.planning.view.Master
		* @extends sap.ui.core.mvc.Controller
		*/
	return Controller.extend("be.planning.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf be.planning.view.Master
		 */
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();
		},

		/**
		 * handle AppointmentSelect
		 * @instance
		 * @memberOf be.planning.view.Master
		 */
		handleAppointmentSelect: function(oEvent){
			var oAppointment = oEvent.getParameter("appointment");
			var iWDOId = oAppointment.data("WDOId");
			var oNextUIState = this.getOwnerComponent().getHelper().getNextUIState(1);

			this.oOwnerComponent.getRouter().navTo("Detail", {
				"id": iWDOId,
				"layout": oNextUIState.layout
			});
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
