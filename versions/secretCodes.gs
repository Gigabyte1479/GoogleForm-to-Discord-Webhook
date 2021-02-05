//CODES
secretCodes = {
   "codeOne":{
      "code":"0001",
      "name":"Name for Code One"
   },
   "codeTwo":{
      "code":"0002",
      "name":"Name for Code Two"
   },
   "codeThree":{
      "code":"0003",
      "name":"Name for Code Three"
   }
}

//METADATA
metaData = {
  "webhookURL": "https://ptb.discord.com/api/webhooks/806271892741685280/hvbzWjeqI4nhX0HBkfR9jwwX1DtPlVB6Pxd1W58Wh7zUwV2vsYLPxZtzcfQm7tfhovH8",
  "webhookUsername": "WebHook Username",
  "embedTitle": "Embed Title",
  "content": "content", //I recomend doing discord tags here <@!179001735895842816>
  "fieldOne": "Field One Name",
  "fieldTwo": "Field Two Name",
  "fieldThree": "Field Three Name",
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
    var code = sh.getRange(lastRow, 5).getValue(); //Assuming the secret code is last on the form
    Logger.log(timeStamp+" | "+columTwo+" | "+columThree+" | "+columnFour+" | "+code)

    var correspondingName = "Invalid"
    if (code == secretCodes.codeOne.code) {
      correspondingName = secretCodes.codeOne.name
    } else if (code == secretCodes.codeTwo.code) {
      correspondingName = secretCode.codeTwo.name
    } else if (code == secretCodes.codeThree.code) {
      correspondingName = secretCode.codeThree.name
    } 

      if (correspondingName != "Invalid") {
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
                        "name": "DeCoded Username",
                        "value": correspondingName
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
      } else {
          Logger.log("Wrong Code")
      }
};
