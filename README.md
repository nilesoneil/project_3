# _Mr Roboger_

#### By _**Niles O'Neil**_

#### _A number to text translator_

[Link to hosted site](https://nilesoneil.github.io/project_3/)

## Technologies Used

* _jQuery_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_A webpage for inputting numbers and getting a string back_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _get into your file exploreer and go to the top of the directory_
* _open index.html in your browser_

## Tests

Describe: beepBoop()

Test: "It will create an array from 0 - the user's inputted number"
Code: beepBoop(7)
Expected Output: [0,1,2,3,4,5,6,7]

Test: "It will find all digits with 1 in them and replace it with "beep"
Code: beepBoop(7)
Expected Output: [0,"beep", 2, 3, 4, 5, 6, 7]

Test: "It will find all digits with 2 in them and replace it with 'boop'"
Code: beepBoop(2)
Expected Output: [0,1,"boop"]

Test: "It will find all digits with 3 in them and replace it with 'won't you be my neighbor?'"
Code: beepBoop(3)
Expected Output: [0,1,2,"won't you be my neighbor"]

Test: "All changes will work with heirachy"
Code: beepBoop(13)
Expected Output: [0,"beep","boop","won't you be my neighbor",4,5,6,7,8,9,"beep","beep","boop","won't you be my neighbor"]


## Known Bugs

* _None_

## License

_MIT_

Copyright (c) _2/18/2022_ _Niles O'Neil_


