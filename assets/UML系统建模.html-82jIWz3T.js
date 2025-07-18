import{_ as n,c as a,a as e,o as l}from"./app-CeA8JgzT.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="uml-系统建模" tabindex="-1"><a class="header-anchor" href="#uml-系统建模"><span>UML 系统建模</span></a></h1><hr><h2 id="一、用例图-核心业务流程建模" tabindex="-1"><a class="header-anchor" href="#一、用例图-核心业务流程建模"><span>一、用例图（核心业务流程建模）</span></a></h2><h3 id="_1-主要用例覆盖" tabindex="-1"><a class="header-anchor" href="#_1-主要用例覆盖"><span>1. 主要用例覆盖</span></a></h3><ul><li>车辆管理</li><li>用户注册/绑定</li><li>充电服务</li><li>历史数据分析</li><li>消息通知与告警</li><li>后台管理与权限控制</li></ul><h3 id="_2-用例图-plantuml-示例" tabindex="-1"><a class="header-anchor" href="#_2-用例图-plantuml-示例"><span>2. 用例图（PlantUML 示例）</span></a></h3><div class="language-plantuml line-numbers-mode" data-highlighter="prismjs" data-ext="plantuml"><pre><code class="language-plantuml"><span class="line"><span class="token delimiter punctuation">@startuml</span></span>
<span class="line"><span class="token keyword">actor</span> 车主</span>
<span class="line"><span class="token keyword">actor</span> 管理员</span>
<span class="line"><span class="token keyword">actor</span> 运营方</span>
<span class="line"></span>
<span class="line"><span class="token keyword">usecase</span> <span class="token string">&quot;车辆信息管理&quot;</span> <span class="token keyword">as</span> UC1</span>
<span class="line"><span class="token keyword">usecase</span> <span class="token string">&quot;用户绑定/解绑&quot;</span> <span class="token keyword">as</span> UC2</span>
<span class="line"><span class="token keyword">usecase</span> <span class="token string">&quot;扫码充电&quot;</span> <span class="token keyword">as</span> UC3</span>
<span class="line"><span class="token keyword">usecase</span> <span class="token string">&quot;历史数据分析&quot;</span> <span class="token keyword">as</span> UC4</span>
<span class="line"><span class="token keyword">usecase</span> <span class="token string">&quot;消息通知&quot;</span> <span class="token keyword">as</span> UC5</span>
<span class="line"><span class="token keyword">usecase</span> <span class="token string">&quot;后台管理&quot;</span> <span class="token keyword">as</span> UC6</span>
<span class="line"></span>
<span class="line">车主 <span class="token arrow operator">--&gt;</span> UC1</span>
<span class="line">车主 <span class="token arrow operator">--&gt;</span> UC2</span>
<span class="line">车主 <span class="token arrow operator">--&gt;</span> UC3</span>
<span class="line">车主 <span class="token arrow operator">--&gt;</span> UC4</span>
<span class="line">车主 <span class="token arrow operator">--&gt;</span> UC5</span>
<span class="line"></span>
<span class="line">管理员 <span class="token arrow operator">--&gt;</span> UC1</span>
<span class="line">管理员 <span class="token arrow operator">--&gt;</span> UC6</span>
<span class="line">管理员 <span class="token arrow operator">--&gt;</span> UC4</span>
<span class="line">管理员 <span class="token arrow operator">--&gt;</span> UC5</span>
<span class="line"></span>
<span class="line">运营方 <span class="token arrow operator">--&gt;</span> UC6</span>
<span class="line">运营方 <span class="token arrow operator">--&gt;</span> UC4</span>
<span class="line"><span class="token delimiter punctuation">@enduml</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="图形说明与归档" tabindex="-1"><a class="header-anchor" href="#图形说明与归档"><span>图形说明与归档</span></a></h4><ul><li>用例图应随业务调整动态维护，归档于“系统需求文档”相关章节。</li><li>建议用 PlantUML/StarUML 生成图片，配用例简述表（功能-角色-描述）。</li></ul><hr><h2 id="二、类图-系统核心实体关系建模" tabindex="-1"><a class="header-anchor" href="#二、类图-系统核心实体关系建模"><span>二、类图（系统核心实体关系建模）</span></a></h2><h3 id="_1-核心实体" tabindex="-1"><a class="header-anchor" href="#_1-核心实体"><span>1. 核心实体</span></a></h3><ul><li>车辆（Vehicle）</li><li>用户（User）</li><li>充电桩（ChargingPile）</li><li>充电记录（ChargeRecord）</li><li>消息通知（Notification）</li><li>管理员（Admin）</li><li>运营方（Operator）</li></ul><h3 id="_2-类图-plantuml-示例" tabindex="-1"><a class="header-anchor" href="#_2-类图-plantuml-示例"><span>2. 类图（PlantUML 示例）</span></a></h3><div class="language-plantuml line-numbers-mode" data-highlighter="prismjs" data-ext="plantuml"><pre><code class="language-plantuml"><span class="line"><span class="token delimiter punctuation">@startuml</span></span>
<span class="line"><span class="token keyword">class</span> Vehicle <span class="token punctuation">{</span></span>
<span class="line">  +vehicleId<span class="token punctuation">:</span> String</span>
<span class="line">  +plateNumber<span class="token punctuation">:</span> String</span>
<span class="line">  +status<span class="token punctuation">:</span> String</span>
<span class="line">  +ownerId<span class="token punctuation">:</span> String</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> User <span class="token punctuation">{</span></span>
<span class="line">  +userId<span class="token punctuation">:</span> String</span>
<span class="line">  +name<span class="token punctuation">:</span> String</span>
<span class="line">  +phone<span class="token punctuation">:</span> String</span>
<span class="line">  +role<span class="token punctuation">:</span> String</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> ChargingPile <span class="token punctuation">{</span></span>
<span class="line">  +pileId<span class="token punctuation">:</span> String</span>
<span class="line">  +location<span class="token punctuation">:</span> String</span>
<span class="line">  +status<span class="token punctuation">:</span> String</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> ChargeRecord <span class="token punctuation">{</span></span>
<span class="line">  +recordId<span class="token punctuation">:</span> String</span>
<span class="line">  +vehicleId<span class="token punctuation">:</span> String</span>
<span class="line">  +pileId<span class="token punctuation">:</span> String</span>
<span class="line">  +startTime<span class="token punctuation">:</span> Date</span>
<span class="line">  +endTime<span class="token punctuation">:</span> Date</span>
<span class="line">  +energy<span class="token punctuation">:</span> Double</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> Notification <span class="token punctuation">{</span></span>
<span class="line">  +notificationId<span class="token punctuation">:</span> String</span>
<span class="line">  +userId<span class="token punctuation">:</span> String</span>
<span class="line">  +content<span class="token punctuation">:</span> String</span>
<span class="line">  +sendTime<span class="token punctuation">:</span> Date</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">User <span class="token string">&quot;1&quot;</span> -- <span class="token string">&quot;0..*&quot;</span> Vehicle</span>
<span class="line">User <span class="token string">&quot;1&quot;</span> -- <span class="token string">&quot;0..*&quot;</span> ChargeRecord</span>
<span class="line">Vehicle <span class="token string">&quot;1&quot;</span> -- <span class="token string">&quot;0..*&quot;</span> ChargeRecord</span>
<span class="line">ChargingPile <span class="token string">&quot;1&quot;</span> -- <span class="token string">&quot;0..*&quot;</span> ChargeRecord</span>
<span class="line">User <span class="token string">&quot;1&quot;</span> -- <span class="token string">&quot;0..*&quot;</span> Notification</span>
<span class="line"></span>
<span class="line"><span class="token delimiter punctuation">@enduml</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="归档与维护建议" tabindex="-1"><a class="header-anchor" href="#归档与维护建议"><span>归档与维护建议</span></a></h4><ul><li>类图应纳入“系统架构设计文档”与“数据库 ER 图”配套维护。</li><li>每次数据库、对象模型调整后需同步更新类图，标明版本号。</li></ul><hr><h2 id="三、时序图-关键交互场景" tabindex="-1"><a class="header-anchor" href="#三、时序图-关键交互场景"><span>三、时序图（关键交互场景）</span></a></h2><h3 id="_1-典型交互-如扫码充电" tabindex="-1"><a class="header-anchor" href="#_1-典型交互-如扫码充电"><span>1. 典型交互（如扫码充电）</span></a></h3><div class="language-plantuml line-numbers-mode" data-highlighter="prismjs" data-ext="plantuml"><pre><code class="language-plantuml"><span class="line"><span class="token delimiter punctuation">@startuml</span></span>
<span class="line"><span class="token keyword">actor</span> 用户</span>
<span class="line"><span class="token keyword">participant</span> <span class="token string">&quot;移动端&quot;</span> <span class="token keyword">as</span> Frontend</span>
<span class="line"><span class="token keyword">participant</span> <span class="token string">&quot;后端&quot;</span> <span class="token keyword">as</span> Backend</span>
<span class="line"><span class="token keyword">participant</span> <span class="token string">&quot;充电桩平台&quot;</span> <span class="token keyword">as</span> PilePlatform</span>
<span class="line"><span class="token keyword">participant</span> <span class="token string">&quot;数据库&quot;</span> <span class="token keyword">as</span> DB</span>
<span class="line"></span>
<span class="line">用户 <span class="token arrow operator">-&gt;</span> Frontend<span class="token punctuation">:</span> 打开App扫码</span>
<span class="line">Frontend <span class="token arrow operator">-&gt;</span> Backend<span class="token punctuation">:</span> 提交充电请求</span>
<span class="line">Backend <span class="token arrow operator">-&gt;</span> PilePlatform<span class="token punctuation">:</span> 下发充电指令</span>
<span class="line">PilePlatform <span class="token arrow operator">-&gt;</span> Backend<span class="token punctuation">:</span> 返回充电状态</span>
<span class="line">Backend <span class="token arrow operator">-&gt;</span> DB<span class="token punctuation">:</span> 记录充电过程</span>
<span class="line">Backend <span class="token arrow operator">-&gt;</span> Frontend<span class="token punctuation">:</span> 状态反馈与进度</span>
<span class="line">Frontend <span class="token arrow operator">-&gt;</span> 用户<span class="token punctuation">:</span> 显示充电信息</span>
<span class="line"><span class="token delimiter punctuation">@enduml</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="维护建议" tabindex="-1"><a class="header-anchor" href="#维护建议"><span>维护建议</span></a></h4><ul><li>常见交互流程（如用户绑定、车辆上报、异常告警等）均需建模，版本迭代时及时补充归档。</li></ul><hr><h2 id="四、活动图-流程图-复杂业务流程" tabindex="-1"><a class="header-anchor" href="#四、活动图-流程图-复杂业务流程"><span>四、活动图/流程图（复杂业务流程）</span></a></h2><h3 id="_1-预约充电活动图-mermaid-示例" tabindex="-1"><a class="header-anchor" href="#_1-预约充电活动图-mermaid-示例"><span>1. 预约充电活动图（Mermaid 示例）</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre><code class="language-text"><span class="line">flowchart TD</span>
<span class="line">    A[用户发起预约充电] --&gt; B{检查车辆/用户状态}</span>
<span class="line">    B -- 合格 --&gt; C[显示可用充电桩]</span>
<span class="line">    C --&gt; D[用户选择桩并预约]</span>
<span class="line">    D --&gt; E[后端校验并锁定桩位]</span>
<span class="line">    E --&gt; F[预约成功，消息推送]</span>
<span class="line">    B -- 不合格 --&gt; Z[流程中止，提示修正]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-地图查找流程图" tabindex="-1"><a class="header-anchor" href="#_2-地图查找流程图"><span>2. 地图查找流程图</span></a></h3><div class="language-mermaid line-numbers-mode" data-highlighter="prismjs" data-ext="mermaid"><pre><code class="language-mermaid"><span class="line"><span class="token keyword">flowchart</span> LR</span>
<span class="line">    A<span class="token text string">[进入找桩页面]</span> <span class="token arrow operator">--&gt;</span> B<span class="token text string">[地图加载当前位置]</span></span>
<span class="line">    B <span class="token arrow operator">--&gt;</span> C<span class="token text string">[检索附近充电桩]</span></span>
<span class="line">    C <span class="token arrow operator">--&gt;</span> D<span class="token text string">[筛选/排序]</span></span>
<span class="line">    D <span class="token arrow operator">--&gt;</span> E<span class="token text string">[点击桩点查看详情]</span></span>
<span class="line">    E <span class="token arrow operator">--&gt;</span> F<span class="token text string">[发起导航/充电]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="维护建议-1" tabindex="-1"><a class="header-anchor" href="#维护建议-1"><span>维护建议</span></a></h4><ul><li>流程发生重大变更时及时补图、归档，建议统一编号、配流程说明文本。</li></ul><hr><h2 id="五、建模工具推荐" tabindex="-1"><a class="header-anchor" href="#五、建模工具推荐"><span>五、建模工具推荐</span></a></h2><ul><li><strong>PlantUML</strong>（开源、可集成至 VSCode/IDEA、易自动化脚本生成）</li><li><strong>Mermaid</strong>（适合文档、Markdown 与网页快速嵌入）</li><li><strong>StarUML</strong>（专业 UML 设计工具，支持复杂工程与团队协作）</li><li><strong>其他</strong>：Visual Paradigm、Enterprise Architect（如需企业级管理）。</li></ul><hr><h2 id="六、图形与模型描述及维护建议" tabindex="-1"><a class="header-anchor" href="#六、图形与模型描述及维护建议"><span>六、图形与模型描述及维护建议</span></a></h2><ul><li>所有 UML 图形须<strong>统一归档至设计/需求文档</strong>专章，按业务/功能/时间顺序编号与标注版本。</li><li>图形需配简要<strong>功能说明</strong>与<strong>变更记录</strong>，便于评优、查阅和材料迭代。</li><li>推荐开发/设计团队<strong>约定建模模板和注释规范</strong>，定期校验图文一致性。</li><li>重要场景可配“用例-类-时序-流程”全链路建模，助力归档、评审与 AIGC 自动文档生成。</li></ul>`,37)]))}const r=n(i,[["render",p]]),o=JSON.parse('{"path":"/requirements/UML%E7%B3%BB%E7%BB%9F%E5%BB%BA%E6%A8%A1.html","title":"UML 系统建模","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1752849335000,"contributors":[{"name":"mqxu","username":"mqxu","email":"moqi1977@gmail.com","commits":1,"url":"https://github.com/mqxu"}],"changelog":[{"hash":"af37f38c248b743a0fbb96095eaa9b8b46b743f9","time":1752849335000,"email":"moqi1977@gmail.com","author":"mqxu","message":"feat: 初始化文档站"}]},"filePathRelative":"requirements/UML系统建模.md"}');export{r as comp,o as data};
