<img alt="Logo" src="https://mentor.coderslab.pl/wp-content/uploads/2018/12/CL_IT_logo_ENG_1040x261_black_YELLOW-1.png" width="400">

# jQuery & ES6 &ndash; exam

## Guidelines for github

1. [*Fork*](https://guides.github.com/activities/forking/) the repository containing exercises.
2. Clone the repository onto your computer using the command: `git clone repository_address`.
You will find the address of the repository by pressing "Clone or download" button on its webpage.
3. Complete the exercises and commit changes to your repository using the commands below.
`git add filename` will add a single file which you have changed.
If you want to add all the changed files at once, use `git add .`.
Remember that the fullstop (dot) at the end of this command is important!
Next, commit changes using `git commit -m "description_of_changes"`.
4. Push changes to your repository on GitHub by typing: `git push origin master`.
5. Create a [*pull request*](https://help.github.com/articles/creating-a-pull-request) to the original repository when you have finished all the exercises.

## Guidelines for completing the tasks

These exercises are tested using **special automatic tests**. Therefore, make sure that:

* Use ES6 wherever you can.

* If it is mentioned in an exercise that the function should return a result, it should return it instead of displaying it in the console.
(Of course, you can display it additionally.)

* If an exercise requires that a specific text is entered / returned / displayed, it should be exactly that text.

* Function names must be the same as stated in the exercise.

* Complete the exercises in appropriate **js** files.

* Do not change the HTML files.

* Always check if your solution works. If it throws errors, it will not be evaluated - in such case, better comment the **sensitive** parts.


---------------------------------------------------------------------

## Exercises

### Exercise 1
(1,5 pts)

In ```exercise1.js``` there are three arrays: x, y i z. In the ```joinArrays``` function write code that will merge those three arrays into one. The function should return the merged array with values in ascending order.
Attention! Do not use the array method called **concat**.

```JavaScript
var x = [21,3];
var y = [0,12];
var z = [42,5, 2];

joinArrays(x,y,z);  // function should return [0, 2, 3, 5, 12, 21, 42]
```

### Exercise 2
(3 pts)

Remember to use **let** and **const**, and **arrow function** wherever it is possible.

Write code that will do the following:

1. After hovering the mouse cursor over a __div__ a paragraph will appear within it (do this by changing an appropriate style). Only the paragraph nested inside the particular __div__ element should appear.
2. Inside the paragraph from the previous point, insert the text returned by the ```getRandomText()``` function.
3. After the mouse cursor leaves the __div__, the paragraph should disappear.



### Exercise 3
(4,5 pts)

Remember to use **let** and **const**, and **arrow function** wherever it is possible.

Using ```https://fe-api-jquery.firebaseio.com/fe-api-jquery.json``` load the information about movies on the website.
The titles of movies should be loaded into h2 elements, while the year of production should be loaded into h3 elements. Create these items and append them in the DOM.
Note that the data loaded from this address is in the form of an array. Use a loop to load all movies.

**Hint:** See what the object you receive as a response looks like in the console before you put the content on the page.

It should display on the page this way:

![Screen](movies.png)

### Exercise 4
(5 pts)

Remember to use **let** and **const**, and **arrow function** wherever it is possible.

In ```exercise4.html``` you will find a ```ul``` list with ```userList``` class that is filled with names and surnames. Take a look at it.

Each of these people just passed the Harvard University test for the Law faculty. To get in this faculty, you must pass the special Law School Admission Test (LSAT). The maximum number of points to obtain is 180, the minimum threshold to pass is 120 points.

In each element of the list you will also find a ```div``` that contains two elements with ```.score``` and ```.info``` class. Fill these elements in the following way:

* ```.score``` element: insert a value representing the result for each participant based on his score taken from the table (e.g. the first person on the list gets 102 pts, the second - 120, etc.)
```JavaScript
let userResults = [102, 120, 156, 23, 180];
```
* ```.info``` element: insert the text: either __Passed or __Failed__ depending on the score of each participant.


### Exercise 5
(6 pts)

Remember to use **let** and **const**, and **arrow function** wherever it is possible.

Your online store sells books. You are introducing a new product to the offer: ebooks.

**Creating base class**

In ```exercise5.js```:
* create a class named ```Product```. In its constructor, the class should set the data:
    * __title__  - book title,
    * __author__ - author,
    * __selector__ - CSS selector pointing to an appropriate element (see ```exercise5.html```, it will be either __.ebook__ or __.book__)


**Creating objects**

Due to adding a new product to the offer - the __ebook__ - create two classes that inherit from the base class:

* ```Ebook```,
* ```Book```.

Create these classes in such a way that you can create the following objects on their basis:

* an ebook titled __A Darker Sky__ written by Ruben Eliassen. Pass a selector to the constructor that will enable you to add this data to the page.
* a book titled __The Girl on the Train__ written by Paula Hawkins. Pass a selector to the constructor that will enable you to add this data to the page.

**Adding products to the website**

Create a ```updateInfo()``` method in the appropriate class. This method extracts __selector__ property from an object, finds appropriate DOM elements and adds product data in appropriate places.


**Ordering products**

Your clients want to be able both to download and to order books to the provided address. Create the following methods in appropriate classes:

* ```download``` - writes __Downloading... [title]__ in the console. Make the method return this text as well.
* ```order``` - writes __Enter delivery address!__ in the console. Make the method return this text as well.

Initiate the appropriate methods after pressing the __Download__ and __Order__ buttons.

**Good luck :)**
