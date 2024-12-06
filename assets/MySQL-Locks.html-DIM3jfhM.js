import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as n,o as a}from"./app-48rL9gLW.js";const s={};function i(r,e){return a(),t("div",null,e[0]||(e[0]=[n('<h2 id="table-lock" tabindex="-1"><a class="header-anchor" href="#table-lock"><span>Table Lock</span></a></h2><p><strong>Description</strong>: Locks the entire table, typically used for bulk data operations. Table locks prevent other sessions from performing any read or write operations on the table.</p><p><strong>Example</strong>: <code>LOCK TABLES t1 WRITE;</code></p><h2 id="row-lock" tabindex="-1"><a class="header-anchor" href="#row-lock"><span>Row Lock</span></a></h2><p><strong>Description</strong>: Locks specific rows within a table, suitable for transactional processing. Row locks allow different transactions to lock different rows in the same table simultaneously.</p><p><strong>Example</strong>: <code>RECORD LOCKS space id 2969 page no 4 n bits 72 index &quot;PRIMARY&quot; of table &quot;test&quot;.&quot;t1&quot; trx id 123456 lock_mode X</code></p><h2 id="gap-lock" tabindex="-1"><a class="header-anchor" href="#gap-lock"><span>Gap Lock</span></a></h2><p><strong>Description</strong>: Locks the gaps between index records to prevent new records from being inserted within the range. Gap locks are primarily used to prevent phantom reads.</p><p><strong>Example</strong>: <code>RECORD LOCKS space id 2969 page no 4 n bits 72 index &quot;PRIMARY&quot; of table &quot;test&quot;.&quot;t1&quot; trx id 123456 lock_mode X locks gap before rec</code></p><h2 id="next-key-lock" tabindex="-1"><a class="header-anchor" href="#next-key-lock"><span>Next-Key Lock</span></a></h2><p><strong>Description</strong>: Combines row locks and gap locks to lock a row and the adjacent gap, preventing phantom reads.</p><p><strong>Example</strong>: <code>RECORD LOCKS space id 2969 page no 4 n bits 72 index &quot;PRIMARY&quot; of table &quot;test&quot;.&quot;t1&quot; trx id 123456 lock_mode X locks rec but not gap</code></p><h2 id="intention-lock" tabindex="-1"><a class="header-anchor" href="#intention-lock"><span>Intention Lock</span></a></h2><p><strong>Description</strong>: A table-level lock indicating an intention to set locks on certain rows. Intention locks resolve compatibility issues between table locks and row locks.</p><p><strong>Example</strong>: <code>TABLE LOCK table &#39;test.t1&#39; trx id 123456 lock_mode IX</code></p><h2 id="shared-lock" tabindex="-1"><a class="header-anchor" href="#shared-lock"><span>Shared Lock</span></a></h2><p><strong>Description</strong>: Allows multiple transactions to read the data simultaneously but not write. Shared locks are suitable for read-only operations.</p><p><strong>Example</strong>: <code>RECORD LOCKS space id 2969 page no 4 n bits 72 index &quot;PRIMARY&quot; of table &quot;test&quot;.&quot;t1&quot; trx id 123456 lock_mode S</code></p><h2 id="exclusive-lock" tabindex="-1"><a class="header-anchor" href="#exclusive-lock"><span>Exclusive Lock</span></a></h2><p><strong>Description</strong>: Allows a single transaction to read and write data, preventing access by other transactions. Exclusive locks are suitable for update operations.</p><p><strong>Example</strong>: <code>RECORD LOCKS space id 2969 page no 4 n bits 72 index &quot;PRIMARY&quot; of table &quot;test&quot;.&quot;t1&quot; trx id 123456 lock_mode X</code></p>',21)]))}const p=o(s,[["render",i],["__file","MySQL-Locks.html.vue"]]),d=JSON.parse('{"path":"/Computer/MySQL/MySQL-Locks.html","title":"MySQL Locks","lang":"en-US","frontmatter":{"date":"2024-12-03T12:19:17.000Z","updated":"2024-12-06T13:44:19.000Z","title":"MySQL Locks","shortTitle":"MySQL Locks","description":"This article comprehensively analyzes various lock mechanisms in MySQL, including shared locks, exclusive locks, intent locks, and deadlock handling, and explores their applications in transaction control and performance optimization, suitable for database development and operation experts.","category":["Computer"],"tag":["MySQL"]Activiti介绍\\"博客文章写一个标题，要求语气亲切，写10个\\n为\\"Activiti介绍\\"博客文章写一个description，用于谷歌seo\\n你是一个mysql专家，请为\\"MySQL 各种锁\\"博客文章写一个description，描述中包含专业术语，用于谷歌seo，用中文，字数在150字符以内，语气专业且吸引人。\\n"},"headers":[{"level":2,"title":"Table Lock","slug":"table-lock","link":"#table-lock","children":[]},{"level":2,"title":"Row Lock","slug":"row-lock","link":"#row-lock","children":[]},{"level":2,"title":"Gap Lock","slug":"gap-lock","link":"#gap-lock","children":[]},{"level":2,"title":"Next-Key Lock","slug":"next-key-lock","link":"#next-key-lock","children":[]},{"level":2,"title":"Intention Lock","slug":"intention-lock","link":"#intention-lock","children":[]},{"level":2,"title":"Shared Lock","slug":"shared-lock","link":"#shared-lock","children":[]},{"level":2,"title":"Exclusive Lock","slug":"exclusive-lock","link":"#exclusive-lock","children":[]}],"git":{"createdTime":1733225961000,"updatedTime":1733493318000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":2}]},"readingTime":{"minutes":1.75,"words":526},"filePathRelative":"Computer/MySQL/MySQL Locks.md","localizedDate":"December 3, 2024","excerpt":"<h2>Table Lock</h2>\\n<p><strong>Description</strong>: Locks the entire table, typically used for bulk data operations. Table locks prevent other sessions from performing any read or write operations on the table.</p>\\n<p><strong>Example</strong>: <code>LOCK TABLES t1 WRITE;</code></p>\\n<h2>Row Lock</h2>"}');export{p as comp,d as data};
