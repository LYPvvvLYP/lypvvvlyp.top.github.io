import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,o as t}from"./app-48rL9gLW.js";const r={};function n(l,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h2 id="spring-kafka-producer-parameters" tabindex="-1"><a class="header-anchor" href="#spring-kafka-producer-parameters"><span>Spring Kafka Producer Parameters</span></a></h2><h3 id="acks" tabindex="-1"><a class="header-anchor" href="#acks"><span><code>acks</code></span></a></h3><p>Specifies the acknowledgment level required before the producer considers a request complete. Common values include <code>0</code> (no acknowledgment), <code>1</code> (only the leader acknowledges), and <code>all</code> (all replicas acknowledge).</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.producer.acks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">all</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: <code>all</code> (to ensure high reliability)</p><h3 id="retries" tabindex="-1"><a class="header-anchor" href="#retries"><span><code>retries</code></span></a></h3><p>Specifies the number of retry attempts when a send fails. This helps enhance the reliability of message delivery.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.producer.retries</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: 3 or more, depending on application fault tolerance needs.</p><h3 id="batch-size" tabindex="-1"><a class="header-anchor" href="#batch-size"><span><code>batch.size</code></span></a></h3><p>Specifies the size (in bytes) of the batch sent by the producer. Increasing this value can boost throughput but may add latency.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.producer.batch-size</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">16384</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: 16384 (16KB), adjustable based on actual requirements.</p><h3 id="linger-ms" tabindex="-1"><a class="header-anchor" href="#linger-ms"><span><code>linger.ms</code></span></a></h3><p>Sets the time the producer waits before sending a batch of messages. Increasing this time can gather more messages to improve throughput.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.producer.linger-ms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: 1 (to reduce latency), can be adjusted higher to increase throughput.</p><h2 id="spring-kafka-consumer-parameters" tabindex="-1"><a class="header-anchor" href="#spring-kafka-consumer-parameters"><span>Spring Kafka Consumer Parameters</span></a></h2><h3 id="auto-offset-reset" tabindex="-1"><a class="header-anchor" href="#auto-offset-reset"><span><code>auto.offset.reset</code></span></a></h3><p>Specifies what the consumer should do when it cannot find the initial offset or if the current offset does not exist on the server. Options include <code>earliest</code> (reads from the earliest available data) and <code>latest</code> (reads from the latest data).</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.auto-offset-reset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">earliest</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: <code>earliest</code> (to ensure no messages are missed)</p><h3 id="enable-auto-commit" tabindex="-1"><a class="header-anchor" href="#enable-auto-commit"><span><code>enable.auto.commit</code></span></a></h3><p>Controls whether offsets are automatically committed. If set to <code>true</code>, the consumer periodically commits offsets. Set to <code>false</code> if you prefer to manage offset commits manually.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.enable-auto-commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: <code>false</code> (for precise manual control of commits)</p><h3 id="auto-commit-interval-ms" tabindex="-1"><a class="header-anchor" href="#auto-commit-interval-ms"><span><code>auto.commit.interval.ms</code></span></a></h3><p>Controls the interval for automatically committing offsets. This parameter specifies the interval (in milliseconds) at which offsets are automatically committed when <code>enable.auto.commit</code> is set to <code>true</code>.</p><p>If you set the auto-commit interval to 5000 milliseconds (5 seconds), you can configure it as follows:</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.enable-auto-commit</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.auto-commit-interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">5000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The recommended value depends on your application scenario:</p><ul><li><strong>Low-latency applications</strong>: For low latency with tolerance for more frequent reprocessing, set a shorter interval, such as 1000 milliseconds (1 second).</li><li><strong>High-throughput applications</strong>: To minimize commit overhead, set a longer interval, such as 5000 milliseconds (5 seconds) or longer.</li></ul><h3 id="max-poll-records" tabindex="-1"><a class="header-anchor" href="#max-poll-records"><span><code>max.poll.records</code></span></a></h3><p>Specifies the maximum number of records returned in a single call to <code>poll()</code>. This helps control the amount of data processed per poll to avoid delays.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.max-poll-records</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">500</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: 500 (adjust based on throughput needs)</p><h3 id="max-poll-interval-ms" tabindex="-1"><a class="header-anchor" href="#max-poll-interval-ms"><span><code>max.poll.interval.ms</code></span></a></h3><p>Controls the maximum time between consecutive <code>poll</code> calls. This parameter ensures the consumer calls <code>poll()</code> within the specified interval. If the interval is exceeded without calling <code>poll()</code>, Kafka considers the consumer inactive and reassigns the partition to another group member.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.max-poll-interval</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">300000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The recommended value depends on your application scenario:</p><ul><li><strong>Low-latency applications</strong>: For quick detection of consumer inactivity, set a shorter interval, such as 30000 milliseconds (30 seconds).</li><li><strong>High-throughput applications</strong>: For complex processing logic requiring more time, set a longer interval, such as 300000 milliseconds (5 minutes) or longer.</li></ul><h3 id="session-timeout-ms" tabindex="-1"><a class="header-anchor" href="#session-timeout-ms"><span><code>session.timeout.ms</code></span></a></h3><p>Specifies the session timeout between the consumer and Kafka server. If no heartbeat is received within this time, Kafka considers the consumer inactive and rebalances the partitions.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.session.timeout.ms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">10000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Recommended value</strong>: 10000 milliseconds (10 seconds), adjustable based on actual needs.</p><h3 id="request-timeout-ms" tabindex="-1"><a class="header-anchor" href="#request-timeout-ms"><span><code>request.timeout.ms</code></span></a></h3><p>Controls the request timeout for consumer requests to the Kafka server. This parameter specifies the maximum time to wait for a response. If no response is received within this time, the request is considered failed and error handling (like retries) is triggered.</p><div class="language-properties line-numbers-mode" data-highlighter="shiki" data-ext="properties" data-title="properties" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#C678DD;">spring.kafka.consumer.request.timeout.ms</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379;">30000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The recommended value depends on your application scenario:</p><ul><li><strong>Low-latency applications</strong>: For quick timeout detection, set a shorter interval, such as 10000 milliseconds (10 seconds).</li><li><strong>High-reliability applications</strong>: For better network conditions and response tolerance, set a longer interval, such as 60000 milliseconds (60 seconds).</li></ul>`,50)]))}const h=i(r,[["render",n],["__file","Spring-Kafka-Parameters.html.vue"]]),c=JSON.parse('{"path":"/Computer/Spring-Kafka-Parameters.html","title":"Spring Kafka Parameters","lang":"en-US","frontmatter":{"date":"2024-12-03T17:57:37.000Z","updated":"2024-12-06T13:40:31.000Z","title":"Spring Kafka Parameters","shortTitle":"Spring Kafka Parameters","description":"Explore the best practices for parameter configuration in Spring Kafka: covering producer and consumer parameter optimization, serialization settings, error handling, and load balancing strategies to improve data stream processing performance and reliability.","category":["Computer"],"tag":["Kafka"]Activiti介绍\\"博客文章写一个标题，要求语气亲切，写10个\\n为\\"Activiti介绍\\"博客文章写一个description，用于谷歌seo\\n你是一个资深Kafka程序员，请为\\"Spring Kafka 参数\\"博客文章写一个description，描述中包含专业术语，用于谷歌seo，用中文，字数在150字符以内，语气专业且吸引人。\\n"},"headers":[{"level":2,"title":"Spring Kafka Producer Parameters","slug":"spring-kafka-producer-parameters","link":"#spring-kafka-producer-parameters","children":[{"level":3,"title":"acks","slug":"acks","link":"#acks","children":[]},{"level":3,"title":"retries","slug":"retries","link":"#retries","children":[]},{"level":3,"title":"batch.size","slug":"batch-size","link":"#batch-size","children":[]},{"level":3,"title":"linger.ms","slug":"linger-ms","link":"#linger-ms","children":[]}]},{"level":2,"title":"Spring Kafka Consumer Parameters","slug":"spring-kafka-consumer-parameters","link":"#spring-kafka-consumer-parameters","children":[{"level":3,"title":"auto.offset.reset","slug":"auto-offset-reset","link":"#auto-offset-reset","children":[]},{"level":3,"title":"enable.auto.commit","slug":"enable-auto-commit","link":"#enable-auto-commit","children":[]},{"level":3,"title":"auto.commit.interval.ms","slug":"auto-commit-interval-ms","link":"#auto-commit-interval-ms","children":[]},{"level":3,"title":"max.poll.records","slug":"max-poll-records","link":"#max-poll-records","children":[]},{"level":3,"title":"max.poll.interval.ms","slug":"max-poll-interval-ms","link":"#max-poll-interval-ms","children":[]},{"level":3,"title":"session.timeout.ms","slug":"session-timeout-ms","link":"#session-timeout-ms","children":[]},{"level":3,"title":"request.timeout.ms","slug":"request-timeout-ms","link":"#request-timeout-ms","children":[]}]}],"git":{"createdTime":1733463231000,"updatedTime":1733493318000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":2}]},"readingTime":{"minutes":2.81,"words":842},"filePathRelative":"Computer/Spring Kafka Parameters.md","localizedDate":"December 4, 2024","excerpt":"<h2>Spring Kafka Producer Parameters</h2>\\n<h3><code>acks</code></h3>\\n<p>Specifies the acknowledgment level required before the producer considers a request complete. Common values include <code>0</code> (no acknowledgment), <code>1</code> (only the leader acknowledges), and <code>all</code> (all replicas acknowledge).</p>"}');export{h as comp,c as data};
