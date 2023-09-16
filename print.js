const urlFz04 = "https://docs.google.com/spreadsheets/d/1LocJSy-X73hiq-LCEVRcALoFavPo_yDM4uQ1O3d8UyI/edit#gid=873719128"

const urlFz06 = "https://docs.google.com/spreadsheets/d/1jQB1i-GOnV9fycA4jCKg0K9kh5rx_hqCcci32SJmVAM/edit#gid=873719128"

var ss = SpreadsheetApp.getActiveSpreadsheet();
var sheet = ss.getActiveSheet();

const inclusion = "FZ04"

const devolucion = "FZ06"

const docs_dos = sheet.getRange("A1:C1").getValue()

var typeGestion = sheet.getRange("D1:E1").getValue().toString()

const sy = SpreadsheetApp.getActiveSpreadsheet();
const sheety = sy.getActiveSheet();



function imprintTipoBenef(url,hoja){

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  const destino = SpreadsheetApp.openByUrl(url);
  const hojaDiario = destino.getSheetByName(hoja);

  var total = sheet.getRange("F5:F9").getValues().flat();

  
  var mapBenefeciary = {
    'HIJOS': 'Y15',
    'CONYUGE': 'Y16',
    'PADRES': 'Y17',
    'HERMANOS': 'Y18',
    'HIJASTROS': 'Y19'
  };

  for (var i = 0; i < total.length; i++) {
    var r = total[i];

    if (mapBenefeciary.hasOwnProperty(r)) {
      hojaDiario.getRange(mapBenefeciary[r]).setValue("X");
    }
  }

}

function fechaCenterInclusion(){

    var destino = SpreadsheetApp.openByUrl(urlFz04);
    var hoja_fz = destino.getSheetByName("FZ04");

    var lastName = sheet.getRange("D5").getValue();
    var fechRecep = sheet.getRange("B11").getValue();

    var cero = fechRecep.getMinutes() < 10 ? fechRecep.getMinutes() + "0" : fechRecep.getMinutes();
    var timeHour = (fechRecep.getHours() + 1) + ":" + cero;

    fechRecep = fechRecep.getDate() + "/" + (fechRecep.getMonth() + 1) + "/" + fechRecep.getFullYear();

    
    var valuesToSet = {
      "D16": lastName,
      "D18:H18": fechRecep,
      "D19:H19": timeHour
    };

    // Establecer los valores en hoja_fz utilizando un bucle
    for (var rangeAddress in valuesToSet) {
      hoja_fz.getRange(rangeAddress).setValue(valuesToSet[rangeAddress]);
    }

    imprintTipoBenef(urlFz04, "FZ04");

}

function fechaCenterDevolucion() {
  var destino = SpreadsheetApp.openByUrl(urlFz06);
  var hoja_fz = destino.getSheetByName("FZ06");

  var nameCaja = sheet.getRange("C5").getValue();
  var tipo = sheet.getRange("E8").getValue();

  var resultParcial = tipo === "PARCIAL" ? "L15" : "L13";
  
  var fechatotal = sheet.getRange("B11").getValue();
  
  var rangesToUpdate = {
    "C15:G15": nameCaja,
    "C18:G18": fechatotal,
  };

  // Establecer los valores en hoja_fz utilizando un bucle
  for (var range in rangesToUpdate) {
    hoja_fz.getRange(range).setValue(rangesToUpdate[range]);
  }

  hoja_fz.getRange(resultParcial).setValue("X");

  imprintTipoBenef(urlFz06, "FZ06");
}

// var destino = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1jQB1i-GOnV9fycA4jCKg0K9kh5rx_hqCcci32SJmVAM/edit#gid=873719128");

function dataBase(){

      function dataDevolucion(range, docs) {
          var ss = SpreadsheetApp.getActiveSpreadsheet();
          var sheet = ss.getActiveSheet();


          var includeDownload = "https://docs.google.com/spreadsheets/d/1jQB1i-GOnV9fycA4jCKg0K9kh5rx_hqCcci32SJmVAM/edit#gid=873719128"

          var total = sheet.getRange(range).getValues();
          const result = total.flat().filter(cell => cell != '');

          var destination = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1jQB1i-GOnV9fycA4jCKg0K9kh5rx_hqCcci32SJmVAM/edit#gid=873719128");
          var fzSheet = destination.getSheetByName("FZ06");
          var docType = sheet.getRange(docs).getValue();

          function print(beneficiaryRange, quantityRange) {
            var value = result.length > 0 ? "DOCUMETO PENDIENTE   " + result.join(" - ") : "";
            fzSheet.getRange(beneficiaryRange).setValue(value);
            var quantity = result.length > 0 ? " X " : "";
            fzSheet.getRange(quantityRange).setValue(quantity);
          }

          // Mapping of docType to destination cells
          var mapping = {
            'RC': { beneficiary: "O24:AA24", quantity: "M24:N24" },
            'CC': { beneficiary: "O26:AA26", quantity: "M26:N26" },
            'TI': { beneficiary: "O29:AA29", quantity: "M29:N29" },
            'ESCOLAR': { beneficiary: "O27:AA27", quantity: "M27:N27" }
          };

          if (mapping.hasOwnProperty(docType)) {
            var cells = mapping[docType];
            print(cells.beneficiary, cells.quantity);
          } else {
            Logger.log('No recognized document type.');
          }

          sheet.getRange("C10:D10").setBackground("#E9967A").setValue("DOWNLOAD RETURN");
          sheet.getRange("E10").setValue(includeDownload);
        }


    function data(range, docs) {

        var ss = SpreadsheetApp.getActiveSpreadsheet();
        var sheet = ss.getActiveSheet();
        
        var total = sheet.getRange(range).getValues();
        const result = total.flat().filter(cell => cell != '');

        var dest = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1LocJSy-X73hiq-LCEVRcALoFavPo_yDM4uQ1O3d8UyI/edit#gid=873719128");
        var fzSheet = dest.getSheetByName("FZ04");
        
        var docsOne = sheet.getRange(docs).getValue();

        var locationsOfPrint = {
          'RC': { valueRange: "O24:AA24", countRange: "M24:N24" },
          'CC': { valueRange: "O26:AA26", countRange: "M26:N26" },
          'TI': { valueRange: "O29:AA29", countRange: "M29:N29" },
     'ESCOLAR': { valueRange: "O27:AA27", countRange: "M27:N27" },
        };

        if (locationsOfPrint[docsOne]) {
          var location = locationsOfPrint[docsOne];
          printData(location.valueRange, location.countRange);
        } else {
          Logger.log('No recognized document type.');
        }

        function printData(valueRange, countRange) {
          fzSheet.getRange(valueRange).setValue(result.join(" - ")); // Beneficiary value
          var count = result.length;
          fzSheet.getRange(countRange).setValue(count);
        }

        sheet.getRange("C10:D10").setBackground("#E9967A").setValue("DOWNLOAD RECEIPT");
        sheet.getRange("E10").setValue('https://docs.google.com/spreadsheets/d/1LocJSy-X73hiq-LCEVRcALoFavPo_yDM4uQ1O3d8UyI/export?format=pdf');
      }



      function declData() {
          var dest = SpreadsheetApp.openByUrl(urlFz04);
          var fzSheet = dest.getSheetByName("FZ04");

          var declaration = sheet.getRange("A11").getValue();
          //var total1 = sheet.getRange("D5").getValue();
          
          if (declaration === "NO") {
            fzSheet.getRange("M30:N30").setValue("");
          } else {
            fzSheet.getRange("M30:N30").setValue("1");
          }

          var date = sheet.getRange("B11").getValue();
          var hours = (date.getHours() + 1) + ":" + date.getMinutes();
          var formattedDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
          
          fzSheet.getRange("A42:H42").setValue("DATE: " + formattedDate + "     " + hours);
        }


      function vData(url, sheetName) {
        
          var dest = SpreadsheetApp.openByUrl(url);
          var fzSheet = dest.getSheetByName(sheetName);

          var mapping = {
            "G4:P4": "A5",
            "I6:P6": "B5",
            "U8:AA8": "C5",
            "G7:P7": "D5",
            "G8:P8": "E5",
            "V6:AA6": "C8",
            "U7:AA7": "D8:E8"
          };

          for (var range in mapping) {
            var cellValue = sheet.getRange(mapping[range]).getValue();
            fzSheet.getRange(range).setValue(cellValue);
          }
      }

       var columnasOrigen = ["A14:A20", "B14:B20", "C14:C20", "D14:D20"];
       var columnasDestino = ["A13", "B13", "C13", "D13"];

      switch (docs_dos) {
        case 'FORMATO PARA INCLUSION':
  
          vData(urlFz04,inclusion)      
          for (var i = 0; i < columnasOrigen.length; i++) {
            var rangoDatos = columnasOrigen[i];
            var rangoDoc = columnasDestino[i];

          data(rangoDatos, rangoDoc);
          }

          fechaCenterInclusion()
          declData()
          processRow()
          
          break;
        case 'FORMATO PARA DEVOLUCION':
          
          vData(urlFz06,devolucion)

          for (var i = 0; i < columnasOrigen.length; i++) {
            var rangoDatos = columnasOrigen[i];
            var rangoDoc = columnasDestino[i];
          
          dataDevolucion(rangoDatos, rangoDoc)

          }
          fechaCenterDevolucion()
          processRow()
          
          
          break; 
           case 'ASESORIA':
          
          processRow()
          
          break;
        default:
          Logger.log('No tomé ninguno ');
      }



}
  
function finalPrint() {

  var attachment = findRecentAttachment()

  Logger.log("soy un  "+typeof(attachment))

  cajeFunction()


  if (typeGestion === "SAC" && attachment.length > 10) {

    dataBase();

    
    var validarSac = typeGestion === "SAC" ? "PROCESO SAC" : "DESCARGAR ARCHIVO";
    sheet.getRange("C10:D10").setBackground("#E9967A").setValue(validarSac);
    sheet.getRange("C21:E21").setBackground("#F4DA0A").setValue("CARPETA GUARDADA EN");
    sheet.getRange("E10").setBackground("#E9967A").setValue("  ");

    
  } else if (typeGestion === "SAC" && findRecentAttachment() === "No hay") {

    sheet.getRange("C21:E21").setBackground("#F4DA0A").setValue("CARPETA PARA GUARDAR FZ04");
    sheet.getRange("A21").setBackground("#F4DA0A").setValue("https://drive.google.com/drive/folders/1aNSyr36x7mUCy60UDkGvByaOm4zEhdp5");
    Browser.msgBox('No existe un archivo reciente.');
    
  } else if (typeGestion === "TRABAJADOR") {
   
    dataBase();
    
    //Browser.msgBox('PROCESO TRABAJADOR REALIZADO');
  }
}




