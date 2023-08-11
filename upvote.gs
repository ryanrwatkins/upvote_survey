function doGet(e) { 
  var template = HtmlService.createTemplateFromFile('index'); 

  var uses = [];
  var ss = SpreadsheetApp.openById('[INSERT GOOGLE SHEET ID]');
  var data = ss.getDataRange().getValues();
  for (i = 1; i <= data.length; i++){  
          uses.push(data[i]);
             }
  template.uses =  data;

// If you want to put it in an iFrame, then use this line.  
 // return template.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
  // If not for iFrame then use this line
 return template.evaluate().setSandboxMode(HtmlService.SandboxMode.NATIVE);
}


// Process the form
function processForm(use) {
  var resultToReturn;
  resultToReturn  = TextToSheet(use);
  return resultToReturn; // return the results
}


function TextToSheet(use) {
  var ss = SpreadsheetApp.openById('[INSERT GOOGLE SHEET ID]');
  ss.appendRow([use]);
}


function add_value_ss(i, upvotes) {
        var upvotes = upvotes;
        var ss = SpreadsheetApp.openById('[INSERT GOOGLE SHEET ID]');
        ss.getRange('B'+ i ).setValue(upvotes);
        var range = ss.getRange("A:B");
        range.sort({column: 2, ascending: false});      
      }
