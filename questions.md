## Questions

1-01
* Why learn Angular JS over other frameworks like Ember, Backbone, Knockout, etc?
* People have some very strong opinions about Angular. What are 3 common complaints people have about Angular?
* Is Angular an MVC framework?
* Turn to the Angular docs. Find `ng-app`. What is it and what does it do? What does `ng` stand for?
1-02
* What does `ng-model` do?
* What is "dirty checking"?
* Find a way to set the initial value of "name" as "BoJack" (without writing a controller).
* What are those `{{ }}` expressions? Are they Handlebars?
* Explain what two-way data binding is.
* BONUS: Research the `$digest` loop
1-04
* What are Angular expressions? How do they compare to tags from templating engines you've used before?
* What happens when you write invalid code in an expression? What type of error do you get?
* What are Angular filters? Describe what a filter does and then name four built-in filters, including one that we haven't used yet.
* What's the syntax for filters?
* Can you use more than one filter?
* We'll soon see how to create custom filters. What is a use case for a custom filter?
1-05
* What is the purpose of `ng-init`?
* Why use `ng-src` and `ng-href`?
* What are directives?
* Does `ng-class` require an object to be passed in?
* What order does an ng-repeat display items in?
* How does `ng-repeat` handle duplicate data?
1-06
* What is `$scope`?
* What are Angular modules? What's the syntax for defining a module?
* Why do we pass in `$scope` as an argument to controller functions?
* In Express, what are Angular controllers most analogous to?
1-07
- What is $rootScope?
- Explain how $scope is passed from a parent to child controller
- List five built in directives that create their own scope
- "Scope becomes tricky when you try to 2 way data bind to a primitive defined on the parent scope from inside the child scope" - what does this mean?
1-09
- When does a form/input have a property of $valid? What class accompanies this property?
- When does a form/input have a property of $invalid? What class accompanies this property?
- When does a form/input have a property of $pristine? What class accompanies this property?
- When does a form/input have a property of $dirty? What class accompanies this property?
- When does a form/input have a property of $touched? What class accompanies this property?
- What does blurred mean? (research the `blur` event)
#### For the next set of questions, assume that you have a form with a name="quizForm"
- Create a text input with a name of "question" and give it a validation of "required". If it is $valid add a class of "valid"
- For your text input with a name of question, add a paragraph tag with the text "please enter a valid question" if the input is not valid
- Create a text input with a name of "answer" and give it a validation of "required" and a minimum length of 4 characters. If it is $valid and not $pristine add a class of "correct".
- How would you access all of the errors (in an object) for an input with a name of `signupForm.username`
- What validations would you add in an input to make sure that there is a minimum length of 4 and a maximum length of 20
- What validation would you add in an input to make sure that only numbers between 1 and 5 are a valid input (use regular expressions for this!)
1-10
- What is ng-animate? What does it do for us? What does it not to for us?
- What is the difference between the `.ng-enter ` and `.ng-enter-active ` classes?
- What is a staggered animation?
- What is animate.css?
