// begining from start

let initial = [1,2,3,4,8,0,7,6,5];
// let initial = [1,2,3,4,0,5,6,7,8];
let count = 0;
let visited = [];
let solution = [];
let xCoord = 30;
let yCoord = 20;
let goal = [1,2,3,4,5,6,7,8,0];

function setup(){
  createCanvas(windowWidth,windowHeight);
  // background(0);
}

q = [];
q.push([initial,initial,0]);
depth = 0;
nodes = 0;
parent = initial;

while(q.length > 0 ){
  x = q.pop();

  // check if the node is already visited here..

  if (alreadyVisited(x[0])){
    continue;
  }else{
    visited.push(x[0]);
  }
  // console.log(visited)

  depth = x[2];
  nodes += 1;

  if (depth == 100){
    continue;
  }
  depth += 1;
    
  // console.log(depth);
  listing = possibleOperations(x[0],depth);

  for(var i=0;i<listing.length;++i){
    if(compareTwoArray(listing[i][0],x[1])){
      listing.splice(i,1);
      // console.log("Listing");
      // console.log(listing);
      // console.log("*****************");
      break;
    }
  }

  for(var i=0;i<listing.length;++i){
    if(checkGoalState(listing[i][0])){
      console.log("Number of moves"+depth);
      console.log("Number of nodes"+nodes);
      console.log("Solution Found");
      console.log("Visited NOdes");
      console.log(visited);
      visited.push(goal);
      throw new Error('Exit of the program');
    }else{
      count++;
    }
    q.push(listing[i]);
  }
  console.log(count);
  parent = x[0]; // parent ma doubt same auxa bhannera 
  // console.log(q);
}

function alreadyVisited(value){
  for(var i=0;i<visited.length;++i){
    if (value[0] == visited[i][0] && value[1] == visited[i][1] && value[2] == visited[i][2] && value[3] == visited[i][3] && value[4] == visited[i][4] && value[5] == visited[i][5] && value[6] == visited[i][6] && value[7] == visited[i][7] && value[8] == visited[i][8]){
      return true;
    }else{
      return false;
    }
  }
  return false;
}

function compareTwoArray(arr1,arr2){
  if (arr1[0]==arr2[0] && arr1[1]==arr2[1] && arr1[2]==arr2[2] && arr1[3]==arr2[3] && arr1[4]==arr2[4] && arr1[5]==arr2[5] && arr1[6]==arr2[6] && arr1[7]==arr2[7] && arr1[8]==arr2[8]){
    return true;
  }else{
    return false;
  }
}

function checkGoalState(value){
  if(value[0]==1 && value[1]==2 && value[2]==3 && value[3]==4 && value[4]==5 && value[5]==6 && value[6]==7 && value[7]==8 && value[8]==0){
    return true;
  }else{
    return false;
  }
}

function findZeroPos(value){
  for(var i=0;i<value.length;++i){
    if ((value[i]%10)==0){
      return i;
    }
  }
}

function makeMove(value,a,b){
  var tempArr = value.slice(0);
  var temp;
  temp = tempArr[a];
  tempArr[a] = tempArr[b];
  tempArr[b] = temp;

  return tempArr;
}

function possibleOperations(num,depth){
  var pos = findZeroPos(num);
  var operator = num; // slice use
  var move_list = [];

  // if (num.length==8){
  //   operator = '0'+num
  // }

  if ( pos==0 ){
    // two set of opeareation possible 
    final = makeMove(operator,pos,1);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,3);
    move_list.push([final,num,depth]);

  }else if (pos == 1 ){
    // three set of operarion possible

    final = makeMove(operator,pos,2);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,4);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,0);
    move_list.push([final,num,depth]);

  }else if (pos == 2){
    // two set of operation possible 

    final = makeMove(operator,pos,5);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,1);
    move_list.push([final,num,depth]);

  }else if (pos == 3){
    // three set of operarion possible
    final = makeMove(operator,pos,0);
    move_list.push([final,num,depth]);
    // console.log("Values are here");
    // console.log(final);

    final = makeMove(operator,pos,4);
    move_list.push([final,num,depth]);
    // console.log("Values are here");
    // console.log(final);

    final = makeMove(operator,pos,6);
    move_list.push([final,num,depth]);
    // console.log("Values are here");
    // console.log(final)

  }else if (pos == 4){
    // 4sets of operations possible
    final = makeMove(operator,pos,1);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,5);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,7);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,3);
    move_list.push([final,num,depth]);

  }else if(pos == 5){
    // 3 sets of operations possible

    final = makeMove(operator,pos,2);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,8);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,4);
    move_list.push([final,num,depth]);

  }else if( pos==6 ){
    // 2sets of operations are possible

    final = makeMove(operator,pos,3);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,7);
    move_list.push([final,num,depth]);

  }else if( pos==7 ){
    // 3 sets of operations are possible
    final = makeMove(operator,pos,4);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,8);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,6);
    move_list.push([final,num,depth]);

  }else if( pos== 8){
    // 2 sets of operations are possible 
    final = makeMove(operator,pos,5);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,7);
    move_list.push([final,num,depth]);
  }

  return move_list;
}


function draw(){

  for(var i=0;i<visited.length;++i){
    if (yCoord+40>height){
      yCoord = 20;
      xCoord += 120;
    }
    rect(xCoord,yCoord,100,20);
    
    text(visited[i],xCoord+5,yCoord+15);
    yCoord += 30; 
  }

 noLoop();
  
  
}