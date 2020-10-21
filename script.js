var calcontainer = document.createElement('div');
calcontainer.classList.add('container');
var form = document.createElement('form');
var dispdiv = document.createElement('div');
dispdiv.classList.add('display');

var display = document.createElement('input');
var att = ["type", "placeholder", "value", "name"];
var val = ["text", "0", "0", "displayResult"];
for (var i = 0; i < att.length; i++) {
    display.setAttribute(att[i], val[i])
}

var butdiv = document.createElement('div');
butdiv.classList.add('buttons');

var row1 = document.createElement('div');
row1.classList.add('row');

var pow = document.createElement('input');
var attpow = ["type", "value", "name", "class", ];
var valpow = ["button", "", "clear", "order-first"];
pow.setAttribute('innerHTML', '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-power" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill - rule = "evenodd"d = "M5.578 4.437a5 5 0 1 0 4.922.044l.5-.866a6 6 0 1 1-5.908-.053l.486.875z"/><path fill - rule = "evenodd" d = "M7.5 8V1h1v7h-1z"/></svg>');
for (var i = 0; i < attpow.length; i++) {
    pow.setAttribute(attpow[i], valpow[i])
}


var clear = document.createElement('input');
var attc = ["type", "value", "name"];
var valc = ["button", "CLE", "clear"];
for (var i = 0; i < attc.length; i++) {
    clear.setAttribute(attc[i], valc[i])
}
clear.onclick = function() {
    form.displayResult.value = '';
}

var cent = document.createElement('input');
var attcent = ["type", "value", "name", "onclick"];
var valcent = ["button", "%", "cent", "tap(cent.value)"];
for (var i = 0; i < attcent.length; i++) {
    cent.setAttribute(attcent[i], valcent[i])
}

var del = document.createElement('input');
var attd = ["type", "value", "name"];
var vald = ["button", "DEL", "delete"];
for (var i = 0; i < attd.length; i++) {
    del.setAttribute(attd[i], vald[i])
}
del.onclick = function() {
    var arr = form.displayResult.value.split("");
    arr.pop();
    form.displayResult.value = arr.join("");
}

var row2 = document.createElement('div');
row2.classList.add('row');

var num7 = document.createElement('input');
var att7 = ["type", "name", "value", "class", "onclick"];
var val7 = ["button", "num7", "7", "order-first", "tap(num7.value)"];
for (var i = 0; i < att7.length; i++) {
    num7.setAttribute(att7[i], val7[i])
}

var num8 = document.createElement('input');
var att8 = ["type", "name", "value", "onclick"];
var val8 = ["button", "num8", "8", "tap(num8.value)"];
for (var i = 0; i < att8.length; i++) {
    num8.setAttribute(att8[i], val8[i])
}

var num9 = document.createElement('input');
var att9 = ["type", "name", "value", "onclick"];
var val9 = ["button", "num9", "9", "tap(num9.value)"];
for (var i = 0; i < att9.length; i++) {
    num9.setAttribute(att9[i], val9[i])
}

var addb = document.createElement('input');
var attadd = ["type", "name", "value", "onclick"];
var valadd = ["button", "addb", "+", "tap(addb.value)"];
for (var i = 0; i < attadd.length; i++) {
    addb.setAttribute(attadd[i], valadd[i])
}

var row3 = document.createElement('div');
row3.classList.add('row');

var num4 = document.createElement('input');
var att4 = ["type", "name", "value", "class", "onclick"];
var val4 = ["button", "num4", "4", "order-first", "tap(num4.value)"];
for (var i = 0; i < att4.length; i++) {
    num4.setAttribute(att4[i], val4[i])
}

var num5 = document.createElement('input');
var att5 = ["type", "name", "value", "onclick"];
var val5 = ["button", "num5", "5", "tap(num5.value)"];
for (var i = 0; i < att5.length; i++) {
    num5.setAttribute(att5[i], val5[i])
}

var num6 = document.createElement('input');
var att6 = ["type", "name", "value", "onclick"];
var val6 = ["button", "num6", "6", "tap(num6.value)"];
for (var i = 0; i < att6.length; i++) {
    num6.setAttribute(att6[i], val6[i])
}

var subb = document.createElement('input');
var attsub = ["type", "name", "value", "onclick"];
var valsub = ["button", "subb", "-", "tap(subb.value)"];
for (var i = 0; i < attsub.length; i++) {
    subb.setAttribute(attsub[i], valsub[i])
}

var row4 = document.createElement('div');
row4.classList.add('row');

var num1 = document.createElement('input');
var att1 = ["type", "name", "value", "class", "onclick"];
var val1 = ["button", "num1", "1", "order-first", "tap(num1.value)"];
for (var i = 0; i < att1.length; i++) {
    num1.setAttribute(att1[i], val1[i])
}

var num2 = document.createElement('input');
var att2 = ["type", "name", "value", "onclick"];
var val2 = ["button", "num2", "2", "tap(num2.value)"];
for (var i = 0; i < att2.length; i++) {
    num2.setAttribute(att2[i], val2[i])
}

var num3 = document.createElement('input');
var att3 = ["type", "name", "value", "onclick"];
var val3 = ["button", "num3", "3", "tap(num3.value)"];
for (var i = 0; i < att3.length; i++) {
    num3.setAttribute(att3[i], val3[i])
}

var mulb = document.createElement('input');
var attmul = ["type", "name", "value", "onclick"];
var valmul = ["button", "mulb", "*", "tap(mulb.value)"];
for (var i = 0; i < attmul.length; i++) {
    mulb.setAttribute(attmul[i], valmul[i])
}

var row5 = document.createElement('div');
row5.classList.add('row');

var num0 = document.createElement('input');
var att0 = ["type", "name", "value", "class", "onclick"];
var val0 = ["button", "num0", "0", "order-first", "tap(num0.value)"];
for (var i = 0; i < att0.length; i++) {
    num0.setAttribute(att0[i], val0[i])
}

var dotb = document.createElement('input');
var attdot = ["type", "name", "value", "onclick"];
var valdot = ["button", "dotb", ".", "tap(dotb.value)"];
for (var i = 0; i < attdot.length; i++) {
    dotb.setAttribute(attdot[i], valdot[i])
}

var divb = document.createElement('input');
var attdiv = ["type", "name", "value", "onclick"];
var valdiv = ["button", "divb", "/", "tap(divb.value)"];
for (var i = 0; i < attdiv.length; i++) {
    divb.setAttribute(attdiv[i], valdiv[i])
}

var res = document.createElement('input');
var attres = ["type", "name", "value", "class", "onclick"];
var valres = ["button", "res", "=", "res", "result()"];
for (var i = 0; i < attres.length; i++) {
    res.setAttribute(attres[i], valres[i])
}

butdiv.append(row1, row2, row3, row4, row5);
row5.append(num0, dotb, divb, res);
row4.append(num1, num2, num3, mulb);
row3.append(num4, num5, num6, subb)
row2.append(num7, num8, num9, addb);
row1.append(clear, pow, cent, del);
dispdiv.append(display);
form.append(dispdiv, butdiv);
calcontainer.append(form);
document.getElementById('bod').append(calcontainer);

function tap(result) {
    if (form.displayResult.value === '0') {
        form.displayResult.value = result;
    } else {
        form.displayResult.value = form.displayResult.value + result;
    }
}

function result() {
    var str = form.displayResult.value;
    if (str[str.length - 1] == '+' || str[str.length - 1] == '-' || str[str.length - 1] == '/' || str[str.length - 1] == '*') {
        alert(str + ' is an invalid expression');
    } else {
        form.displayResult.value = eval(form.displayResult.value);
    }

}