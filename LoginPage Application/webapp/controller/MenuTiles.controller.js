sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/m/MessageToast'
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("DCTM.controller.MenuTiles", {

		task: function(evt) {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Task");
		}
	});

});