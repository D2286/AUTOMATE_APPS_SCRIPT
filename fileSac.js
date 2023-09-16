function findRecentAttachment() {
  var folderId = "1aNSyr36x7mUCy60UDkGvByaOm4zEhdp5"; 
  var targetNumber = sheet.getRange("C8").getValue().toString(); // Cambia esto al número que deseas buscar en el archivo
  var currentTime = new Date();
  var oneHourAgo = new Date(currentTime - 60 * 60 * 1000); // Una hora atrás

  var folder = DriveApp.getFolderById(folderId);
  var files = folder.getFiles();


  while (files.hasNext()) {
    var file = files.next();
    var fileDate = file.getDateCreated();
    var fileTitle = file.getName();

    // Verificar si el archivo cumple con las condiciones
    var fileTitleParts = fileTitle.split(" ");
    if (fileTitleParts.length > 1 && fileTitleParts[1] === targetNumber && fileDate > oneHourAgo) {
      Logger.log('ID del archivo encontrado: ' + typeof(file.getId));

      
     
      return file.getId();
    }
  }

  Logger.log('No se encontró ningún archivo que cumpla las condiciones.');
  //Browser.msgBox('No se ha seleccionado un tipo válido.');

  return "No hay";
}




