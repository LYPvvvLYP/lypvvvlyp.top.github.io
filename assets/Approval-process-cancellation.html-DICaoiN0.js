import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as l}from"./app-48rL9gLW.js";const e={};function h(t,s){return l(),a("div",null,s[0]||(s[0]=[n(`<h2 id="_1-获取流程实例" tabindex="-1"><a class="header-anchor" href="#_1-获取流程实例"><span>1. 获取流程实例</span></a></h2><p>在实现撤销功能时，首先需要获取到要撤销的流程实例。可以通过流程实例 ID 或业务关键字来查找流程实例：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ProcessEngine</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> processEngine </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> ProcessEngines</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getDefaultProcessEngine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">RuntimeService</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> runtimeService </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> processEngine</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getRuntimeService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ProcessInstance</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> processInstance </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> runtimeService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createProcessInstanceQuery</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">processInstanceId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;processInstanceId&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">singleResult</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-终止流程实例" tabindex="-1"><a class="header-anchor" href="#_2-终止流程实例"><span>2. 终止流程实例</span></a></h2><p>获取到流程实例后，可以调用<code>deleteProcessInstance</code>方法来终止该流程：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> (processInstance </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    runtimeService</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">deleteProcessInstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">processInstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;撤销审批流程&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;流程实例已撤销: &quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;"> processInstance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">());</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">} </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">else</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">    System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;未找到流程实例&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-更新数据库表" tabindex="-1"><a class="header-anchor" href="#_3-更新数据库表"><span>3. 更新数据库表</span></a></h2><p>在终止流程实例后，还需要更新数据库中的相关记录，确保数据的一致性。假设我们已经创建了以下数据库表：</p><ul><li><strong>Process_Instances</strong>: 存储流程实例的信息</li><li><strong>Approval_Tasks</strong>: 存储审批任务的信息</li><li><strong>Approval_Logs</strong>: 存储审批操作日志</li></ul><p>我们需要更新这些表中的记录，以反映撤销操作。例如：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 更新流程实例表，将状态设为已撤销</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Process_Instances</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Status</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;CANCELLED&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, Updated_At </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Process_Instance_ID </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ?;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 更新审批任务表，将相关任务设为已撤销</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">UPDATE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Approval_Tasks</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> Status</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;CANCELLED&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, Completed_At </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Process_Instance_ID </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ?;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 记录撤销操作日志</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">INSERT INTO</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Approval_Logs (Task_ID, Approver_ID, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Action</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">Timestamp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, Comments)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">VALUES</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (?, ?, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;CANCELLED&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">NOW</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(), </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;流程已撤销&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const r=i(e,[["render",h],["__file","Approval-process-cancellation.html.vue"]]),d=JSON.parse('{"path":"/zh/Computer/Approval/Approval-process-cancellation.html","title":"审批流程撤销指南：简单步骤确保流程无误","lang":"zh-CN","frontmatter":{"date":"2024-12-02T13:00:39.000Z","updated":"2024-12-04T13:12:54.000Z","title":"审批流程撤销指南：简单步骤确保流程无误","shortTitle":"审批流程撤销","description":"了解如何正确撤销审批流程，避免错误和混乱。本文详细解释审批流程撤销的步骤、注意事项和最佳实践，帮助您在业务管理中实现高效可靠的流程控制。","category":["计算机"],"tag":["审批"]审批流程撤销\\"博客文章写一个标题，要求清晰易懂\\n为\\"审批流程撤销\\"博客文章写一个description，用于谷歌seo\\n"},"headers":[{"level":2,"title":"1. 获取流程实例","slug":"_1-获取流程实例","link":"#_1-获取流程实例","children":[]},{"level":2,"title":"2. 终止流程实例","slug":"_2-终止流程实例","link":"#_2-终止流程实例","children":[]},{"level":2,"title":"3. 更新数据库表","slug":"_3-更新数据库表","link":"#_3-更新数据库表","children":[]}],"git":{"createdTime":1733202711000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":1.7,"words":510},"filePathRelative":"zh/Computer/Approval/Approval process cancellation.md","localizedDate":"2024年12月2日","excerpt":"<h2>1. 获取流程实例</h2>\\n<p>在实现撤销功能时，首先需要获取到要撤销的流程实例。可以通过流程实例 ID 或业务关键字来查找流程实例：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"java\\" data-title=\\"java\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ProcessEngine</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> processEngine </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> ProcessEngines</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getDefaultProcessEngine</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">RuntimeService</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> runtimeService </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> processEngine</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">getRuntimeService</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#C18401;--shiki-dark:#E5C07B\\">ProcessInstance</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\"> processInstance </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#E5C07B\\"> runtimeService</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">createProcessInstanceQuery</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    .</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">processInstanceId</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"processInstanceId\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">    .</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">singleResult</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">();</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};
