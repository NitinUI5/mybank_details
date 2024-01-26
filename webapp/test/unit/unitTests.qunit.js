/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comnm100/mybank_details/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
