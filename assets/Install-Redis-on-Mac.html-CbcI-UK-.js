import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as n}from"./app-48rL9gLW.js";const l={};function t(h,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h2 id="using-homebrew" tabindex="-1"><a class="header-anchor" href="#using-homebrew"><span>Using Homebrew</span></a></h2><p>Homebrew is a popular package manager for macOS. If we don&#39;t have Homebrew installed, we can install it using:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">/bin/bash</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;$(</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -fsSL</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Once Homebrew is installed, we can install Redis with:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">brew</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="using-macports" tabindex="-1"><a class="header-anchor" href="#using-macports"><span>Using MacPorts</span></a></h2><p>MacPorts is another package management system for macOS. If we don&#39;t have MacPorts installed, we can install it using:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> selfupdate</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> port</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-xcode" tabindex="-1"><a class="header-anchor" href="#using-xcode"><span>Using Xcode</span></a></h2><p>Apple ships a binary package of Redis with Xcode. If we have Xcode installed, we can use it to install Redis:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">xcode-select</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="using-a-binary-installer" tabindex="-1"><a class="header-anchor" href="#using-a-binary-installer"><span>Using a Binary Installer</span></a></h2><p>We can download a binary installer for Redis from the official Redis website. After downloading, we simply run the installer and follow the instructions.</p><h2 id="building-from-source" tabindex="-1"><a class="header-anchor" href="#building-from-source"><span>Building from Source</span></a></h2><p>If we prefer to build Redis from source, we can download the source code from the official Redis website and compile it:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -xzf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis-stable.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> redis-stable</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">make</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> make</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="verifying-the-installation" tabindex="-1"><a class="header-anchor" href="#verifying-the-installation"><span>Verifying the Installation</span></a></h2><p>To verify that Redis is installed correctly, we can check the version:</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">redis-server</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>These methods ensure that we can install Redis on our Mac in various ways, depending on our preferences and existing setup.</p>`,20)]))}const o=s(l,[["render",t],["__file","Install-Redis-on-Mac.html.vue"]]),c=JSON.parse('{"path":"/Computer/Install-Redis-on-Mac.html","title":"5 Ways to Install Redis on Mac with a few commands","lang":"en-US","frontmatter":{"date":"2024-11-17T12:40:37.000Z","updated":"2024-11-22T23:53:30.000Z","title":"5 Ways to Install Redis on Mac with a few commands","shortTitle":"Install Redis on Mac","description":"Install Redis via Homebrew with `brew install redis`, or compile the source code from the Redis website. Launch Redis using redis-server and connect with redis-cli.","category":["Computer"]},"headers":[{"level":2,"title":"Using Homebrew","slug":"using-homebrew","link":"#using-homebrew","children":[]},{"level":2,"title":"Using MacPorts","slug":"using-macports","link":"#using-macports","children":[]},{"level":2,"title":"Using Xcode","slug":"using-xcode","link":"#using-xcode","children":[]},{"level":2,"title":"Using a Binary Installer","slug":"using-a-binary-installer","link":"#using-a-binary-installer","children":[]},{"level":2,"title":"Building from Source","slug":"building-from-source","link":"#building-from-source","children":[]},{"level":2,"title":"Verifying the Installation","slug":"verifying-the-installation","link":"#verifying-the-installation","children":[]}],"git":{"createdTime":1731821814000,"updatedTime":1732888429000,"contributors":[{"name":"LYPvvvLYP","email":"1909266427@qq.com","commits":1}]},"readingTime":{"minutes":0.88,"words":265},"filePathRelative":"Computer/Install Redis on Mac.md","localizedDate":"November 17, 2024","excerpt":"<h2>Using Homebrew</h2>\\n<p>Homebrew is a popular package manager for macOS. If we don\'t have Homebrew installed, we can install it using:</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">/bin/bash</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -c</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> \\"$(</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">curl</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> -fsSL</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\\"</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{o as comp,c as data};
