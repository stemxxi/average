

var averageFirst = +prompt('Введите первое число');
var averageSecond = +prompt('Введите второе число');
var averageThird = +prompt('Введите третье число') 



if (averageFirst > averageSecond && averageFirst < averageThird || averageFirst > averageThird && averageFirst < averageSecond){
    alert('Average number is d' + averageFirst);
} else if (averageSecond > averageFirst && averageSecond < averageThird || averageSecond > averageThird && averageSecond < averageFirst){
    alert('Average number is v' + averageSecond);
} else if (averageThird > averageFirst && averageThird < averageSecond || averageThird > averageSecond && averageThird < averageFirst){
    alert('Average number is b' + averageThird);
}else {
    alert('Among three numbers - two of them are equal.')
}

