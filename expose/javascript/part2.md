1. At line 12, it prints 3 which is the last value that var i takes. It can be accessed outside the for loop because the variable was declared using var.
2. At line 13, it prints 150 which is the last value that discountedPrice takes. It can be accessed outside the for loop because the variable was declared using var.
3. At line 14, it prints 150 which is the last value that finalPrice takes. It can be accessed outside the for loop because the variable was declared using var. 
4. This function returns a list of the new prices after the 50 percent discount has been applied. The input was [100, 200, 300] and the function returned [50, 100, 150].
5. In line 12, there is an error printing i because it is undefined. By using let, it confines the scope of the i variable to only the for loop. 
6. In line 13, there is an error printing discountedPrice because it is undefined. By using let, it confines the scope of the discountedPrice variable to only inside the for loop.
7. In line 14, it prints 150 because the let variable is in the main code block in the function, so the scope is the same as the console.log line. 
8. The function returns a list of the new discounted prices. It took in a list of prices [100, 200, 300] and returned [50, 100, 150]. It applies a 50 percent discount to each value in the input list of prices and pushes them to the new list.
9. Line 11 causes an error because the i variable was declared with let and is confined to only being accessible inside the for loop. 
10. Line 12 prints 3, which is the length of the input list. This variable was declared with const and can be accessed because the console.log(length) is in the same code block.
11. It return [50, 100, 150] which is the new prices of after the 50 percent discount has been applied to every price inside the input list of [100, 200, 300].
12. Object notation
    1. student.name
    2.  