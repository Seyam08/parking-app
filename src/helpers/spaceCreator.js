export function spaceCreator(num) {
    const limit = 18;
    if (num > limit) {
      alert(
        `The number exceeds the limit of ${limit}. Defaulting to ${limit}.`
      );
      num = limit;
    }

    const spotsArray = [];
    for (let i = 1; i <= num; i++) {
      spotsArray.push({ spot: `A${i}`, stauts: "empty" });
    }

    return spotsArray;
  }

