function removeCircularWithMeta(obj, seen = new WeakMap(), path = '') {
    if (obj !== null && typeof obj === 'object') {
      if (seen.has(obj)) return `[Circular → ${seen.get(obj)}]`;
      seen.set(obj, path);
      const result = Array.isArray(obj) ? [] : {};
      for (const key in obj) {
        result[key] = removeCircularWithMeta(obj[key], seen, `${path}/${key}`);
      }
      return result;
    }
    return obj;
  }
  // Create objects with circular references
const objA = { name: "A" };
const objB = { name: "B", parent: objA };
objA.child = objB; // Internal circular reference: A → B → A

const objC = { name: "C" };
const objD = { name: "D" };
objC.link = objD;
objD.link = objC; // External circular reference: C → D → C

// Big JSON structure with both types of circular references
const bigJson = {
  node1: objA,
  node2: objC
};
const cleanedJson = removeCircularWithMeta(bigJson);
console.log(JSON.stringify(cleanedJson, null, 2));