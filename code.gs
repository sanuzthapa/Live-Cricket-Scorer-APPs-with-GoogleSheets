function doGet(e) {
  var template = HtmlService.createTemplateFromFile("Index");
  var htmlOutput = template.evaluate()
    .setTitle('Live Google Sheets Data')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return htmlOutput;
}

function getSheetData()  { 
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName('Sheet1'); 
  var dataRange = sheet.getDataRange();
  return dataRange.getValues();  
}

// This function sets up a trigger to run 'updateData' when changes occur in the spreadsheet.
function createOnChangeTrigger() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  ScriptApp.newTrigger('updateData')
    .forSpreadsheet(spreadsheet)
    .onChange()
    .create();
}

var insertCount = 0;

function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Insert Value')
    .addItem('1', 'insertValue1')
    .addItem('2', 'insertValue2')
    .addItem('3', 'insertValue3')
    .addItem('4', 'insertValue4')
    .addItem('6', 'insertValue6')
    .addItem('w', 'insertValueW')
    .addItem('nb', 'insertValueNB')
    .addItem('lb', 'insertValueLB')
    .addItem('wd', 'insertValueWD')
    .addToUi();
}

function insertValue1() {
  insertValue(1);
}

function insertValue2() {
  insertValue(2);
}

function insertValue3() {
  insertValue(3);
}

function insertValue4() {
  insertValue(4);
}

function insertValue6() {
  insertValue(6);
}

function insertValueW() {
  insertValue('w');
}

function insertValueNB() {
  insertValue('nb');
}

function insertValueLB() {
  insertValue('lb');
}

function insertValueWD() {
  insertValue('wd');
}

function insertValue(value) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var currentCell = sheet.getActiveCell();

  currentCell.setValue(value);

  if (currentCell.getRow() === 9 && currentCell.getColumn() >= 2 && currentCell.getColumn() <= 10) {
    var b2Value = sheet.getRange("B2").getValue();
    sheet.getRange("B2").setValue(b2Value + value);
  }

  currentCell.offset(0, 1).activate();
  insertCount++;

  if (insertCount >= 6) {
    // If the count reaches 6, move to the next row and reset the count.
    currentCell = currentCell.offset(1, -insertCount);
    currentCell.activate();
    insertCount = 0;
  }
}


function clearValues() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rangeToClear = sheet.getRange("B9:H9"); // Modify the range as needed

  rangeToClear.clearContent();
  
  // Set the current active cell to B9
  var b9 = sheet.getRange("B9");
  sheet.setActiveSelection(b9);
}
