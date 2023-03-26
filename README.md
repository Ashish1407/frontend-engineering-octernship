# frontend-engineering-octernship Duplicate char remover project.

# 📝 Description

<h3> It is a ReactJS app that allows users to remove duplicate characters from a string.</h3>
<h4>It has two screens:</h4> 
 <li>Screen 1: The form contains a text field where users can type in their string and a submit button to finalize the submission.</li>
<li> Screen 2: In this screen showing the original string, the current string, and a list of cards representing each character in the current string. The user can click on a delete icon located on each card to remove all duplicate instances of that character in the string except the one that is being clicked.</li>

git clone https://github.com/Ashish1407/frontend-engineering-octernship.git

```


#  Features

<h3>
- User should provide a string in the input field of the screen 1 and an empty string should be invalid
- By clicking on the submit button the user should be redirected to the screen 2
- All the characters of the input string is rendered as cards on the screen 2
- Delete button is used on the cards to remove the duplicate elements
- In screen 2, the original string and the resultant string after removing duplicate should be rendered and updated.
- Go back button should redirect the user to the screen 1

 </h3>

# Requirements

- The cards with the same character should have the same background color
- When there is no characters occuring more than one time then a success header will be rendered
  -On Screen 2, clicking on a card delete icon will delete all other appearance of the character in the string.
  The cards shown on the screen should also be updated.
  Let's say if the original string is aabcaccda. Clicking on the first a should leave the string as abcccd.
- When the user goes back to screen 1 then the input field in the scren 1 will remain empty.
```
