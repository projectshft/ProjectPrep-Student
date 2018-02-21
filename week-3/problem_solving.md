# Problem Solving
We are going to talk about the art of problem solving as it relates to code.

## Common Mistakes:
![problem](https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2011/01/lolcatthink.jpg)

There are several mistakes programmers will make when asked to solve a code challenge during an interview. One of special note is that of **rushing into the code**.

Most carpenters live by the phrase, "measure twice cut once". There's a reason they do so. It's easier to build something once you have already established the measurements rather than building it first and later realizing that one measurement threw the rest of the build off.

One of the most common mistakes people will make when trying to solve a coding problem is that they start writing the code **first**.

**You must resist this temptation** Pseudo-code is your friend, use it!

Another common problem is when the person does not fully understand the problem, and refuses to ask questions in the event they might seem like they don't know what he / she is doing.

**Don't make too many assumptions! Clarify!**

One last mistake programmers make is that they try to over solve the problem on the first iteration.

**Keep it simple** and don't try to get too fancy or complex.

## Simple Steps:
1. Read the problem completely, at least twice.
2. Solve the problem manually with 3 sets of sample data.
3. Optimize the manual steps.
4. Write the manual steps as comments or pseudo-code.
5. Replace the comments or pseudo-code with real code.
6. Optimize the real code.

### 1. Read the problem completely:
There is a reason this step is number one. How can you solve a problem if you don't understand it?

**You can't!**

I know this seems really simple, but it is often overlooked. A good test of your comprehension is to see if you could explain the problem to someone else. During an interview, this would be as simple as repeating the question in your own words to the person conducting the interview.

### 2. Solve the problem manually
Believe it or not, in order for automation to exist, there **must** be a manual foundation. In other words, if you can automate something, it can most certainly be done **manually**. Programming is essentially automation.

![problem](https://i.imgflip.com/1l1t5h.jpg)

You should always try solve the problem manually first. Use a few different inputs as test cases and work through the problem with pen and paper if you have to. Think through the manual steps you have to take in order to work through the problem.

When solving problems manually, your brain is acting as the computer. It is important to take note of the assumptions your brain is making when thinking through the steps. Take note of how your brain is processing the information your feeding it.

**For example:**
```JavaScript
// Given an array of strings, return the longest string.

// sample input: ['ball', 'glove', 'bat', 'diamond']
```

Your eyes can easily look over this list and your brain can quickly process the longest looking string in the sample array. Just because your brain can do it so easily, doesn't mean that your code can. You need to think about **how** your brain is processing the information. It doesn't magically know that ```'diamond'``` is the longest, rather your brain is comparing the length of each string to every other string, and it must do it for **all** the elements in the array. This tells you that you are going to have to **iterate** over all the elements and compare them.

**Write out what your brain is doing manually:**

_Look at the array_

`sample input: ['ball', 'glove', 'bat', 'diamond']`

_Count the length of each item:_


'ball' = 4

'glove' = 5

'bat' = 3

'diamond' = 7


_Compare the values of each item:_

4 > 5 ? No

5 > 3 ? Yes

5 > 7 ? No

7 is largest

_7 is associated with which element?_

'diamond'

**Answer:** 'diamond' is the longest string

I know it seems long and unnecessary for such a simple problem, but the more you get used to thinking through all the steps your brain goes threw, the easier it will be to write simple and concise solutions to more complex problems.

### 3. Optimize the manual steps.
The goal is to take our overly detailed, step by step "brain script" and turn it into a more streamlined and simple process. You will see how this begins to look a bit more like coding steps.

**Using our previous example:**

1. Create an empty spot in memory that will hold the longest word.
2. Create another spot in memory that will hold the longest length.
2. Reference the array and go through each element.
3. Compare the current element's length to the empty spot in memory.
4. If the current element is longer, than update both places in memory
5. When iteration is complete, reference spot in memory for longest word.

You could be possibly begin to write code at this point, but we should take one more step to be sure we have everything in order. "Measure twice cut once".

### 4. Pseudo-code
Now we translate our manual steps into actual code as comments. These will provide the framework where we will begin to fill in our code with actual JavaScript. Use code terms here so that you know what you need to execute for each step.

**Again, using our same example**
```javascript
// Write a function that returns the longest string in an array.
// Sample A: ['ball', 'glove', 'bat', 'diamond']

// Create a function called 'longestString' that takes an array as an argument

// Create a variable to store the longest word

// Create another variable to store the largest length

// Loop through Array

// Compare current index's length to longest length variable and re-assign both variables if larger

// Return variable
```

Now you have a framework to work with. Let's write some code!

### 5. Replace the comments with real code
This is step is probably the easiest and least time consuming. We have already done the heavy lifting in trying to figure out a solution, now we just translate our steps into real code.

```javascript
// Write a function that returns the longest string in an array.
// Sample A: ['ball', 'glove', 'bat', 'diamond']

// Create a function called 'longestString' that takes an array as an argument
function longestString(array) {
  // Create a variable to store the longest word
  let longestWord = undefined
  // Create another variable to store the longest length
  let longestLength = 0
  // Loop through Array
  for (var i = 0; i < array.length; i++) {
    // Compare current index's length to longest length variable and re-assign both variables if larger
    if (array[i].length > longestLength) {
      longestLength = array[i].length
      longestWord = array[i]
    } else {
      // do nothing
    }
  }
  // Return longest word variable
  return longestWord
}
```

If this was too difficult there are two possible reasons why:
1. You did not break up the steps into small enough chunks.
2. You don't understand the language enough to write the code that is needed for a given step.

You may need to revisit some previous steps in order to break down your code even further. Really think through every little meticulous step and try not to leave anything out. It's picky, but it will help you in the long run.

### 6. Optimize the real code
This step may or may not be necessary. The less experienced you are with a given language the more likely it is that your code could be optimized. There may be some methods you are not aware of that can cut several lines out of your code, or maybe there is a way to search through a large array much faster. Look back over your variable names and make sure they effectively communicate their intent. Find things that will make your code shorter, faster, and easier to read.

```JavaScript
function longestString(array) {
  let longestWord = array.reduce((currentWord, nextWord) => {
    return currentWord.length > nextWord.length ? currentWord : nextWord
  })
  return longestWord
}
```

It is true that this process is long and tedious, but if you practice using these steps when writing code it will save you time and frustration in the future.

**_"Measure twice cut once."_**

![cutOnce](/images/cutOnce.png)

<p align="center">Adapted form: simpleprogrammer.com</p>
