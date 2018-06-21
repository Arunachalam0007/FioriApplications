sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller, History) {
	"use strict";

	return Controller.extend("DCTM.controller.Task", {

		onTaskClick: function() {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Task");
		},
		onDataLoginClick: function() {
			var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
			loRouter.navTo("Login");
		},
		onPress: function(oEvent) {

			var oModelContext = oEvent.getParameter("listItem").getBindingContext('queue').getObject();
			var detailsFormControl = this.getView().byId("simpleform");
			detailsFormControl.removeAllContent();
			var size = oModelContext.deatils.length;
			for (var i = 0; i < size; i++) {
				var oEmailLabel = new sap.m.Label({
					text: oModelContext.deatils[i].label
				});
				var oEmailField = new sap.m.Input({
					width: "200px",
					editable: oModelContext.deatils[i].is_editable
				});
				oEmailField.setValue(oModelContext.deatils[i].value);
				detailsFormControl.addContent(oEmailLabel);
				detailsFormControl.addContent(oEmailField);
			}
		},
		onNavBack: function() {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true);
			}
		}
	});
});