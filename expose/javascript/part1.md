1. Line 9 prints "values added: 20".
2. Line 13 prints "final result: 20".
3. You should not use var because it leads to scope issues with accessing a variable. If the variable is declared using var, it can not be accessed anywhere within the function. For example, in the code snippet, console.log still printed out the value of result even though it was declared inside a different code block in the function.
4. Line 9 prints "values added: 20".
5. Line 13 throws an error saying that result is not defined. This is because the variable result was declared with let which maintains scope only within the block it was declared in. Since line 13 was outside this block, it could not access the result variable. 
6. Line 9 does not print anything and throws an error saying "TypeError: Assignment to constant variable".
7. Line 13 does not print anything because the const declaration ensures that the result variable can not be accessed outside the if block. 