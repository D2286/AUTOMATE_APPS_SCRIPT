function cleanprueba() {
  var hojaAct = SpreadsheetApp.getActiveSpreadsheet();
  const register = hojaAct.getSheetByName("Register");
  

  var formatCleanRange = ["M23:AA37", "G4:P4", "C15:G15", "C18:G18", "D16", "D18:H18", "D19:H19", "Y15:Y19", "L13:L15",
  "G7:P7","G8:P8","I6:P6","U6:AA8"]

  const includeClean  = "https://docs.google.com/spreadsheets/d/1LocJSy-X73hiq-LCEVRcALoFavPo_yDM4uQ1O3d8UyI/edit#gid=873719128"

  const returnClean = "https://docs.google.com/spreadsheets/d/1jQB1i-GOnV9fycA4jCKg0K9kh5rx_hqCcci32SJmVAM/edit#gid=873719128"

  // Define the ranges to clear in Register sheet
  var rangesToClearInRegister = ["A5:E5", "A8:E8", "B11", "G12:M13", "G15:M18", "G19:M21", "D1:E1", "F5:F9","A13:E21"];

  // Set backgrounds and values
  register.getRange("G12:M13").setBackground("#959587").setValue("... TRABAJADOR ...");
  register.getRange("C10:D10").setBackground("#b7e1cd").setValue("GRABAR ...");
  register.getRange("A1:C1").setBackground("#b7e1cd").setValue("¿FORMATO? ");
  register.getRange("A21:B21").setBackground("#b7e1cd").setValue("CARPETA");
  register.getRange("C21:E21").setBackground("#b7e1cd").setValue("GUARDAR...");
  register.getRange("E10").setBackground("#b7e1cd").setValue("");

  // Clear specified ranges in Register sheet
  for (var i = 0; i < rangesToClearInRegister.length; i++) {
    register.getRange(rangesToClearInRegister[i]).clearContent();
  }

  function clearRanges(sheetUrl, sheetName, rangesToClear) {
    const fzSheet = SpreadsheetApp.openByUrl(sheetUrl).getSheetByName(sheetName);
    for (var i = 0; i < rangesToClear.length; i++) {
      fzSheet.getRange(rangesToClear[i]).clearContent();
    }
  }

  clearRanges(includeClean,"FZ04",formatCleanRange)
  clearRanges(returnClean,"FZ06",formatCleanRange)
}



