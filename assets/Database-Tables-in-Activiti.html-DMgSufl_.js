import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as n,o as r}from"./app-48rL9gLW.js";const o={};function l(a,t){return r(),e("div",null,t[0]||(t[0]=[n('<h2 id="activiti-数据库表概览" tabindex="-1"><a class="header-anchor" href="#activiti-数据库表概览"><span>Activiti 数据库表概览</span></a></h2><p>Activiti 使用了多张数据库表来存储流程定义、流程实例、任务、历史数据等信息。以下是一些主要的表及其功能：</p><h3 id="_1-act-re-系列表-repository-表" tabindex="-1"><a class="header-anchor" href="#_1-act-re-系列表-repository-表"><span>1. <code>ACT_RE_*</code> 系列表（Repository 表）</span></a></h3><ul><li><strong>ACT_RE_DEPLOYMENT</strong>：存储部署信息，每次流程定义的部署都会生成一条记录。</li><li><strong>ACT_RE_PROCDEF</strong>：存储流程定义信息，包括流程的 ID、名称、版本等。</li></ul><h3 id="_2-act-ru-系列表-runtime-表" tabindex="-1"><a class="header-anchor" href="#_2-act-ru-系列表-runtime-表"><span>2. <code>ACT_RU_*</code> 系列表（Runtime 表）</span></a></h3><ul><li><strong>ACT_RU_EXECUTION</strong>：存储运行时流程实例信息，每个流程实例对应一条记录。</li><li><strong>ACT_RU_TASK</strong>：存储运行时任务信息，包括任务的 ID、名称、指派人等。</li><li><strong>ACT_RU_IDENTITYLINK</strong>：存储任务与用户或组的关系信息。</li><li><strong>ACT_RU_VARIABLE</strong>：存储运行时流程变量信息。</li></ul><h3 id="_3-act-hi-系列表-history-表" tabindex="-1"><a class="header-anchor" href="#_3-act-hi-系列表-history-表"><span>3. <code>ACT_HI_*</code> 系列表（History 表）</span></a></h3><ul><li><strong>ACT_HI_PROCINST</strong>：存储历史流程实例信息，记录已经完成的流程实例。</li><li><strong>ACT_HI_TASKINST</strong>：存储历史任务信息，记录已经完成的任务。</li><li><strong>ACT_HI_VARINST</strong>：存储历史流程变量信息。</li></ul><h2 id="各表之间的关联关系" tabindex="-1"><a class="header-anchor" href="#各表之间的关联关系"><span>各表之间的关联关系</span></a></h2><h3 id="_1-流程定义与部署" tabindex="-1"><a class="header-anchor" href="#_1-流程定义与部署"><span>1. 流程定义与部署</span></a></h3><ul><li><strong>ACT_RE_DEPLOYMENT</strong>表和<strong>ACT_RE_PROCDEF</strong>表之间通过 <code>DEPLOYMENT_ID_</code>行关联。一个部署可以包含多个流程定义。</li></ul><h3 id="_2-流程实例与任务" tabindex="-1"><a class="header-anchor" href="#_2-流程实例与任务"><span>2. 流程实例与任务</span></a></h3><ul><li><strong>ACT_RU_EXECUTION</strong>表和<strong>ACT_RU_TASK</strong>表之间通过 <code>PROC_INST_ID_</code>进行关联。一个流程实例可以包含多个任务。</li><li><strong>ACT_RU_TASK</strong>表中的 <code>EXECUTION_ID_</code> 与<strong>ACT_RU_EXECUTION</strong>表的 <code>ID_</code>相关联，表示任务属于哪个执行流。</li></ul><h3 id="_3-任务与用户-组" tabindex="-1"><a class="header-anchor" href="#_3-任务与用户-组"><span>3. 任务与用户/组</span></a></h3><ul><li><strong>ACT_RU_IDENTITYLINK</strong>表中的 <code>TASK_ID_</code> 与<strong>ACT_RU_TASK</strong>表的 <code>ID_</code> 相关联，表示任务与用户或组的关系。</li></ul><h3 id="_4-运行时与历史数据" tabindex="-1"><a class="header-anchor" href="#_4-运行时与历史数据"><span>4. 运行时与历史数据</span></a></h3><ul><li><strong>ACT_RU_EXECUTION</strong>表的 <code>PROC_INST_ID_</code> 与<strong>ACT_HI_PROCINST</strong>表的 <code>ID_</code>相关联，记录流程实例的运行时和历史信息。</li><li><strong>ACT_RU_TASK</strong>表的 <code>ID_</code> 与<strong>ACT_HI_TASKINST</strong>表的 <code>ID_</code> 相关联，记录任务的运行时和历史信息。</li></ul>',17)]))}const _=i(o,[["render",l],["__file","Database-Tables-in-Activiti.html.vue"]]),d=JSON.parse('{"path":"/zh/Computer/Activiti/Database-Tables-in-Activiti.html","title":"Activiti中的数据库表：管理流程的基石","lang":"zh-CN","frontmatter":{"date":"2024-12-03T12:19:17.000Z","updated":"2024-12-04T13:23:12.000Z","title":"Activiti中的数据库表：管理流程的基石","shortTitle":"Activiti 库表","description":"本文深入解析了Activiti流程引擎中的各个数据库表及其存储的信息，揭示了它们之间的关联关系。通过详细的实例和清晰的解释，帮助读者全面了解如何利用Activiti库表进行高效的业务流程管理和优化。无论你是初学者还是有经验的开发者，这篇文章都将为你提供宝贵的知识和实用的技巧。","category":["计算机"],"tag":["审批","Activiti"]Activiti 库表\\"博客文章写一个标题，要求语气亲切，写10个\\n为\\"Activiti 库表\\"博客文章写一个description，用于谷歌seo\\n"},"headers":[{"level":2,"title":"Activiti 数据库表概览","slug":"activiti-数据库表概览","link":"#activiti-数据库表概览","children":[{"level":3,"title":"1. ACT_RE_* 系列表（Repository 表）","slug":"_1-act-re-系列表-repository-表","link":"#_1-act-re-系列表-repository-表","children":[]},{"level":3,"title":"2. ACT_RU_* 系列表（Runtime 表）","slug":"_2-act-ru-系列表-runtime-表","link":"#_2-act-ru-系列表-runtime-表","children":[]},{"level":3,"title":"3. ACT_HI_* 系列表（History 表）","slug":"_3-act-hi-系列表-history-表","link":"#_3-act-hi-系列表-history-表","children":[]}]},{"level":2,"title":"各表之间的关联关系","slug":"各表之间的关联关系","link":"#各表之间的关联关系","children":[{"level":3,"title":"1. 流程定义与部署","slug":"_1-流程定义与部署","link":"#_1-流程定义与部署","children":[]},{"level":3,"title":"2. 流程实例与任务","slug":"_2-流程实例与任务","link":"#_2-流程实例与任务","children":[]},{"level":3,"title":"3. 任务与用户/组","slug":"_3-任务与用户-组","link":"#_3-任务与用户-组","children":[]},{"level":3,"title":"4. 运行时与历史数据","slug":"_4-运行时与历史数据","link":"#_4-运行时与历史数据","children":[]}]}],"git":{"createdTime":1733202711000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":2.27,"words":680},"filePathRelative":"zh/Computer/Activiti/Database Tables in Activiti.md","localizedDate":"2024年12月3日","excerpt":"<h2>Activiti 数据库表概览</h2>\\n<p>Activiti 使用了多张数据库表来存储流程定义、流程实例、任务、历史数据等信息。以下是一些主要的表及其功能：</p>\\n<h3>1. <code>ACT_RE_*</code> 系列表（Repository 表）</h3>\\n<ul>\\n<li><strong>ACT_RE_DEPLOYMENT</strong>：存储部署信息，每次流程定义的部署都会生成一条记录。</li>\\n<li><strong>ACT_RE_PROCDEF</strong>：存储流程定义信息，包括流程的 ID、名称、版本等。</li>\\n</ul>\\n<h3>2. <code>ACT_RU_*</code> 系列表（Runtime 表）</h3>"}');export{_ as comp,d as data};
