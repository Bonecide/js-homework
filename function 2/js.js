num = prompt("Введите число");
function reverseNum(num){
    return (
        parseFloat(
            num.toString()
            .split("")
            .reverse()
            .join('')
        )
    )
}
alert (reverseNum(num));