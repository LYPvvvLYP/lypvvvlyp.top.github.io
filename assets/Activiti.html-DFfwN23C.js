import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as t}from"./app-48rL9gLW.js";const n={};function l(r,s){return t(),e("div",null,s[0]||(s[0]=[a(`<h2 id="what-is-activiti" tabindex="-1"><a class="header-anchor" href="#what-is-activiti"><span>What is Activiti</span></a></h2><p>Activiti is a lightweight, open-source business process management (BPM) and workflow engine. It is developed based on Java and complies with BPMN 2.0 (Business Process Model and Notation) standards. Activiti can be used to design, deploy, execute, and monitor business processes, helping enterprises achieve business process automation and optimization.</p><h2 id="core-components" tabindex="-1"><a class="header-anchor" href="#core-components"><span>Core Components</span></a></h2><ol><li><strong>Process Engine</strong>: The core of Activiti, used to execute business processes defined by BPMN 2.0.</li><li><strong>Modeler</strong>: A web-based process design tool that allows users to design business processes through drag and drop.</li><li><strong>Designer</strong>: An Eclipse plugin for designing business processes in the Eclipse environment.</li><li><strong>Explorer</strong>: A management console for deploying, starting, managing, and monitoring business processes.</li><li><strong>REST API</strong>: Activiti provides rich REST interfaces for easy integration with other systems.</li></ol><h3 id="key-features" tabindex="-1"><a class="header-anchor" href="#key-features"><span>Key Features</span></a></h3><ol><li><strong>Process Design</strong>: Supports BPMN 2.0 standards and can design complex business processes using graphical tools.</li><li><strong>Process Deployment</strong>: The designed processes can be deployed to the process engine for business use.</li><li><strong>Process Execution</strong>: The Activiti engine can automatically execute various tasks and nodes according to the process definition.</li><li><strong>Task Management</strong>: Supports task assignment, delegation, completion, and other operations, making task management convenient.</li><li><strong>Historical Data</strong>: Records historical data of process execution, which can be used for process analysis and optimization.</li><li><strong>Integration Capabilities</strong>: Supports integration with various external systems, such as ERP systems, CRM systems, etc.</li></ol><h2 id="use-cases" tabindex="-1"><a class="header-anchor" href="#use-cases"><span>Use Cases</span></a></h2><ol><li><strong>Approval Processes</strong>: Such as procurement approval, expense reimbursement approval, etc.</li><li><strong>Order Processing</strong>: Includes order reception, processing, shipping, etc.</li><li><strong>Human Resource Management</strong>: Processes such as employee onboarding, offboarding, leave requests, etc.</li><li><strong>Customer Service</strong>: Processes such as handling customer complaints, service requests, etc.</li></ol><h2 id="advantages" tabindex="-1"><a class="header-anchor" href="#advantages"><span>Advantages</span></a></h2><ol><li><strong>Open Source</strong>: Free to use and extend, customizable according to enterprise needs.</li><li><strong>Standardization</strong>: Complies with BPMN 2.0 standards, ensuring unified process design and execution specifications.</li><li><strong>Ease of Use</strong>: Offers graphical design tools and rich APIs, making it easy to get started and integrate.</li><li><strong>Flexibility</strong>: Supports complex process logic and various task types, meeting different business needs.</li></ol><h2 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code"><span>Example Code</span></a></h2><p>Here is a simple Activiti process definition example showcasing an approval process:</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">definitions</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> xmlns</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.omg.org/spec/BPMN/20100524/MODEL&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">             xmlns:xsi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">             targetNamespace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.activiti.org/test&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">process</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;approvalProcess&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Approval Process&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">startEvent</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;startEvent&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Start&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">startEvent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sequenceFlow</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;flow1&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> sourceRef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;startEvent&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> targetRef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;userTask1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sequenceFlow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">userTask</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;userTask1&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Approval Task&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> activiti:assignee</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;manager&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">userTask</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sequenceFlow</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;flow2&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> sourceRef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;userTask1&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> targetRef</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;endEvent&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sequenceFlow</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">endEvent</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;endEvent&quot;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;End&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">endEvent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">process</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">definitions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This example showcases a simple approval process including a start event, user task, and end event.</p>`,14)]))}const o=i(n,[["render",l],["__file","Activiti.html.vue"]]),k=JSON.parse('{"path":"/Computer/Activiti/Activiti.html","title":"Introducing Activiti: A Tool for Open Source Process Management","lang":"en-US","frontmatter":{"date":"2024-12-03T12:19:17.000Z","updated":"2024-12-04T13:30:40.000Z","title":"Introducing Activiti: A Tool for Open Source Process Management","shortTitle":"Activiti","description":"This article provides an in-depth introduction to the Activiti process engine, revealing its powerful features and application examples in enterprise business process management. Through detailed user guides and practical case studies, help enterprise users easily get started with Activiti, achieve process automation and efficiency optimization. Understand the core components and integration methods of Activiti to make business process management simple and efficient.","category":["Computer"],"tag":["Approval","Activiti"]Activiti介绍\\"博客文章写一个标题，要求语气亲切，写10个\\n为\\"Activiti介绍\\"博客文章写一个description，用于谷歌seo\\n"},"headers":[{"level":2,"title":"What is Activiti","slug":"what-is-activiti","link":"#what-is-activiti","children":[]},{"level":2,"title":"Core Components","slug":"core-components","link":"#core-components","children":[{"level":3,"title":"Key Features","slug":"key-features","link":"#key-features","children":[]}]},{"level":2,"title":"Use Cases","slug":"use-cases","link":"#use-cases","children":[]},{"level":2,"title":"Advantages","slug":"advantages","link":"#advantages","children":[]},{"level":2,"title":"Example Code","slug":"example-code","link":"#example-code","children":[]}],"git":{"createdTime":1733409411000,"updatedTime":1733409411000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":2.04,"words":613},"filePathRelative":"Computer/Activiti/Activiti.md","localizedDate":"December 3, 2024","excerpt":"<h2>What is Activiti</h2>\\n<p>Activiti is a lightweight, open-source business process management (BPM) and workflow engine. It is developed based on Java and complies with BPMN 2.0 (Business Process Model and Notation) standards. Activiti can be used to design, deploy, execute, and monitor business processes, helping enterprises achieve business process automation and optimization.</p>"}');export{o as comp,k as data};
