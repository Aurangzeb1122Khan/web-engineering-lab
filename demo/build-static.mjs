import { mkdirSync, writeFileSync } from &quot;node:fs&quot;;
import { page, time } from &quot;./page.mjs&quot;;
mkdirSync(&quot;demo/dist&quot;, { recursive: true });
writeFileSync(
&quot;demo/dist/ssg.html&quot;,
page(&quot;SSG&quot;, `&lt;p id=&quot;time&quot;&gt;Built at ${time()}&lt;/p&gt;`),
);
console.log(&quot;Wrote demo/dist/ssg.html&quot;);