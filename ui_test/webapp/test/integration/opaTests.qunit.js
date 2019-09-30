/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ui_test/ui_test/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});