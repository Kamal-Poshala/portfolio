---
title: "SemEval 2026 Task 9: Multilingual Polarization Detection"
date: "2024-06-15"
description: "A comprehensive study using Transformer Baselines, LoRA, and LLM Prompting across 22 languages for SemEval Task 9 (Subtask 1)."
tags: ["NLP", "SemEval Task 9", "LoRA", "LLMs"]
---

## 1. Executive Summary

As part of **SemEval Task 9**, our team conducted an extensive evaluation of multilingual polarization detection. The challenge was identifying divisive content across **22 languages** with varying levels of digital resources.

We adopted a **"Divide & Conquer"** research strategy, where each member spearheaded a specific architectural paradigm to maximize our coverage of the solution space.

---

## 2. Research Stream A: Encoder Baselines & Prompting
### 👤 Researcher: Kushi Reddy Kankar

Kushi focused on establishing the "bounds" of performance—both the lower bound using traditional fine-tuning and the upper bound using modern prompt engineering.

### Part 1: mBERT (Multilingual BERT)
Establishes the robust baseline using standard cross-lingual embeddings (WordPiece tokenization).
*   **Method:** Full fine-tuning of the encoder layers.
*   **Finding:** mBERT provides a stable baseline but "saturates" early. It struggles to capture subtle cultural nuances in languages it hasn't seen frequently.
*   **Performance:** Capped at **~0.75 F1** for high-resource languages; poor on morphologically rich languages like Amharic.

### Part 2: Few-Shot LLM Prompting
Leverages the reasoning capabilities of foundation models.
*   **Method:** Providing the model with 3-5 examples ("shots") of polarized vs. neutral text in the prompt context before asking for a classification.
*   **Finding:** This approach achieved the **highest precision** for English.
*   **Key Insight:** While powerful, it is disjointed for low-resource languages where the base model lacks pre-training data.

| Approach | Strength | Weakness |
| :--- | :--- | :--- |
| **mBERT** | Stable, standard baseline | Saturates early, poor distinctiveness |
| **Few-Shot** | High Precision (English) | Inconsistent across 22 languages |

---

## 3. Research Stream B: Sequence-to-Sequence Modeling
### 👤 Researcher: Rohan Mukka

Rohan investigated whether **generative** models could outperform classification models by reframing the task.

### The Approach: mT5 (Massively Multilingual T5)
Instead of outputting a class label (0 or 1), the model learns to *generate* the text tokens "Polarized" or "Neutral".
*   **Theory:** Text-to-text models can sometimes leverage better semantic understanding than encoder-only heads.
*   **Finding:** mT5 is a powerhouse for structured, high-resource languages (English, Chinese), achieving **0.85 F1**.
*   **Critical Failure Mode:** It suffers from **"hallucination"** in noisy languages (e.g., Khmer script). In some cases, the model generated invalid output tokens instead of the target labels, causing a sharp F1 drop to **~0.50**.

---

## 4. Research Stream C: Parameter-Efficient Fine-Tuning
### 👤 Researcher: Kamal Poshala (Me)

My work targeted the bottlenecks of the previous two approaches: **Efficiency** and **Generalization**.

### The Innovation: Low-Rank Adaptation (LoRA) Variants
Training massive multilingual models is computationally expensive. I implemented **three distinct LoRA strategies** to find the optimal architecture:

#### 1. Multilingual LoRA (Winner 🏆)
*   **Method:** A single set of LoRA adapters shared across all 22 languages.
*   **Result:** Superior cross-lingual transfer. Low-resource languages "borrowed" reasoning from high-resource ones.

#### 2. Per-Language LoRA
*   **Method:** Training separate adapters for each language (e.g., one for Hindi, one for Spanish).
*   **Result:** High performance on high-resource languages but **failed to generalize** for low-resource ones due to lack of shared knowledge.

#### 3. MixLoRA (Mixture of Experts)
*   **Method:** A dynamic routing mechanism that selects different LoRA experts on-the-fly.
*   **Result:** showed promise but suffered from **routing instability** in our experiments, often underperforming the simpler Multilingual LoRA.

$$ W' = W + BA $$

*   **Parameter Reduction:** Reduced trainable parameters by **98%** (from ~178M to ~2.4M).
*   **Key Outcome:** By freezing the base model ("catastrophic forgetting" prevention), Multilingual LoRA achieved the best balance of plasticity and stability.

| Metric | Full Fine-Tuning | Multilingual LoRA | Per-Language LoRA |
| :--- | :--- | :--- | :--- |
| **Trainable Params** | 100% | **2%** | 2% per lang |
| **Cross-Lingual Transfer** | Moderate | **High** | None |
| **Low-Resource F1** | 0.60 | **0.82** | 0.45 |

---

## 5. Comprehensive Performance Matrix

The grid below represents the culmination of our combined efforts. It visualizes which method dominates in each resource tier.

| Difficulty Tier | Languages | Stream A (Kushi)<br>mBERT / Few-Shot | Stream B (Rohan)<br>mT5 (Seq2Seq) | Stream C (Kamal)<br>**LoRA (PEFT)** |
| :--- | :--- | :---: | :---: | :---: |
| **High-Resource** | EN, HI, DE, BN, ZH, FA | 0.75 / **0.80** | **0.85 (Peak)** | 0.82 – 0.87 |
| **Medium-Resource** | AR, TR, RU, IT, MY, ES | 0.70 / 0.76 | 0.78 | **0.84** |
| **Low-Resource** | HA, OR, AM, NE | 0.65 / 0.72 | 0.70 | **0.82 (Winner)** |
| **Noisy / Complex** | NE, AM, KH, MY | 0.60 / 0.70 | 0.68 | **0.80 (Winner)** |

> **Conclusion:** While Rohan's **mT5** peaked in English, **LoRA (My work)** provided the most robust "floor" performance, proving to be the best universal solution for multilingual tasks.

---

## Resources

*   [💻 **View Code Repository (GitHub)**](https://github.com/kushi-3/KKR_NLP)
*   [📄 **Download Full Project Report (PDF)**](/multilingual.pdf)
*   [📊 **Download Presentation Slides (PPT)**](/multilingual-presentation.pptx)
