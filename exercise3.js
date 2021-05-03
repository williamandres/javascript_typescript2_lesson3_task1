//title: Abbreviate a Two Word Name

/*problem:
Write a function to convert a name into initials. This kata strictly 
takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/



function abbrevName(name){

    const upper = name.toUpperCase();
    const divide =  upper.split(' ');
    const firstwWord = divide[0];
    const secondWord = divide[1];
    const first = firstwWord.substring(0,1);
    const second = secondWord.substring(0,1)
    const initials = first + '.' + second
    return initials
}