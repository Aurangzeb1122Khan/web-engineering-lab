export const page = (title, body, script = &quot;&quot;) =&gt; `&lt;!doctype html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
&lt;meta charset=&quot;UTF-8&quot; /&gt;
&lt;title&gt;${title}&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;${title}&lt;/h1&gt;
${body}
${script}
&lt;/body&gt;
&lt;/html&gt;
`;
export const time = () =&gt; new Date().toLocaleTimeString();