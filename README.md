# upvote_survey using Google Sheets and Apps Scripts

This is a Web App created with Google Apps Script that you run off a Google Sheet to create a survey where users can add Upvotes to posted items, or add new items to the poll/survey.  It will update the vote count with each submission. 

![sample](https://github.com/ryanrwatkins/upvote_survey/blob/main/sample_image.png)


After adding the files to your Apps Script, you then have to click on Deploy in order to run the Web App.

Note: If you embed the Web App into an iFrame it works, but will only update after the first submitted text or upvote. Since it uses Window.Open('', '_self') for browser security this can only be done once within an iframe.  If users are only expected to Upvote once, then this is not a big issue, but you can always run it outside of an iFrame and it will work fine with many Upvotes.

