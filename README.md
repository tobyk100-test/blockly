# Blockly

## REST Api

Launch Blockly with a request to the root url and append the app name (maze, turtle, karel, etc.) to the url. If you would like usage information, include a callback url.

### GET `<path_to_blockly>`/`<app>`.html

| Parameter | Description |
|--------------|-------------|
| callback_url | Optional. A url to which Blockly will send data about a user's progress. |
| level | Optional. The level to be displayed. Defaults to 1. |
| skin | Optional. The game skin to display. Each app has a default skin. |


### POST `callback_url`

| Parameter | Description |
|--------------|-------------|
| success | Required. True if the user succeeded, false otherwise. |
| time | Optional. The time the user spent completing the level. |
| program | Optional. A string representing the user's solution. |
| attempt |  |
