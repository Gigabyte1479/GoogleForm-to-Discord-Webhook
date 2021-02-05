# GoogleForm-to-Discord-Webhook
This code will make any responses inside a Google Form and stylize it in a Discord Embed before sending it out in a webhook.

## Step 1: Setup Google Form
Go to https://drive.google.com and create a new Google Form. Once created go to the **Responses** tab and click the Google Sheets button to create a new Google Sheet.

## Step 2: Import Code
To import my the code into the Google Sheet start by going to **Tools -> Script Editor**. Delete any code already inside the editor and paste in **basic.gs** or **secretCodes.gs** from the version folder in the GIT. Save the code and make any edits to the metaData JSON field. Once saved, click on triggers on the left side. Create a new trigger. Configure as the picture below describes. <br>
<img src="https://i.gyazo.com/33910369ac394657ca89ed39f55262e5.png" style="width:300;" height="300"/><br>
Sign in with Google and click "Advanced" and then **Go to Project**. 

## Step 3: Link to Discord
Keep the Google Sheets Scripting Open and head over to discord. **Go to Server Settings -> Intgrations -> Webhooks -> New Webhook -> Copy Webhook URL**. Past the webhook into metaData.webHookURL. Once done you should be good to go! 

## Step 4 : Test
Send a test through the Google Form to make sure evrything is working as intended.

## Step 5: Extra Config
If you decided to use secret codes with the form to track who is sending what message through the embed simply assign codes to the secretCodes JSON and names to correspond with them.
