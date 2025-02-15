/**
 * numOfOccurences()
 *  Write an algorithm that takes in a string and determines how many of each letter there is, casing should not matter.
 * @param {string} str - A string of letters.
 * @returns {Object} letterCount - An object of all the letters w the number of times they appear in the string
 * 
 * EXAMPLE:
 *  const myString = "ccabbabbcbcb"
 *  numOfOccurences(myString);
 *  //> { a: 2, b: 6, c: 4 }
 * 
 */
 function numOfOccurences(str){
    
    if (typeof str !== "string"){
      return `str must be a string`
    } else if (str.length ===0){
      return `str must have atleast one element`
    }
    let accumulator ={};
    
    for (let i = 0; i < str.length; i++){
    const letter = str[i].toLowerCase();
  
    if (!accumulator[letter]){
      accumulator[letter] = 1
    }else {
      accumulator[letter] += 1
    }
  }
  
  return accumulator
  }
  // console.log(numOfOccurences("AccabbabbcbcbB"))
  /**
   * targetLetters()
   * ----------------
   * Write an algorithm that takes in an Object that has letters as the keys and a number as the value, that will return an Array of any letters that have a value greater than the "target"
   * @param {Object} letters - An object holding all the letters w their values
   * @param {Number} target - A number 
   * @returns {String[]} - An array of strings representing each letter than has a value higher than the target
   * 
   * EXAMPLE:
   *  const myLetters = { a: 2, b: 6, c: 4 }
   *  targetLetters(myLetters, 3);
   *  //> ["b", "c"]
   * 
   */
   const myLetters= numOfOccurences("AccabbabbcbcbB")
  
  function targetLetters(letters,target){
    // guard clause
    // Make sure each value in letters is a number
    for (const key in letters) {
        if (letters[key] !== 'number'){
            return `one of the values is not a number`
        }
        }
    // make sure target is a number
    if (typeof target !== 'number'){
        return `Target must be a number`
    }
    
    //initialize accumulator
    let accumulator = []
  
    for (const key in letters) {
    //   prints out each key
    //   console.log("Key:", key)
    //   prints out value for each key
    //   console.log("Value:", letters[key])
    let 

    if ( letters[key] > target){
        accumulator.push(key)
    } else if (letters[key < target]){

    }
    }
  
    return accumulator
  }
  
//   console.log(targetLetters(myLetters,3))
  /**
   * getCartTotal()
   * -----------------
   * Write an algorithm that will determine the total amount of all items in the cart. 
   * @param {Object[]} products - An array of products.
   * @param {number} products[].priceInCents - The price of the product, in cents.
   * @param {number} products[].quantity - The number of products being bought.
   * @returns {string} A formatted representation of the total, rounded to two decimal places.
   * 
   * EXAMPLE:
   *  const cart = [
        { name: "T-Shirt", priceInCents: 1200, quantity: 1 },
        { name: "Socks", priceInCents: 900, quantity: 2 },
      ];
      getCartTotal(cart);
   *  //> "$30.00"
   */

    function getCartTotal(products){
    // 
    let accumulator = 0

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        accumulator += product.priceInCents * product.quantity
    }
        accumulator /= 100

        accumulator = accumulator.toFixed(2)
        
        return `$${accumulator}`
    }
    const cart = [
        { name: "T-Shirt", priceInCents: 1200, quantity: 1 },
        { name: "Socks", priceInCents: 900, quantity: 2 },
      ];
    console.log(getCartTotal(cart))


  