# Legacy Notes: jQuery to Native JavaScript

## Part 1: Six jQuery calls and their native equivalents

| # | jQuery | Native JavaScript | What it does |
|---|--------|-------------------|--------------|
| 1 | `$(document).ready(fn)` | `<script type="module">` or `document.addEventListener("DOMContentLoaded", fn)` | Runs code only after the page has loaded. Module scripts wait automatically. |
| 2 | `$("#name").val()` | `nameInput.value` | Reads the text typed in a form field. |
| 3 | `$("#name").after(html)` | `const span = document.createElement("span"); span.textContent = message; input.after(span);` | Inserts a new element right after another element. |
| 4 | `$(".error").remove()` | `form.querySelectorAll(".error").forEach((el) => el.remove());` | Deletes every old error message. |
| 5 | `$("#status").text(msg).hide().fadeIn(400)` | `status.textContent = msg;` (the fade is dropped; use a CSS transition if needed) | Shows text. Animation belongs in CSS, not JavaScript. |
| 6 | `$form[0].reset()` | `form.reset()` | Clears the form. `$form` is a jQuery wrapper, and `[0]` pulls out the real DOM element. In native code you already have the element, so no `[0]` is needed. |
## Part 2: Three legacy smells

1. **`var` for variables.**
   `var` is function-scoped and can be redeclared by accident.
   Modern code uses `const` (value never reassigned) and `let` (value changes).

2. **`$.trim(...)`.**
   This is a jQuery helper for something JavaScript now does itself with `.trim()`.
   It was removed in jQuery 4, so code using it breaks on upgrade.

3. **Building HTML as a string.**
   `'<span class="error" role="alert">...</span>'` is easy to get wrong, and if the
   string includes user input it can allow HTML injection (XSS).
   Native code uses `createElement` and `textContent`, which treat text as plain text.

**Bonus smell:** `email.indexOf("@") === -1` is an awkward way to ask "is it missing?".
Modern code writes `!email.includes("@")`, which reads like English.
## Task 6: First TypeScript errors

1. `src/feedback.ts:2:19 - error TS18047: 'form' is possibly 'null'`
   `querySelector` returns `Element | null`. If `<form>` were missing, the code
   would crash in the browser. `strictNullChecks` (part of `strict`) makes me
   check first. Fix: the `getRequired` helper.

2. `src/utils.ts:2:23 - error TS7006: Parameter 'ms' implicitly has an 'any' type`
   I never said what kind of value `ms` is. `noImplicitAny` (part of `strict`)
   forces me to write the type. Fix: `ms: number`.

   ## Task 11: Deliberate type error

I changed `delay(1000)` to `delay("1000")` and ran `npm run build`.
Error: `TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.`
`delay` is annotated `ms: number`. Because `noEmitOnError` is true, no JavaScript was
written, so the broken code could not reach the browser. I changed it back to
`delay(1000)` and the build succeeded.