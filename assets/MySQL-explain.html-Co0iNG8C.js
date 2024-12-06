import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as r,o as d}from"./app-48rL9gLW.js";const t={};function s(c,e){return d(),n("div",null,e[0]||(e[0]=[r('<p><code>type</code> 字段表示了 MySQL 选择的表连接类型，也就是查询执行过程中扫描表的方式。连接类型的优劣顺序，从最佳到最差依次为：<code>system</code>、<code>const</code>、<code>eq_ref</code>、<code>ref</code>、<code>range</code>、<code>index</code>、<code>ALL</code>。下面我们逐一进行介绍。</p><h2 id="system" tabindex="-1"><a class="header-anchor" href="#system"><span><code>system</code></span></a></h2><p><strong>解释</strong>: 表示查询的表只有一行（等同于系统表）。这是最优的连接类型之一，因为它表示表非常小，几乎不需要扫描。</p><p><strong>示例</strong>: 适用于查询静态配置或字典表。</p><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const"><span><code>const</code></span></a></h2><p><strong>解释</strong>: 表示表最多有一个匹配行，通常用于主键或唯一索引查询。这种连接类型非常高效。</p><p><strong>示例</strong>: <code>SELECT * FROM users WHERE id = 1;</code></p><h2 id="eq-ref" tabindex="-1"><a class="header-anchor" href="#eq-ref"><span><code>eq_ref</code></span></a></h2><p><strong>解释</strong>: 对于每一个来自前一个表的行，MySQL 从当前表中读取一行。通常用于带有主键或唯一索引的联接查询。</p><p><strong>示例</strong>: <code>SELECT * FROM orders JOIN customers ON orders.customer_id = customers.id;</code></p><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref"><span><code>ref</code></span></a></h2><p><strong>解释</strong>: 表示对前一个表的每一行进行索引查找。适用于使用非唯一索引或前缀索引的查询。</p><p><strong>示例</strong>: <code>SELECT * FROM orders WHERE customer_id = 1;</code></p><h2 id="range" tabindex="-1"><a class="header-anchor" href="#range"><span><code>range</code></span></a></h2><p><strong>解释</strong>: 只检索给定范围内的行，使用一个索引来选择行。这种方式比全表扫描高效，但不如 <code>ref</code>。</p><p><strong>示例</strong>: <code>SELECT * FROM orders WHERE order_date BETWEEN &#39;2022-01-01&#39; AND &#39;2022-12-31&#39;;</code></p><h2 id="index" tabindex="-1"><a class="header-anchor" href="#index"><span><code>index</code></span></a></h2><p><strong>解释</strong>: 全索引扫描，遍历整个索引树，而不访问表。通常比全表扫描（<code>ALL</code>）更快，但仍然可能非常耗费资源。</p><p><strong>示例</strong>: <code>SELECT id FROM orders;</code></p><h2 id="all" tabindex="-1"><a class="header-anchor" href="#all"><span><code>ALL</code></span></a></h2><p><strong>解释</strong>: 全表扫描，是最差的连接类型。MySQL 必须检查表中的每一行来找到匹配的记录。</p><p><strong>示例</strong>: <code>SELECT * FROM orders;</code></p>',22)]))}const l=o(t,[["render",s],["__file","MySQL-explain.html.vue"]]),p=JSON.parse('{"path":"/zh/Computer/MySQL/MySQL-explain.html","title":"MySQL explain","lang":"zh-CN","frontmatter":{"date":"2024-12-03T17:57:37.000Z","updated":"2024-12-05T21:08:15.000Z","title":"MySQL explain","shortTitle":"MySQL explain","description":"深入解析MySQL EXPLAIN语句，了解查询优化和性能调优的关键技术，助您掌握查询执行计划分析，提升数据库效率，优化大数据处理能力。","category":["计算机"],"tag":["MySQL"]Activiti介绍\\"博客文章写一个标题，要求语气亲切，写10个\\n你是一个mysql专家，请为\\"MySQL explain语句\\"博客文章写一个description，描述中包含专业术语，用于谷歌seo，用中文，字数在150字符以内，语气专业且吸引人。\\n"},"headers":[{"level":2,"title":"system","slug":"system","link":"#system","children":[]},{"level":2,"title":"const","slug":"const","link":"#const","children":[]},{"level":2,"title":"eq_ref","slug":"eq-ref","link":"#eq-ref","children":[]},{"level":2,"title":"ref","slug":"ref","link":"#ref","children":[]},{"level":2,"title":"range","slug":"range","link":"#range","children":[]},{"level":2,"title":"index","slug":"index","link":"#index","children":[]},{"level":2,"title":"ALL","slug":"all","link":"#all","children":[]}],"git":{"createdTime":1733225961000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":2}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"zh/Computer/MySQL/MySQL explain.md","localizedDate":"2024年12月4日","excerpt":"<p><code>type</code> 字段表示了 MySQL 选择的表连接类型，也就是查询执行过程中扫描表的方式。连接类型的优劣顺序，从最佳到最差依次为：<code>system</code>、<code>const</code>、<code>eq_ref</code>、<code>ref</code>、<code>range</code>、<code>index</code>、<code>ALL</code>。下面我们逐一进行介绍。</p>\\n<h2><code>system</code></h2>\\n<p><strong>解释</strong>: 表示查询的表只有一行（等同于系统表）。这是最优的连接类型之一，因为它表示表非常小，几乎不需要扫描。</p>"}');export{l as comp,p as data};
