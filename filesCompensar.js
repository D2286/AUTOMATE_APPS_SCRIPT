
function carpetaCompensar(){  

var file = DriveApp.getFolderById("1FJHpUXOc93fXKxqz8e9XoKBZDRYPADUJ");


  function TestRecursive()
{
   var folder = DriveApp.getFolderById("1FJHpUXOc93fXKxqz8e9XoKBZDRYPADUJ");
   
   
  GetFilesRecursive(folder);

  var resultFinal = GetFilesRecursive(folder);

  return resultFinal;
}


function GetFilesRecursive(folder)


{  var ids = []

   var cellsName = []


  //var celula = 

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  

  var a = sheet.getRange("C8").getValues().toString()//"112188888"
   var folders = folder.getFolders();
   while(folders.hasNext())
   {
    var f = folders.next();
    GetFilesRecursive(f);


    var restulCell = f.getName().toString().split(" ")[1]

    var totale = f.getId()

    
    cellsName.push(restulCell)


    ids.push(totale)

    var position = cellsName.indexOf(a)// POSICION DE CARPETA


    var resultado = cellsName.filter(animal => animal == a)

    var creandoFile = resultado == a ? ids[position] : "CREAR CARPETA"

   } 

   if(resultado>=0){

    return creandoFile
    
   }

}

var resultadoFinal = TestRecursive()


Logger.log(resultadoFinal)

switch (resultadoFinal) {
        case 'CREAR CARPETA':

        var name = sheety.getRange("D5").getValue()

        var nameCell = cedula+" -- "+name

        var getIds = file.createFolder("CC " +nameCell)

        var path = getIds.getId();

        var ruta = "https://drive.google.com/drive/folders/"

        sheety.getRange("J19:M21").setBackground("#FCFC5B").setValue(ruta+ path)

        sheety.getRange("G19:I21").setBackground("#FCFC5B").setValue("CARPETA CREADA                           " + nameCell)
           
          Logger.log("voy a crear una carpeta")
   
          break;  
        
        default:

          var name = sheety.getRange("D5").getValue()

          var nameCell = cedula+" -- "+name

          var ruta = "https://drive.google.com/drive/folders/"

          sheety.getRange("J19:M21").setBackground("#FCFC5B").setValue(ruta+ resultadoFinal)

          sheety.getRange("G19:I21").setBackground("#FCFC5B").setValue("CARPETA YA EXISTE"+"                         "+ nameCell)

          Logger.log('Ya existo  ');
      }

}


