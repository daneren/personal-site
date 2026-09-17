---
title: daner resume
---

# daner

**邮箱** [minutiadaner@163.com](mailto:minutiadaner@163.com) · **电话** (+86) 133-8546-2874

## 经历

### 腾讯 · YouTu / TI · 上海 · 2021.7 – 至今

大模型分布式训练加速、训练框架、模型压缩与量化；参与混元 3.0 / YouTu2.0 训推优化；主导 Youtu Agentic RL、tilearn.llm、TIACC 等；支撑腾讯云公有云 / 私有云大模型平台与头部客户训练优化。

#### 混元 3.0 训推 infra · 2025.12 – 至今

- Fuse Transformers：将 Transformer Layer forward 拆为多 function，backward 融合进自定义 `torch.autograd.Function`；DeepEP A2A dispatch/combine 与 attention / MLP 重计算跨 CUDA stream overlap；跨层激活 offload/prefetch（GPU↔CPU）
- 流水线并行：VPP 场景用 dataloader 预取下一批 shape，减少 PP stage send/recv 前的 CPU–GPU sync；A20B 端到端约 +4%
- 大规模训练稳定性：慢节点监控与通信分析（&lt;1% 开销）；参与 bit-wise 对齐；支撑千卡训练排查

#### YouTu2.0 训推 infra · 2026.4 – 至今

- 参与 YouTu2.0 训推全流程方案与系统优化；千卡集群 MFU / 吞吐提升（见 PDF 量级）
- 300B 级预训练并行策略与显存 / 通信 / 计算瓶颈迭代
- MoE on H200：硬件感知动态负载均衡（Tile-size 反馈）；约 -5% 训练时间，Zero-Drop 方向

#### Agentic RL · 2025.7 – 至今

- Youtu-Agent / Agent Lightning：对齐 Verl 与 Agent Lightning；Client–Queue–Server + LLM Proxy 黑盒接入
- Response Mask：Trajectory 级多轮 LLM call 聚合与 `resolve_response_mask`（含 Legacy 降级）
- 超时链路：Client → Watchdog → LLM Proxy → vLLM；sleep 前排空 / abort 与 request_id 一致性
- 基于开放能力打磨完全黑盒的 Agentic RL 接入

#### DeepSeek 推理优化 · 2025.2 – 2025.5

- 腾讯云 H20 部署：allreduce EP、int4 deepgemm / deepep、CUDA Graph、MTP；约 21.4→38.9 token/s（+84%）
- all2all EP 与 PD 分离（sglang / mtp / cudagraph）；EP 负载均衡再提约 3–5%

#### 量化 · 2024.4 – 2024.10

- INT8 / INT4 均匀与非均匀量化；LayerwiseSearch / SmoothQuant；混元侧量化工具库共建

#### tilearn.llm · 2023.2 – 2025.2

- tilearn.llm / PEFT / CUDA ops（tilearn.ops）；shard init、TP load checkpoint、FlashAttention
- tensor parallel（bloomz / gpt2 / chatglm）；HuggingFace PEFT（Prompt / Prefix / LoRA / Adapter）
- ALiBi 融合 FlashAttention v2 tiled kernel；70B 级加速与 V100 RLHF 混合并行

#### TI 视觉 / 公有云训练平台 · 2021.7 – 2024.7

- TI 平台 CV AutoML；JIT 图优化、自动量化 / 剪枝（timm / mmdet / detectron2）；tiacc-slim
- 大模型训练市场与加密方案；对外 POC 训推加速

## 技能

- **语言**：Python · Java · Triton
- **框架 / 训推**：PyTorch · Transformers · DeepSpeed · ColossalAI · Megatron · vLLM · SGLang
- **方向**：Agentic RL · CV · 训推加速

## 教育

### 厦门大学 · 工学硕士 · 计算机科学与技术 · 2018.9 – 2021.6

福建 · 厦门

### 湖南科技大学 · 工学学士 · 计算机科学与技术 · 2013.9 – 2017.6

湖南 · 湘潭

## 论文

1. Lin, Xianming; **Li, Run**; Zheng, Xiawu; Peng, Pai; Wu, Yongjian; Huang, Feiyue; Ji, Rongrong. “Aggregating Global and Local Visual Representation for Vehicle Re-IDentification,” *IEEE Transactions on Multimedia (TMM)*, 2020.
2. Deng, Youming; Lin, Xianming; **Li, Run**; Ji, Rongrong. “Multi-scale Gem Pooling with N-Pair Center Loss for Fine-Grained Image Search,” *IEEE ICME*, 2019.
3. Chen, Ting; Liu, Jianxun; Cao, Buqing; Peng, Zhenlian; Wen, Yiping; **Li, Run**. “Web Service Recommendation Based on Word Embedding and Topic Model,” *IEEE ISPA / …*, 2018.

## 荣誉

- 校级奖学金（本科，2014 / 2015 / 2016）
- 硕士阶段荣誉（厦门大学，2021.6）
