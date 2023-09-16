function getFormSheet() {
  var mover = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = mover.getActiveSheet();
  var cell = sheet.getRange("C8").getValue()
  var name = sheet.getRange("D5").getValue()

  var cellName = "CC " + cell + " "+name

  return cellName
}

function getTypeGestRange() {

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var range = sheet.getRange("A1:C1").getValue();

                            //CARPETA                           //FORMATO
  var include =  ["1aNSyr36x7mUCy60UDkGvByaOm4zEhdp5","1LocJSy-X73hiq-LCEVRcALoFavPo_yDM4uQ1O3d8UyI"]

  var returning = ["1czbLeKRiEv5Jnc7BxZumFuk1EXS7MYdE","1jQB1i-GOnV9fycA4jCKg0K9kh5rx_hqCcci32SJmVAM"]

  var filesId = {
                                        
    "FORMATO PARA INCLUSION": include,
    "FORMATO PARA DEVOLUCION": returning, 
  };

  var folderSelected = filesId[range];
  
  
  return folderSelected;
}


function createPdfFile() {

  var resultGestion = getTypeGestRange()

  var numberCell = getFormSheet();

  
  //var formatFile = SpreadsheetApp.openById(resultGestion[1]);

  
  // Convierte la hoja de cálculo a PDF
  var pdf = DriveApp.getFileById(resultGestion[1]).getAs('application/pdf');
  
  // Guarda el PDF en la carpeta de destino
  var destinationFolder = DriveApp.getFolderById(resultGestion[0]);
  var pdfFile = destinationFolder.createFile(pdf);
  
  // Cambia el nombre del PDF
  var pdfFileName = numberCell + '.pdf';
  pdfFile.setName(pdfFileName);
  
  // Obtén el ID del PDF
  var pdfId = pdfFile.getId();
  
  // Retorna el ID del PDF
  return pdfId;
}
  
function getShowId() {
  // Llama a createPdfFile() para crear el PDF y obtener su ID
  var pdfId = createPdfFile();
  
  // Retorna el ID del PDF
  return pdfId.toString();
}

