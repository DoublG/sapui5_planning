sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("be.planning.controller.App", {
		
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();
			this.oRouter = this.oOwnerComponent.getRouter();
			this.oRouter.attachRouteMatched(this.onRouteMatched, this);
			this.oRouter.attachBeforeRouteMatched(this.onBeforeRouteMatched, this);
			
			this.oUIModel = this.oOwnerComponent.getUIModel();
			this.oDefaultModel = this.oOwnerComponent.getDefaultModel();
		},
		
		onRouteMatched: function(oEvent){
			this._updateUIElements();	
		},
		
		onBeforeRouteMatched: function(oEvent) {
			var sLayout = oEvent.getParameters().arguments.layout,
				oNextUIState;

			// If there is no layout parameter, query for the default level 0 layout (normally OneColumn)
			if (!sLayout) {
				oNextUIState = this.oOwnerComponent.getHelper().getNextUIState(0);
				sLayout = oNextUIState.layout;
			}

			this.oUIModel.setProperty("/layout", sLayout);
		},
		
		// Update the close/fullscreen buttons visibility
		_updateUIElements: function () {
			var oModel = this.oOwnerComponent.getUIModel(),
				oUIState = this.oOwnerComponent.getHelper().getCurrentUIState();
				
			oModel.setData(oUIState);
		},
		
		onExit: function () {
			//this.oRouter.detachRouteMatched(this.onRouteMatched, this);
			this.oRouter.detachBeforeRouteMatched(this.onBeforeRouteMatched, this);
		}
		
	});
});