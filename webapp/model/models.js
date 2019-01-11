sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	/**
	 * @class be.planning.model.models
	 * @property {sap.ui.model.json.JSONModel} createDeviceModel
	 * @property {sap.ui.model.json.JSONModel} createDefaultModel
	 * @property {sap.ui.model.json.JSONModel} createUIModel
	 * @returns {Object} create device models
	 */
	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createDefaultModel: function (){
			var oModel = new JSONModel();
			oModel.setDefaultBindingMode("OneWay");
			oModel.setData({
				"StartDate": new Date("2018-12-27T06:00:00"),
				"FreeDays": [5, 6],
				"FreeHours": [0, 1, 2, 3, 4, 5, 16, 17, 19, 20, 21, 22, 23]
			});
			return oModel;
		},

		createUIModel: function(){
			var oModel = new JSONModel();
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});
