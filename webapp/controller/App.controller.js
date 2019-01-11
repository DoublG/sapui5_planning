sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	/**
	 * @class be.planning.view.App
	 * @extends sap.ui.core.UIComponent
	 */
	return Controller.extend("be.planning.controller.App", {

		/**
		 * init
		 * @public
		 * @instance
		 * @memberOf be.planning.view.App
		 */
		onInit: function () {
			this.oOwnerComponent = this.getOwnerComponent();
			this.oRouter = this.oOwnerComponent.getRouter();
			this.oRouter.attachRouteMatched(this.onRouteMatched, this);
			this.oRouter.attachBeforeRouteMatched(this.onBeforeRouteMatched, this);

			this.oUIModel = this.oOwnerComponent.getUIModel();
			this.oDefaultModel = this.oOwnerComponent.getDefaultModel();
		},

		/**
		 * init
		 * @public
		 * @instance
		 * @memberOf be.planning.view.App
		 */
		onRouteMatched: function(oEvent){
			this._updateUIElements();
		},

		/**
		 * init
		 * @public
		 * @instance
		 * @memberOf be.planning.view.App
		 */
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

		/**
		 * Update the close/fullscreen buttons visibility
		 * @instance
		 * @memberOf be.planning.view.App
		 */
		_updateUIElements: function () {
			var oModel = this.oOwnerComponent.getUIModel(),
				oUIState = this.oOwnerComponent.getHelper().getCurrentUIState();

			oModel.setData(oUIState);
		},

		/**
		 * Update the close/fullscreen buttons visibility
		 * @instance
		 * @memberOf be.planning.view.App
		 */
		onExit: function () {
			//this.oRouter.detachRouteMatched(this.onRouteMatched, this);
			this.oRouter.detachBeforeRouteMatched(this.onBeforeRouteMatched, this);
		}

	});
});
