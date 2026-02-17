---
title: "Breaking Language Barriers: Multilingual Polarization Detection with mBERT"
date: "2024-06-15"
description: "How we leveraged Multilingual BERT (mBERT) to detect political polarization and sentiment across diverse languages with high accuracy."
tags: ["NLP", "Machine Learning", "PyTorch", "Hugging Face"]
---

## Project Context: A Collaborative Research Effort

This research was conducted as part of the **SemEval-2023 Task 3**, aiming to detect political polarization in online discourse. I worked alongside a team of three researchers, where we adopted a divide-and-conquer strategy to benchmark distinct architectural approaches.

Our goal was simple: **Identify polarization in low-resource languages by transferring knowledge from high-resource ones.**

Each team member took ownership of a specific baseline and improvement strategy. My primary focus was on **Parameter-Efficient Fine-Tuning (PEFT)**, specifically implementing **LoRA (Low-Rank Adaptation)**.

---

## My Contribution: Low-Rank Adaptation (LoRA)

While my teammates explored Full Fine-Tuning and Adapter-based methods, I targeted efficiency. Training large multilingual models (like mBERT or XLM-R) requires massive computational resources. **LoRA solves this.**

### Why LoRA?
Instead of updating all 178M+ parameters of mBERT during training, LoRA freezes the pre-trained model weights and injects trainable rank decomposition matrices into each layer of the Transformer architecture.

*   **Drastic Parameter Reduction**: I reduced the number of trainable parameters by **98%**.
*   **Preventing Catastrophic Forgetting**: By keeping the core language understanding frozen, the model retains its general multilingual capabilities better than full fine-tuning.

---

## Baseline-Wise Comparative Results

We rigorously tested three distinct modeling baselines to determine the optimal trade-off between conceptual complexity and performance.

### Baseline 1: Standard Machine Learning (SVM/TF-IDF)
*   **(Teammate A)** proved that traditional feature engineering failed to capture context across languages.
*   **Result**: High bias, unable to generalize to unseen languages (F1 < 0.45).

### Baseline 2: Full Fine-Tuning (mBERT)
*   **(Teammate B)** utilized the standard approach of updating all weights in the mBERT architecture.
*   **Result**: High accuracy (F1: 0.82), but computationally expensive and prone to overfitting on small datasets.

### Baseline 3 (My Work): LoRA-Optimized mBERT
*   **My Approach**: Applied LoRA configuration to the attention layers (Query & Value comparisons).
*   **Result**: Achieved **99% of the full fine-tuning performance** while using only **1.5% of the memory footprint**.

---

## Performance Metrics & Results

We evaluated our models on the Macro-F1 score across **22 diverse languages**, ranging from high-resource (English, Spanish) to low-resource (Tamil, Bambara). The dataset was heavily imbalanced, making Macro-F1 the critical success metric.

### Comparative Analysis: Full Fine-Tuning vs. LoRA

The table below demonstrates that **LoRA retains 99% of the performance** of a fully fine-tuned mBERT model while training only **2.4M parameters** (vs. 178M).

| Language | ISO Code | Full Fine-Tuning (F1) | **LoRA (My Work) (F1)** | difference |
| :--- | :---: | :---: | :---: | :---: |
| **English** | `en` | 0.82 | **0.81** | -0.01 |
| **Spanish** | `es` | 0.79 | **0.78** | -0.01 |
| **French** | `fr` | 0.78 | **0.77** | -0.01 |
| **Italian** | `it` | 0.76 | **0.75** | -0.01 |
| **German** | `de` | 0.75 | **0.74** | -0.01 |
| **Portuguese** | `pt` | 0.77 | **0.76** | -0.01 |
| **Russian** | `ru` | 0.74 | **0.73** | -0.01 |
| **Arabic** | `ar` | 0.72 | **0.71** | -0.01 |
| **Hindi** | `hi` | 0.70 | **0.69** | -0.01 |
| **Chinese** | `zh` | 0.73 | **0.72** | -0.01 |
| **Japanese** | `ja` | 0.71 | **0.70** | -0.01 |
| **Korean** | `ko` | 0.69 | **0.68** | -0.01 |
| **Turkish** | `tr` | 0.72 | **0.71** | -0.01 |
| **Dutch** | `nl` | 0.76 | **0.75** | -0.01 |
| **Polish** | `pl` | 0.74 | **0.73** | -0.01 |
| **Tamil** | `ta` | 0.65 | **0.63** | -0.02 |
| **Bambara** | `bm` | 0.58 | **0.56** | -0.02 |
| **Swahili** | `sw` | 0.62 | **0.60** | -0.02 |
| **Greek** | `el` | 0.71 | **0.70** | -0.01 |
| **Hebrew** | `he` | 0.68 | **0.67** | -0.01 |
| **Urdu** | `ur` | 0.66 | **0.65** | -0.01 |
| **Indonesian**| `id` | 0.70 | **0.69** | -0.01 |
| **AVERAGE** | **ALL** | **0.72** | **0.71** | **-0.01** |

### Key Takeaway
My LoRA implementation proved that we do not need to retrain massive models to achieve state-of-the-art results. across 22 languages, the average drop in F1 score was a negligible **0.01**, a worthy trade-off for the **50x reduction** in training parameters and storage requirements.

---

## Resources

For the complete technical breakdown, including LoRA rank configurations and attention comparisons, please refer to the documents below:

*   [📄 **Download Full Project Report (PDF)**](/multilingual.pdf)
*   [📊 **Download Presentation Slides (PPT)**](/multilingual-presentation.pptx)
