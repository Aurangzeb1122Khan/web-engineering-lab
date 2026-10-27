import { createServer } from &quot;node:http&quot;;
import { readFileSync } from &quot;node:fs&quot;;
import { page, time } from &quot;./page.mjs&quot;;
const sleep = (ms) =&gt; new Promise((resolve) =&gt; setTimeout(resolve, ms));
let isr = { html: &quot;&quot;, madeAt: 0 };
createServer(async (req, res) =&gt; {
res.setHeader(&quot;Content-Type&quot;, &quot;text/html; charset=utf-8&quot;);
if (req.url === &quot;/csr&quot;) {
res.end(
page(
&quot;CSR&quot;,
&#39;&lt;p id=&quot;time&quot;&gt;Loading…&lt;/p&gt;&#39;,
`&lt;script&gt;document.getElementById(&quot;time&quot;).textContent =
&quot;Rendered in the browser at &quot; + new Date().toLocaleTimeString();&lt;/script&gt;`,
),

Web Engineering
LAB 06 : Rendering Strategies and the React Mental Model

);
} else if (req.url === &quot;/ssr&quot;) {
res.end(page(&quot;SSR&quot;, `&lt;p id=&quot;time&quot;&gt;Rendered on the server at ${time()}&lt;/p&gt;`));
} else if (req.url === &quot;/ssg&quot;) {
res.end(readFileSync(&quot;demo/dist/ssg.html&quot;));
} else if (req.url === &quot;/isr&quot;) {
if (Date.now() - isr.madeAt &gt; 5000) {
isr = {
html: page(&quot;ISR&quot;, `&lt;p id=&quot;time&quot;&gt;Regenerated at ${time()}&lt;/p&gt;`),
madeAt: Date.now(),
};
}
res.end(isr.html);
} else if (req.url === &quot;/stream&quot;) {
res.write(
&#39;&lt;!doctype html&gt;&lt;html lang=&quot;en&quot;&gt;&lt;head&gt;&lt;meta charset=&quot;UTF-8&quot; /&gt;&#39; +
&quot;&lt;title&gt;Streaming&lt;/title&gt;&lt;/head&gt;&lt;body&gt;&lt;h1&gt;Streaming&lt;/h1&gt;&quot; +
&quot;&lt;p&gt;First chunk: sent immediately.&lt;/p&gt;&quot;,
);
await sleep(1500);
res.end(&quot;&lt;p&gt;Second chunk: sent 1.5 seconds later.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;&quot;);
} else {
res.end(
page(
&quot;Rendering demo&quot;,
&quot;&lt;ul&gt;&quot; +
[&quot;csr&quot;, &quot;ssr&quot;, &quot;ssg&quot;, &quot;isr&quot;, &quot;stream&quot;]
.map((p) =&gt; `&lt;li&gt;&lt;a href=&quot;/${p}&quot;&gt;/${p}&lt;/a&gt;&lt;/li&gt;`)
.join(&quot;&quot;) +
&quot;&lt;/ul&gt;&quot;,
),
);
}
}).listen(3000, () =&gt; console.log(&quot;Demo running at http://localhost:3000&quot;));