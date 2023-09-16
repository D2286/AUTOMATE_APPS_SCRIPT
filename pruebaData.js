
function historyDate() {
  var cedula = ss.getRange("C8").getValue()
  var hojaAct = SpreadsheetApp.getActiveSpreadsheet();
  const register = hojaAct.getSheetByName("Register");
  const destino = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1LgEd5TbjbOKohSM0Gk0FyGtLq2iHppZL1eW_Rha2XH0/edit#gid=0");
  const hoja_fz = destino.getSheetByName("PROCESOS 2023");
  var registroUno = register.getRange("G15:M15");
  var registroDos = register.getRange("G16:M16");
  var result = hoja_fz.getRange("C:C").getValues().flat();
  const totale = result.includes(cedula);
  
  if (totale) {
    idx = result.indexOf(cedula);
    var historyDataUno = hoja_fz.getRange(idx + 1, 9, 1, 1).getValues()
    
    .toString().split("&")
    .filter(elemento => elemento !== "") 
  
    var listado = formatRange(historyDataUno[0]);

    Logger.log(historyDataUno.length)

    registroUno.setValues([listado]);
  
    register.getRange("G12:L13").setBackground("#EFEF10").setValue("CC " + cedula + " " +historyDataUno.toString().split(",")[2]);//
    //Logger.log(historyDataUno.length)
    
    if (historyDataUno.length > 1) {

      historyDataUno.toString().split("&")
      var listadoDos = formatRange(historyDataUno[1])

      Logger.log(listadoDos+"segundo")
      
      registroDos.setValues([listadoDos]);
     
    }
  } else {
    register.getRange("G12:L13").setBackground("#48DA37").setValue("NO EXISTE");
  }
}

function formatRange(rangeStr) {
  var rangeList = rangeStr.toString().split(",")
  return [rangeList[8], rangeList[0], rangeList[4], rangeList[5], rangeList[6], rangeList[7], rangeList[3]];
}


















