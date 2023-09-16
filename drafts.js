/* function cajeFunction(){
  
} */


function cajeFunction(){

  var destinatario = "lorenagb840@gmail.com";
  var asunto = "CC"+" "+ss.getRange("C8").getValue()+" "+ ss.getRange("D5").getValue();
  var cuerpo = "Buen día \n \n \nCordial saludo.Adjunto documentación";

  Logger.log(cuerpo)

  // Crea un borrador del correo
  
  const typeGestionf = ss.getRange("A1:C1").getValue()

  const box = ss.getRange("C5").getValue()

  const typeReturn = ss.getRange("E8").getValue()

   var resultCaje = "";
  
    if (typeGestionf == "FORMATO PARA INCLUSION" && box == "COLSUBSIDIO") {

        GmailApp.createDraft(destinatario, asunto, cuerpo);

        Logger.log("borrador")

      } else if (typeGestionf == "FORMATO PARA INCLUSION" && box == "COMPENSAR") {
    
       Logger.log("Entró a compensar")

       Browser.msgBox("Soy gestión compensar");

      } else if (typeGestionf == "FORMATO PARA DEVOLUCION" && typeReturn == "PARCIAL") {
    
       GmailApp.createDraft(destinatario, asunto, cuerpo);
        
    
  } else {

    
    
  }

  

}