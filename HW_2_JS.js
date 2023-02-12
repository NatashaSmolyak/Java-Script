//Task 1
const checkAge_1=(age_1,age_2,age_3)=>{
    if (age_1<age_2) {
        return `You don't have access cause youp age is ${age_1} It's less then`
    }
    else if ((age_1>=age_2) && (age_1<age_3)) {
        return 'Welcome!'
    }
    else if (age_1>age_3) {
        return 'Keep calm and look Culture channel'
    }
    else {return 'Technical work'} 
    };
console.log(checkAge_1(17,18,61));
//Task 2
const checkAge_2=(age_1,age_2,age_3)=>{
    if (typeof(age_1)!==Number || typeof(age_2)!==Number||typeof(age_3)!==Number){ 
        return 'Age must have a numeric data type'
        }
    else if (age_1<age_2) {
        return `You don't have access cause youp age is ${age_1} It's less then`
        }
    else if ((age_1>=age_2) && (age_1<age_3)) {
        return 'Welcome!'
        }
    else if (age_1>age_3) {
        return 'Keep calm and look Culture channel'
        }
    else {return 'Technical work'} 
        };
console.log(checkAge_2(17,18,'61'));
//Task 3
const checkAge_3=(age_1,age_2,age_3)=>{
    if (typeof(age_1)!==Number) {var age_1_Number=+age_1};
   if (typeof(age_2)!==Number) {var age_2_Number=+age_2};
    if (typeof(age_3)!==Number) {var age_3_Number=Number(age_3)};
        if (age_1_Number < age_2_Number) {
        return `You don't have access cause youp age is ${age_1_Number} It's less then`
        }
    else if ((age_1_Number>=age_2_Number) && (age_1_Number<age_3_Number)) {
        return 'Welcome!'
        }
    else if (age_1_Number>age_3_Number) {
        return 'Keep calm and look Culture channel'
        }
    else {return 'Technical work'} 
        };
console.log(checkAge_3(61,'18', 61));
//Task 4
const prompt=require("prompt-sync")({sigint:true});
const checkAge_4=(age_1,age_2,age_3)=>{
    if (typeof(age_1)!==Number) {var age_1_Number=+age_1};
    if (typeof(age_2)!==Number) {var age_2_Number=+age_2};
    if (typeof(age_3)!==Number) {var age_3_Number=Number(age_3)};
    if (age_1_Number < age_2_Number) {
          return `You don't have access cause youp age is ${age_1_Number} It's less then`
          }
      else if ((age_1_Number>=age_2_Number) && (age_1_Number<age_3_Number)) {
          return 'Welcome!'
          }
      else if (age_1_Number>age_3_Number) {
          return 'Keep calm and look Culture channel'
          }
      else {return 'Technical work'} 
          };
let age_1_input=prompt('Input Age_1: ','');
  let age_2_input=prompt('Input Age_2: ','');
  let age_3_input=prompt('Input Age_3: ','');
console.log(checkAge_4(age_1_input,age_2_input,age_3_input));