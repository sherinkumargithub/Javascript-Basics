// 2 module(export)
/*
export default function earnMoney() {
  return "earn money by learning a new skill";
}
export const growMoney = () => {
  return "grow your money by investing";
};
export const giveMoney = () => {
  return "give you knowledge free education";
};
*/
/* export default earnMoney;
export {growMoney, earnMoney}*/

// modules in classes
export default class friends {
  constructor(name) {
    this._name = name;
  }
  emailme() {
    return `hi i am ${this._name}. emailed to sherinstoic117@gmailcom`;
  }
}
