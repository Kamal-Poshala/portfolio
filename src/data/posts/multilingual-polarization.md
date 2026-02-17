---
title: "SemEval 2026: Multilingual Polarization Detection with Transformers"
date: "2024-06-15"
description: "A comprehensive study using Transformer Baselines, LoRA, and LLM Prompting across 22 languages. We benchmarked approaches to solve the challenge of detecting ideological hostility in low-resource environments."
tags: ["NLP", "SemEval", "LoRA", "LLMs"]
---

## Executive Summary

As part of **SemEval Task 9**, our team (Kamal Poshala, Rohan Mukka, Kushi Reddy Kankar) conducted an extensive evaluation of multilingual polarization detection. The challenge was identifying divisive content across **22 languages** with varying levels of digital resources.

We adopted a "Divide & Conquer" research strategy, where each member spearheaded a specific architectural paradigm to maximize our coverage of the solution space.

---

## 👥 Team Contributions & Key Findings

We meticulously benchmarked four distinct modeling families. Here is a breakdown of our individual focus areas and the critical insights we uncovered.

### 1. Rohan Mukka: Sequence-to-Sequence (mT5)
**Focus:** Rohan implemented the **mT5 (Massively Multilingual Text-to-Text Transfer Transformer)** pipeline. His goal was to test if treating classification as a *text-generation* task (Generating "Polarized" vs "Neutral" tokens) could yield better semantic understanding than standard classification heads.

*   ✅ **Key Finding:** mT5 is a powerhouse for structured, high-resource languages like English and Chinese, achieving **0.85 F1**.
*   ⚠️ **Limitation:** It suffers from "hallucination" issues in noisy languages (e.g., Khmer script), where it sometimes generates invalid output tokens, dropping F1 to **~0.50**.

### 2. Kushi Reddy Kankar: Encoder Baselines (mBERT)
**Focus:** Kushi established our robust baseline using **mBERT (Multilingual BERT)**. This was crucial for understanding the "lower bound" of performance using standard cross-lingual embeddings (WordPiece tokenization).

*   ✅ **Key Finding:** mBERT provides a stable baseline but "saturates" early. It simply cannot capture the subtle cultural nuances of polarization in languages it hasn't seen frequently during pre-training.
*   ⚠️ **Limitation:** Performance capped at **~0.75 F1** for high-resource languages and plummeted for morphologically rich languages like Amharic.

### 3. Kamal Poshala (Me): Parameter-Efficient Fine-Tuning (LoRA)
**Focus:** My work targeted the bottlenecks of the previous two approaches: *Efficiency* and *Generalization*. I implemented **LoRA (Low-Rank Adaptation)** to inject trainable rank decomposition matrices into the frozen transformer layers.

*   ✅ **Key Finding:** LoRA was the **most reliable and generalizable model**, achieving **0.82–0.87 F1**.
*   🚀 ** breakthrough:** By freezing the base model, I prevented "catastrophic forgetting," allowing the model to perform exceptionally well on **Low-Resource Languages** (Hausa, Oromo) where other models failed.

---

## 📊 Comprehensive Performance Matrix

The following table summarizes the performance (Macro-F1) of our three approaches + LLM Prompting across the difficulty tiers defined in the SemEval task.

| Difficulty Tier | Languages | mBERT (Kushi) | mT5 (Rohan) | Few-Shot LLM | **LoRA (Kamal)** |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **High-Resource** | EN, HI, DE, BN, ZH, FA | 0.70 – 0.75 | **0.75 – 0.85** | 0.80 | **0.82 – 0.87** |
| **Medium-Resource** | AR, TR, RU, IT, MY, ES | 0.60 – 0.70 | 0.65 – 0.78 | 0.70 – 0.76 | **0.78 – 0.84** |
| **Low-Resource** | HA, OR, AM, NE | 0.55 – 0.65 | 0.55 – 0.70 | 0.60 – 0.72 | **0.74 – 0.82** |
| **Noisy / Complex** | NE, AM, KH, MY | 0.50 – 0.60 | 0.50 – 0.68 | 0.65 – 0.70 | **0.72 – 0.80** |

> **Insight:** While mT5 (Rohan's work) peaked in high-resource tiers, **LoRA (My work)** provided the best "floor" performance, never dropping below 0.72 even in the most difficult noisy languages.

---

## 🛠️ Technical Deep Dive: Why LoRA Won

Training massive multilingual models is computationally expensive. My implementation of LoRA reduced the trainable parameter count by **98%**, reducing the memory footprint from gigabytes to megabytes.

### The Mechanism
Instead of updating the full weight matrix $W$, LoRA optimizes a low-rank decomposition $W + \Delta W = W + BA$, where $B$ and $A$ are small matrices.

This technique allowed us to:
1.  **Train on consumer GPUs** (Simulating a real-world constraint).
2.  **Share Adapters:** We used a shared multilingual adapter that allowed low-resource languages to "borrow" reasoning capabilities from high-resource ones.

---

## 🌍 Ethical Reflections & Limitations

Our error analysis revealed distinct biases:
*   **Spanish (ES):** Models often confused "passion" with "polarization" (High Recall, Low Precision).
*   **Arabic:** Dialectal variations (MSA vs Dialects) caused significant tokenization errors in mBERT.

Ultimately, this study proves that **Parameter-Efficient Fine-Tuning** is not just a cost-saving measure—it is a superior architectural choice for maintaining cross-lingual alignment in diverse NLP tasks.

---

## Resources

To see the confusion matrices, code, and detailed per-language scores:

*   [📄 **Download Full Project Report (PDF)**](/multilingual.pdf)
*   [📊 **Download Presentation Slides (PPT)**](/multilingual-presentation.pptx)
