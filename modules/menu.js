import BadArgumentException from "./exception/bad-argument-exception"

class Menu {

  constructor() {
    this.meal = []
  }
  /**
  * meal = {
  *   title: String
  *   price: Number
  *   currency: String
  * }
  **/
  addMeal(meal){
    if(meal){
      this.meal.push(meal)
    }else{
      throw new BadArgumentException(meal)
    }
  }

  removeMeal(meal){
    let index = this.meal.indexOf(meal)
    if( index !=-1){
      this.meal.splice(index,1);
    }
  }

  toString(){
    let ret = '';
    for(let m of meal){
      ret+= `${m.title} - ${m.price} ${m.currency} \n`
    }
    return ret;
  }

}
