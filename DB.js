function processRow() {


    var ot = gestionFile()

    var idFile = "https://drive.google.com/file/d/" + ot;

    var rsss = ot == "ASESORIA" ? "ASESORIA" : idFile 
  
    const destino = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1LgEd5TbjbOKohSM0Gk0FyGtLq2iHppZL1eW_Rha2XH0/edit#gid=0");

    const hojaDiario = destino.getSheetByName("AFIL A DIARIO 2023");

    const hoja_fz = destino.getSheetByName("PROCESOS 2023");

    var varEmpty = " "

    const cell = sheety.getRange("C8").getValue()
    const name = sheety.getRange("D5").getValue()
    const state = sheety.getRange("E5").getValue()
    const caje = sheety.getRange("C5").getValue()
    const empPrincipal = sheety.getRange("A5").getValue()
    const empUser = sheety.getRange("B5").getValue()
    var gestionResult = sheety.getRange("A1:C1").getValue()

    const gestion = gestionResult == "ASESORIA" ? "ASESORIA" : gestionResult.toString().split(" ")[2]
    //const gestion = sheety.getRange("A1:C1").getValue().toString().split(" ")[2]
    var fechRecep = sheety.getRange("b11").getValue()
    fechRecep = fechRecep.getDate()+1 + "/" + (fechRecep.getMonth()+1) + "/" +  fechRecep.getFullYear()

    const result = hoja_fz.getRange("C:C").getValues().flat()
    const resulFecha = hojaDiario.getRange("C:C").getValues().flat()

    function countCaje() {

        var idxFecha = resulFecha.indexOf(fech);
        var rangersstPositionColsub = hojaDiario.getRange(idxFecha + 1, 4, 1, 1);
        var rangersstPositionCompensar = hojaDiario.getRange(idxFecha + 1, 5, 1, 1);
        var rangersst = hojaDiario.getRange(idxFecha + 1, 4, 1, 3);
        var rangersstotal = hojaDiario.getRange(idxFecha + 1, 7, 1, 1);

        var colValue = caje === "COLSUBSIDIO" ? rangersstPositionColsub : rangersstPositionCompensar;

        colValue.setValue(colValue.getValue() + 1);

        var rangersstValues = rangersst.getValues()[0];
        var resulty = rangersstValues.reduce((a, b) => a + b, 0);

        //Logger.log(rangersstValues)

        rangersstotal.setValue(resulty);
    }
 

         ////------------PRIMERA ENTREGA-----------------------  
        var range = hoja_fz.getRange(hoja_fz.getLastRow()+1,1,1,hoja_fz.getLastColumn())

        const f = new Date()
        const fech =  f.getDate() + "/" + (f.getMonth() +1) + "/" +  f.getFullYear()
        var hours = f.getHours()+":"+ f.getMinutes()
        const flat = [cell,name,rsss,caje,empPrincipal,empUser,gestion,fechRecep]
        var gers = ["&"+ fech + "-" + hours +","+ flat]
        var primeralista = [[fechRecep,fech, cell.toString(),name,empPrincipal,empUser,varEmpty,caje,gers,state,gestion]]

      
      var idxCell = result.indexOf(cell);

      const totale = result.includes(cell)

    if(totale){

      var setValueFlat = hoja_fz.getRange(idxCell + 1,9,1,1)

      var datafindPositionCell = hoja_fz.getRange(idxCell+ 1,1,1,hoja_fz.getLastColumn())
      .getValues()
      .toString()
      .split("&")[1]

        var flatData = []

        flatData.push(flat)

      setValueFlat.setValue(datafindPositionCell +"&"+ fech + "-" + hours +","+flat)

      setValueFlat = hoja_fz.getRange(idxCell + 1,9,1,1).getValues().toString().split("&").length

      
      Logger.log(setValueFlat)

      countCaje()


   }else{ 
    
    range.setValues(primeralista)
    
    countCaje()

    

   }

    
  
}