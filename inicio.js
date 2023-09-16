function formatoFz04(){
  var ss = SpreadsheetApp.getActive().getActiveSheet();
  //var sheet = ss.getActiveSheet();

  ss.getRange("A1:C1").setBackground("#F4DA0A").setValue("FORMATO PARA INCLUSION")

}

function formatoFz06(){
  var ss = SpreadsheetApp.getActive().getActiveSheet();
  //var sheet = ss.getActiveSheet();

  ss.getRange("A1:C1").setBackground("#959590").setValue("FORMATO PARA DEVOLUCION")

}

function asesoria(){
  var ss = SpreadsheetApp.getActive().getActiveSheet();
  //var sheet = ss.getActiveSheet();

  ss.getRange("A1:C1").setBackground("#959590").setValue("ASESORIA")

}

function crear_pdf(){


  var excel = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1LocJSy-X73hiq-LCEVRcALoFavPo_yDM4uQ1O3d8UyI/edit#gid=873719128");
 
  var blob = excel.getBlob();

  DriveApp.createFile(blob);

 
}




