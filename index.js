function getFirstSelector(selector){
 var answer = document.querySelector(selector);
 return answer;
}

function nestedTarget(){
var answer = document.querySelector('#nested .target');
return answer;
}

function increaseRankBy(n){
  //number is not a js number. make it a number! parseInt(string, 10)
  var stringNumber = document.getElementById('app').querySelectorAll('ul.ranked-list');
  //returns a Node list, which is similar to an array
  for (let i=0; i<stringNumber.length; i++){
    stringNumber[i].innerHTML = (n + stringNumber[i]);
  }
}

function deepestChild() {
// maybe try nodelist.length - 1, whatever variable you set node list to;
//so our code should be structured with a current and next variable
//and while(next), you should overwrite those variables
//the while loop continues as long as there is a nextChild
//there is a javascript method which should return to us the children for an element
var grandNode = document.querySelector('#grand-node');
var current
var next =
}
