export class Passwordser{
  static getrandomlower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
  }
  static getrandomupper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
  }
  static getrandomnumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
  }
  static getrandomsymbols(){
    let symbolstr='!@#$%&*^?/:;';
    return symbolstr[Math.floor(Math.random()*symbolstr.length)];
  }
static getpassword(state){
let passwordObj={};
for(let key of Object.keys(state)){
  if(typeof state[key]==='boolean' && state[key]){
    passwordObj={
      ...passwordObj,
      [key]: state[key]
    }
  }
}
return passwordObj;
}
static generatepassword(passwordObj,Length){
let password='';
for(let i=0; i<Number(Length); i+=Object.keys(passwordObj).length){
if(passwordObj.lowercase)password+=`${this.getrandomlower()}`;
if(passwordObj.uppercase)password+=`${this.getrandomupper()}`;
if(passwordObj.Number)password+=`${this.getrandomnumber()}`;
if(passwordObj.Symbols)password+=`${this.getrandomsymbols()}`;
}
return password.substring(0,Number(Length));
}
}
export default Passwordser