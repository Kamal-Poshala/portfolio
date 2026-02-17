## Project Context: A Comprehensive Multilingual Study

This research was conducted as part of **SemEval Task 9: Multilingual Polarization Detection**, a binary classification task to identify ideological, divisive, or hostile content across **22 diverse languages**.

I worked alongside a team of three researchers—**Kamal Poshala (Me)**, **Rohan Mukka**, and **Kushi Reddy Kankar**—where we adopted a hybrid academic-engineering perspective. Our goal was to evaluate how well distinct transformer paradigms could reason across linguistic boundaries, especially for low-resource and morphologically complex languages.

We built a unified experimental pipeline to benchmark **four modeling families**:
1.  **Encoder-only (mBERT)**
2.  **Sequence-to-Sequence (mT5)**
3.  **Foundation Model Prompting (LLMs)**
4.  **Parameter-Efficient Adaptation (LoRA - My Focus)**

---

## My Contribution: Parameter-Efficient Fine-Tuning (PEFT)

While my teammates explored full fine-tuning and prompting strategies, my primary contribution was implementing **Low-Rank Adaptation (LoRA)**, specifically experimenting with **Multilingual LoRA**, **Per-Language LoRA**, and **MixLoRA**.

### The Engineering Challenge
Training massive multilingual models like **mT5** (Massively Multilingual Text-to-Text Transfer Transformer) is computationally expensive and prone to *"catastrophic forgetting"*—where a model learns a new language but forgets previous ones.

### The LoRA Solution
Instead of updating all model weights, LoRA injects **trainable low-rank decomposition matrices** into the Transformer layers.
*   **Efficiency**: I reduced the trainable parameters by **~98%**, allowing us to fine-tune on consumer-grade GPUs (equivalent to NVIDIA RTX6000/A100 nodes).
*   **Generalization**: By freezing the pre-trained "world knowledge" of the base model, Multilingual LoRA achieved superior cross-lingual transfer, particularly for languages with scarce data (e.g., Hausa, Oromo).

---

## Comparative Analysis: 4 Model Families

We analyzed performance across **four difficulty tiers** designed to reflect linguistic complexity and resource availability.

### 1. mBERT (Baseline)
*   *Architecture:* Encoder-only, trained with WordPiece tokenization.
*   *Finding:* Effective for high-resource languages but saturates early (F1 capped at ~0.75). It struggles significantly with noisy or morphologically rich languages like Amharic.

### 2. mT5 (Generative)
*   *Architecture:* Sequence-to-Sequence framework.
*   *Finding:* Generates robust classifications for structured European languages but suffers from hallucination in noisy/complex tiers (F1 drops to ~0.50).

### 3. LLM Prompting (Zero-Shot & Few-Shot)
*   *approach:* In-context learning using foundation models.
*   *Finding:* **Few-shot prompting achieved the best single-language performance for English** (~0.80 F1). However, it lacked consistency across the full 22-language spectrum due to pre-training bias.

### 4. Multilingual LoRA (My Work)
*   *Approach:* Shared low-rank adapters across all languages.
*   *Finding:* **The most reliable and generalizable approach.** It consistently outperformed other families in medium and low-resource settings by leveraging shared representations.

---

## Performance Matrix

The table below summarizes our **Macro-F1** results across language tiers. Note how **Multilingual LoRA** (far right) maintains the highest floor interpretation across difficult languages.

| Difficulty Tier | Languages | mBERT | mT5 | Few-Shot LLM | **Multilingual LoRA** |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **High-Resource** | EN, HI, DE, BN, ZH, FA | 0.70 – 0.75 | 0.75 – 0.85 | **0.80 (EN)** | **0.82 – 0.87** |
| **Medium-Resource** | AR, TR, RU, IT, MY, ES | 0.60 – 0.70 | 0.65 – 0.78 | 0.70 – 0.76 | **0.78 – 0.84** |
| **Low-Resource** | HA, OR, AM, NE | 0.55 – 0.65 | 0.55 – 0.70 | 0.60 – 0.72 | **0.74 – 0.82** |
| **Noisy / Complex** | NE, AM, KH, MY | 0.50 – 0.60 | 0.50 – 0.68 | 0.65 – 0.70 | **0.72 – 0.80** |

### Key Findings
*   **High-Resource Dominance**: LoRA models achieved **0.82–0.87 F1**, rivaling or beating significantly larger fully fine-tuned models.
*   **The "Low-Resource" Boost**: For languages like **Hausa (HA)** and **Oromo (OR)**, Multilingual LoRA outperformed others by a wide margin. The shared adapter structure allowed these languages to "borrow" semantic reasoning from high-resource cousins.
*   **Resilience to Noise**: In **Noisy/Complex** languages (like Khmer and Amharic), where tokenization often fails, LoRA exhibited strong resilience to orthographic variance.

---

## Ethical & Technical Reflections

Our error analysis revealed that **Spanish (ES)** had high recall but poor precision—models often mistook "passionate" cultural expression for "polarization." Conversely, **Arabic** suffered from dialectal divergence (Standard vs. Dialectal) that baffled rigid tokenizers.

Ultimately, this study proves that **parameter-efficient adaptation (LoRA)** is not just a "cheaper" alternative—it is often a **better** one for multilingual alignment, effectively balancing plasticity (learning new tasks) and stability (remembering language structures).

---

## Resources

For the full academic report, including confusion matrices, ethical considerations, and per-language detailed breakdowns, please refer to:

*   [📄 **Download Full Project Report (PDF)**](/multilingual.pdf)
*   [📊 **Download Presentation Slides (PPT)**](/multilingual-presentation.pptx)
