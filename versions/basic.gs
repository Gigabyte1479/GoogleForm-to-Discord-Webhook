//METADATA
metaData = {
  "webhookURL": "",
  "webhookUsername": "WebHook Username",
  "embedTitle": "Embed Title",
  "content": "content", //I recomend doing discord tags here <@!179001735895842816>
  "fieldOne": "Field One Name",
  "fieldTwo": "Field Two Name",
  "fieldThree": "Field Three Name",
  "fieldFour": "Field Four Name",
  "embedFooter": "Footer Text.",
  "profilePIC": "", //Insert Image URL
  "sideImage": "", //Insert Image URL
  "embedColor": 7504523 //Enter Decimal Color Code without ""
}

function onSubmit(e) {

    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Form Responses 1").activate();
    var sh = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sh.getLastRow(); 
    
    var timeStamp = sh.getRange(lastRow, 1).getValue();
    var columTwo = sh.getRange(lastRow, 2).getValue();
    var columThree = sh.getRange(lastRow, 3).getValue();
    var columnFour = sh.getRange(lastRow, 4).getValue();
    var columnFive = sh.getRange(lastRow, 5).getValue();
    Logger.log(timeStamp+" | "+columTwo+" | "+columThree+" | "+columnFour+" | "+columnFive)

    var options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "username": metaData.webhookUsername,
            "avatar_url": metaData.profilePIC,
            "content": metaData.content,
            "embeds": [{
                "title": metaData.embedTitle,
              "color": metaData.embedColor,
                "fields": [
                  {
                    "name": metaData.fieldOne,
                    "value": columTwo
                  },
                  {
                    "name": metaData.fieldTwo,
                    "value": columThree
                  },
                  {
                    "name": metaData.fieldThree,
                    "value": columnFour
                  },
                  {
                    "name": metaData.fieldFour,
                    "value": columnFive
                  }
                ],
                "thumbnail": {
                  "url": metaData.sideImage
                },
                "footer": {
                    "text": metaData.embedFooter
                }
            }]
        })
    };
    UrlFetchApp.fetch(metaData.webhookURL, options);
};
