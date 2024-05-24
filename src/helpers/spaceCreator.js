export function spaceCreator(num) {
    if (num > 18) {
      alert("There is no more space for more than 16! Defaulting to 18.");
      num = 18;
    }
    let array = [];
    for (let i = 1; i <= num; i++) {
      let obj = {};
      obj["A" + i] = "empty";
      array.push(obj);
    }
    return array;
  }

