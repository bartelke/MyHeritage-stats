sap.ui.define(
  ["sap/ui/core/mvc/Controller", "../model/formatter"],
  function (Controller, formatter) {
    "use strict";

    return Controller.extend("sap.ui.demo.basicTemplate.controller.App", {
      formatter: formatter,

      onInit: function () {
        this.callNamesRepetiton();
      },
      callNamesRepetiton: async function () {
        try {
          // call method
          const data = await window.electron.invoke("countNamesRepetition");

          console.log("Data from Electron:", data);

          const oModel = this.getView().getModel("namesRepModel");
          oModel.setData(data);
        } catch (error) {
          console.error("Error fetching data from Electron:", error);
        }
      },
    });
  }
);
