/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"be/planning/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"be/planning/test/integration/pages/App",
	"be/planning/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "be.planning.view.",
		autoWait: true
	});
});