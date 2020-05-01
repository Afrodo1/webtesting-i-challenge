module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const {enhancement} = item;

  if(enhancement < 20 && enhancement > -1){
    return{ ...item, enhancement: enhancement +1 };;
  }
  else if (enhancement == 20){
    return{...item};
  }
  else{
    return ('No such item');
  }
}

function fail(item) {
  const {enhancement, durability} = item;
  if(enhancement < 15 && enhancement > -1 ){
    return { ... item, durability:durability -5}
  }else if(enhancement == 15 || enhancement == 16 && durability > 10 && durability <101){
    return { ... item, durability: durability -10}

  }else if (enhancement > 16 && enhancement < 21 && durability > 10 && durability <101){
    return { ...item, enhancement: enhancement -1, durability: durability -10 }

  }else {
    return "No such item"
  }
}

function repair(item) {
  const {enhancement, durability} = item;
  if(enhancement < 21 && enhancement > -1 && durability < 101 && durability > -1){
    return ({...item, durability: 100});
  }else{
    return('item cant exist');
  }
}

function get(item) {
  return { ...item };
}
