blockly
=======

REST API
 * Notes: We want to be able to post the details of a users interaction with blockly apps. For example we want to post everytime they submit an answer. 
 * After we've posted some data we want to be able to GET some data. E.g. we want to get all the submissions for a given user, all the submissions for a given level, etc.
 
| Resource Url | Description |
|--------------|-------------|
| GET <level>/submissions | Return all the submissions for a given level |
