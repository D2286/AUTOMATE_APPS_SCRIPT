
function gestionFile() {

  var resultId = ""; // Initialize the variable to ensure it has a value

    var asesor = ss.getRange("A1:C1").getValue()

      if (typeGestion == "TRABAJADOR" && asesor == "ASESORIA") {

        resultId = "ASESORIA"

        Logger.log("Entre aqui")

        } else if (typeGestion == "TRABAJADOR") {
    
    resultId = getShowId()

  } else if (typeGestion == "SAC") {

    resultId = findRecentAttachment();
    
  } else {

    Logger.log("No agarre ninguno")
    
  }


  return resultId;
}



