sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DCTM.controller.Login", {
		onLogin: function(Controller) {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("MenuTiles");
		}
	});
});