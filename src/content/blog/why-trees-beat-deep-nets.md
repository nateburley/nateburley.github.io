---
title: Why Tree-Based Models Still Beat Deep Nets on Tabular Data
description: A quiet case for the gradient-boosted tree that refuses to be replaced.
date: 2026-01-18
tags: [tabular, xgboost]
---

There is a quiet stubbornness to tabular data. You can bring it the most ornate transformer architecture, festooned with attention heads and warmed by ten thousand GPU-hours — and a gradient-boosted tree, sitting by the fire with its feet up, will more often than not beat it before the kettle has boiled. This is not folklore. It is one of the most reliably reproduced results in applied machine learning, and it is worth understanding *why*.

The short version: trees are exquisitely suited to the irregular, mixed-type, heavy-tailed geometry of real spreadsheets — the kind that pours out of sensors, ledgers, and clinical records. Where a neural network must *learn* that a feature is categorical, or that a threshold matters, a tree simply asks the question.

## The shape of the problem

Consider a single decision boundary. A deep network approximates it with smooth, rotated hyperplanes; a tree carves it into clean axis-aligned boxes. On images, smoothness wins. On a table of heart-rate, step-count, and battery-temperature, the boxes win — and they win cheaply.

> Make everything as simple as possible, but not simpler.

## A small incantation

The whole baseline fits in a few lines, and it is frequently the line everyone else has to beat:

```python
# the unfashionable baseline that keeps winning
from xgboost import XGBClassifier

model = XGBClassifier(n_estimators=600, max_depth=6, learning_rate=0.05)
model.fit(X_train, y_train)                 # ...and it's already ahead
print("val auc:", roc_auc_score(y_val, model.predict_proba(X_val)[:, 1]))
```

None of this is an argument against deep learning — it is an argument for choosing the tool that fits the grain of the wood. Reach for the network when the structure is perceptual; reach for the tree when the structure is tabular.

<div class="callout">
<span class="tag">// burn this in</span><br>
On tabular data, your first model should almost always be a gradient-boosted tree. It sets the bar, trains in seconds, and tells you whether the problem even has signal — before you spend a weekend on architecture search.
</div>

## Why the inductive bias matters

Trees are invariant to monotonic feature transforms (log, scaling, rank) and shrug off outliers, because a split only cares about *order*, not magnitude. Neural nets need normalization, careful initialization, and embeddings for categoricals just to reach the starting line. On heterogeneous columns, that's a lot of machinery to recover a bias the tree had for free.

The craft is in knowing which forest you stand in.
