# Simple Calculator

## Background & Objectives

The aim of this challenge is to create a simple calculator that does the 4 basic operations:
- Addition
- Subtraction
- Multiplication
- Division

## Specs

We need to provide:
- 2 input fields to enter the numbers to operate on.
- a dropdown to select the operation. 
- an **Equals** button to make the calculation
- the result of the operation

The end result could look like this: 
![screenshot](images/screenshot.png)

You can check the expected solution here [here](https://oussa.github.io/js-challenges/challenge2/solution/).

## Tips & Resources

The following HTML could be copied to start with:
```html
<form>
  <table>
    <tr>
      <th>Number</th>
      <th>Operation</th>
      <th>Number</th>
      <th></th>
      <th>Result</th>
    </tr>
    <tr>
      <td><input type="text"></td>
      <td>
        <select>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">x</option>
          <option value="/">⁄</option>
        </select>
      </td>
      <td><input type="text"></td>
      <td><input type="submit" value="="></td>
      <td><input type="text"></td>
    </tr>
  </table>
</form>
```

You might need to use the following:

- [onsubmit](https://www.w3schools.com/jsref/event_onsubmit.asp) to specify the function to call on form submit
- [event.preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault) to stop the browser's default behavior after submit
- [getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) to get an HTML element using its `id`
