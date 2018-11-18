// order in top=>right=>bottom=>left

let initial = [1,2,3,0,4,5,6,7,8];
let state = [];
let killedState = [];
let count= 0; // just for counting purpose

class createState{
  constructor(){
    this.value;
    this.parent;
    this.x;
    this.y;
    this.visited;
    this.depth;
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  ellipse(200,200,50,50);

  var root = new createState();
  root.value = initial;
  root.parent = initial;
  root.depth = 0;
  root.visited = false;
  
  // console.log(findZeroPos(initial));
  // listing =  possibleOperations(initial,0);  
  // console.log(listing);
  // makeMove(initial,3,0);
  // console.log(initial)


  // driver code goes here 
  q = [];
  q.push([initial,initial,0]);
  depth = 0;
  nodes = 0;
  parent = initial; 
      // listing = possibleOperations([1,2,3,4,0,5,6,7,8],depth);
  // console.log(listing)

  while(q.length !=0 ){
    x = q.pop();
    depth = x[2];
    nodes += 1;

    if (depth == 15){
      continue;
    }
    depth += 1;
    listing = possibleOperations(x[0],depth);

    // removing previous poosible move if exits here...
    for(var i=0;i<listing.length;++i){
      if(compareTwoArray(listing[i][0],x[1])){
        listing.splice(i,1);
        console.log("Listing");
        console.log(listing);
        console.log("****************");
        break;
      }
    }

    for(var i=0;i<listing.length;++i){
      if(checkGoalState(listing[i][0])){
        console.log('Number of moves'+depth);
        console.log('Number of nodes'+nodes);
        console.log('Solution Found');
      }else{
        count++;
      }
      q.push(listing[i])
      // console.log(q[0]);
    }
    parent = x[0];
    // console.log(count);
    console.log("Depth and nodes number");
    console.log(depth);
    console.log(nodes);
    console.log("==========");

  }

}
// ========================================================================================
// ========================================================================================

// supoorting functions 
function checkGoalState(value){
  if(value[0]==1 && value[1]==2 && value[2]==3 && value[3]==4 && value[4]==5 && value[5]==6 && value[6]==7 && value[7]==8 && value[8]==0){
    return true;
  }else{
    return false;
  }
}

function compareTwoArray(arr1,arr2){
  if (arr1[0]==arr2[0] && arr1[1]==arr2[1] && arr1[2]==arr2[2] && arr1[3]==arr2[3] && arr1[4]==arr2[4] && arr1[5]==arr2[5] && arr1[6]==arr2[6] && arr1[7]==arr2[7] && arr1[8]==arr2[8]){
    return true;
  }else{
    return false;
  }
}

function draw() {
  // put drawing code here
}

function findZeroPos(value){
  for(var i=0;i<value.length;++i){
    if ((value[i]%10)==0){
      return i;
    }
  }
}

function makeMove(num,a,b){
  var tempArr = num.slice();
  var temp;
  temp = tempArr[a];
  tempArr[a] = tempArr[b];
  tempArr[b] = temp;

  return tempArr;
}

function possibleOperations(num,depth){
 let pos = findZeroPos(num);
  let operator = num
  let final;
  move_list = [];

  if (num.length==8){
    operator = '0'+num
  }

  if ( pos==0 ){
    // two set of opeareation possible 
    final = makeMove(operator,pos,1);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,3);
    move_list.push([final,num,depth]);

  }else if (pos == 1 ){
    // three set of operarion possible
    final = makeMove(operator,pos,0);
    move_list.push([final,num,depth]);
    
    final = makeMove(operator,pos,2);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,4);
    move_list.push([final,num,depth]);

  }else if (pos == 2){
    // two set of operation possible 
    final = makeMove(operator,pos,1);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,5);
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

    final = makeMove(operator,pos,3);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,5);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,7);
    move_list.push([final,num,depth]);

  }else if(pos == 5){
    // 3 sets of operations possible

    final = makeMove(operator,pos,2);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,4);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,8);
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

    final = makeMove(operator,pos,6);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,8);
    move_list.push([final,num,depth]);

  }else if( pos== 8){
    // 2 sets of operations are possible 
    final = makeMove(operator,pos,5);
    move_list.push([final,num,depth]);

    final = makeMove(operator,pos,7);
    move_list.push([final,num,depth]);
  }
  console.log("Move list ");
  console.log(move_list);
  console.log("############")
  return move_list;
}