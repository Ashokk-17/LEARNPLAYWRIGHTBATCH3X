//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

// ??  Nullish
let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);


// ---------- ?? only falls back on null or undefined, NOT other falsy values ----------
console.log(0 ?? "fallback");        // 0        -> 0 is not null/undefined, kept as-is
console.log("" ?? "fallback");       // ""       -> empty string kept as-is
console.log(false ?? "fallback");    // false    -> false kept as-is
console.log(undefined ?? "fallback");// "fallback" -> undefined triggers fallback
console.log(null ?? "fallback");     // "fallback" -> null triggers fallback

// Compare with || which falls back on ANY falsy value
console.log(0 || "fallback");        // "fallback" -> 0 is falsy, so || replaces it (this is the bug ?? fixes)


// ---------- ?? chaining: first non-null/undefined value wins ----------
let a = null;
let b = undefined;
let c = "actual value";
console.log(a ?? b ?? c ?? "final default"); // "actual value"


// ---------- ?? with function default: user settings example ----------
function getVolume(userSetting) {
  return userSetting ?? 50; // 50 is the default only if userSetting is null/undefined
}
console.log(getVolume(0));       // 0  -> user explicitly muted, 0 is respected
console.log(getVolume(null));    // 50 -> no setting provided, use default
console.log(getVolume(75));      // 75 -> user's own value


// ---------- ?.  Optional chaining (pairs well with ??) ----------
let user = { profile: { name: "Ashok" } };
let guest = null;

console.log(user?.profile?.name);        // "Ashok"
console.log(guest?.profile?.name);       // undefined -> no error, short-circuits safely
console.log(guest?.profile?.name ?? "No Name"); // "No Name" -> combine ?. and ??