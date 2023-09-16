function extraerDatosCorreo() {
  var threadId = "FMfcgzGtwzlvsNmJRWGvCbkcQgwFKlkB"; // Reemplaza con el ID del hilo del correo que deseas analizar
  var thread = GmailApp.getThreadById(threadId);

  if (!thread) {
    Logger.log("No se encontró el hilo de correo especificado.");
    return;
  }

  var mensajes = thread.getMessages();
  var datosExtraidos = [];

  for (var i = 0; i < mensajes.length; i++) {
    var mensaje = mensajes[i];
    var cuerpo = mensaje.getPlainBody(); // Obtén el cuerpo del mensaje en texto plano

    // Aquí puedes realizar el análisis del cuerpo del mensaje para extraer los datos que necesitas.
    // Por ejemplo, buscar palabras clave o patrones específicos.

    // Ejemplo: Extraer el asunto y el remitente
    var asunto = mensaje.getSubject();
    var remitente = mensaje.getFrom();

    // Agrega los datos extraídos a la matriz de resultados
    datosExtraidos.push({ "Asunto": asunto, "Remitente": remitente, "Cuerpo": cuerpo });
  }

  // Ahora tienes los datos extraídos en la matriz "datosExtraidos".
  // Puedes hacer lo que desees con esta información, como registrarla en una hoja de cálculo.

  // Ejemplo: Registrar los datos en una hoja de cálculo
  var hoja = SpreadsheetApp.openById("ID_DE_TU_HOJA_DE_CALCULO");
  var hojaActiva = hoja.getSheetByName("Nombre_de_la_Hoja");
  hojaActiva.getRange(1, 1, datosExtraidos.length, 3).setValues(datosExtraidos);
}





/* function obtenerCorreosEnEtiqueta() {
  // Especifica el nombre de la etiqueta que deseas consultar
  var nombreEtiqueta = 'tareas';

  // Obtiene la etiqueta por nombre
  var etiqueta = GmailApp.getUserLabelByName(nombreEtiqueta);

  // Obtiene todos los correos electrónicos en la etiqueta
  var correos = etiqueta.getThreads().flatMap(function (hilo) {
    return hilo.getMessages();
  });

  // Recorre todos los correos electrónicos y muestra sus asuntos en el registro de ejecución
  for (var i = 0; i < correos.length; i++) {
    var asunto = correos[i].getSubject();
    Logger.log('Asunto del correo: ' + asunto);
  }
} */

    

/* function guardarCorreoEnDrive() {
  // URL del correo electrónico en Gmail
  var emailUrl = "FMfcgzGtwzlvsNmJRWGvCbkcQgwFKlkB";
  
  // ID de la carpeta en Google Drive donde se guardará el PDF
  var carpetaId = "1FJHpUXOc93fXKxqz8e9XoKBZDRYPADUJ";

  // Obtener el correo electrónico desde la URL (requiere autorización)
  var email = GmailApp.getMessageById(emailUrl);
  
  // Verificar si se encontró el correo
  if (email) {
    // Convertir el correo en formato PDF
    var pdfBlob = email.getAttachments()[0].copyBlob();
    
    // Guardar el PDF en Google Drive
    var carpeta = DriveApp.getFolderById(carpetaId);
    carpeta.createFile(pdfBlob);
    
    Logger.log("Correo guardado en Google Drive exitosamente.");
  } else {
    Logger.log("No se pudo encontrar el correo electrónico.");
  }
} */


