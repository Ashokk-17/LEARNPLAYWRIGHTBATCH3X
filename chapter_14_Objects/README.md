# Chapter 14 - Objects

This chapter covers JavaScript objects — literals, dot/bracket notation, primitive vs. reference (copy-by-value vs. copy-by-reference) semantics, adding/deleting properties, `Object.keys`/`values`/`entries`, destructuring (renaming, defaults, nested), the spread operator, getters/setters, and `let` vs `const` with objects.

## Files

| File | Topic |
|---|---|
| [124_Objects.js](124_Objects.js) | Empty object literal vs. an object with key-value pairs |
| [125_Objects1.js](125_Objects1.js) | Objects are assigned by reference — mutating through one variable affects every variable pointing at the same object; `===` compares references, not contents |
| [126_Objects_Creation.js](126_Objects_Creation.js) | Two objects with identical contents are still separate references (`===` is `false`) |
| [127_Objects_real.js](127_Objects_real.js) | Building up a config object dynamically (adding properties, `delete`), then branching on a property value |
| [128_Premitivi_ref.js](128_Premitivi_ref.js) | Primitives copy by value vs. objects copy by reference, side by side |
| [129_Obj_Example.js](129_Obj_Example.js) | JSON-style quoted keys vs. plain JS keys — same object either way |
| [130_IQ.js](130_IQ.js) | Dot vs. bracket notation, dynamic property access via a variable key, adding/modifying properties, `Object.getOwnPropertyDescriptor()` |
| [131_Object_FN.js](131_Object_FN.js) | Object methods (shorthand method syntax like `add(n) {}`) |
| [132_Object_Decon.js](132_Object_Decon.js) | Destructuring: basic, renaming variables, default values, and nested destructuring |
| [133_Spread.js](133_Spread.js) | Spread operator (`{ ...obj }`) for shallow-copying an object, plus mutating vs. reassigning a config object |
| [134_Obj_Get_Set.js](134_Obj_Get_Set.js) | Getters and setters (`get fullName()` / `set fullName()`) and `this` |
| [135_IQ.js](135_IQ.js) | `Object.keys()` / `.values()` / `.entries()`, and iterating with `for...in` |
| [136_Object_Real.js](136_Object_Real.js) | Real-world config objects: environment settings, nested test-user credentials, reading `process.env` with a fallback |
| [137_Let_const_obj.js](137_Let_const_obj.js) | `let` vs `const` with objects — both allow mutating properties; only `let` allows reassigning the whole object |

## Run any file

```
node chapter_14_Objects/<file>.js
```
