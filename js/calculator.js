// JavaScript Code
const getValue1 = () => {
    let val1 = document.getElementById('one').innerHTML
    document.getElementById('value').value += val1
}

const getValue2 = () => {
    let val2 = document.getElementById('two').innerHTML
    document.getElementById('value').value += val2
}

const getValue3 = () => {
    let val3 = document.getElementById('three').innerHTML
    document.getElementById('value').value += val3
}

const getValue4 = () => {
    let val4 = document.getElementById('four').innerHTML
    document.getElementById('value').value += val4
}

const getValue5 = () => {
    let val5 = document.getElementById('five').innerHTML
    document.getElementById('value').value += val5
}

const getValue6 = () => {
    let val6 = document.getElementById('six').innerHTML
    document.getElementById('value').value += val6
}

const getValue7 = () => {
    let val7 = document.getElementById('seven').innerHTML
    document.getElementById('value').value += val7
}

const getValue8 = () => {
    let val8 = document.getElementById('eight').innerHTML
    document.getElementById('value').value += val8
}

const getValue9 = () => {
    let val9 = document.getElementById('nine').innerHTML
    document.getElementById('value').value += val9
}
const getPlus = () => {
    let plus = document.getElementById('plusOp').innerHTML
    document.getElementById('value').value += `${plus}`
}
const getMinus = () => {
    let minus = document.getElementById('minusOp').innerHTML
    document.getElementById('value').value += `${minus}`
}
const getDivide = () => {
    let divide = document.getElementById('divOp').innerHTML
    document.getElementById('value').value += `${divide}`
}
const getProduct = () => {
    document.getElementById('value').value += `*`
}
const getValue0 = () => {
    let zero = document.getElementById('zero').innerHTML
    document.getElementById('value').value += zero
}
const getResult = () => {
    let num = document.getElementById('value').value
    for (let i = 0; i < num.length; i++) {
        if (num[i] == '+') {
            let number1 = Number.parseInt(num.slice(0, i))
            let number2 = Number.parseInt(num.slice(i + 1, num.length))
            document.getElementById('value').value = number1 + number2
        }else if(num[i] == '-'){
            let number1 = Number.parseInt(num.slice(0, i))
            let number2 = Number.parseInt(num.slice(i + 1, num.length))
            document.getElementById('value').value = number1 - number2
        }else if(num[i] == '/'){
            let number1 = Number.parseInt(num.slice(0, i))
            let number2 = Number.parseInt(num.slice(i + 1, num.length))
            document.getElementById('value').value = number1 / number2 
        }else if(num[i] == '*'){
            let number1 = Number.parseInt(num.slice(0, i))
            let number2 = Number.parseInt(num.slice(i + 1, num.length))
            document.getElementById('value').value = number1 * number2
        }else{
            console.log("")
        }
    }

}

const clearField = () => {
    document.getElementById('value').value = " "
}

const cancelValue = () => {
    let str = document.getElementById('value').value
    let str1 = "";
    let str2 = "";
    for (let i = 0; i < str.length - 1; i++) {
        str2 += str1.concat(str[i])
    }
    document.getElementById('value').value = str2
}