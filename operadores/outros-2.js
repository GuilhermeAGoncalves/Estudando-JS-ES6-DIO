//in
someThing in someThingItems

//array
var arvores = new Array('cedro','pau-brasil','pinheiro','carvalho')
0  in arvores //true
1 in arvores //true
6 in arvores //false o array so contem 4 Items
'cedro' in arvores //false tem que especificar o indice e não o valor ex:
'cedro' in arvores[0] //True
'lenght' in arvores //true, pois lenght é uma proprieda de array


//objetos pre-definidos
'PI' in Math //true
var string = new String('Ola')
'lenght' in string //true

//objetos personalizados
var myCar = {marca : 'Toyota',modelo : 'Supra', ano : '1994'}
'marca' in myCar //true
'moledo' in myCar //true

//instaceof

objeto instanceof tipoObjeto

var dia = new Date(2020,08,10)

if (dia instanceof Date){ //true
     //code here 
}