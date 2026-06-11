---
title: Building Knowledge Graphs from Wikipedia at Scale
description: Turning messy encyclopedia prose into structured entities and relationships.
date: 2025-11-02
tags: [nlp, graphs]
---

Wikipedia is the closest thing we have to a machine-readable map of human knowledge — except that it isn't machine-readable at all. It's prose, written by millions of people, full of implicit relationships that a human reads effortlessly and a computer reads not at all. The goal of a knowledge graph is to make those relationships explicit: to turn *"Ada Lovelace was a mathematician who worked with Charles Babbage"* into a set of clean triples a machine can query.

## The anatomy of a triple

Everything in a knowledge graph reduces to a **(subject, predicate, object)** triple:

```text
(Ada Lovelace) --[occupation]--> (Mathematician)
(Ada Lovelace) --[collaborated_with]--> (Charles Babbage)
```

The whole pipeline is, in essence, a machine for manufacturing these triples reliably from text. The hard part isn't the data structure — it's the extraction.

## The three jobs

Extraction breaks into three jobs that are easy to state and hard to do well:

- **Entity recognition** — find the spans of text that name real things (people, places, organizations).
- **Entity linking** — decide that *"Lovelace"* and *"Ada Lovelace"* and *"the Countess"* are the same node, and not the node for the racing circuit.
- **Relation extraction** — infer the predicate that connects two entities, often from grammar the author never made explicit.

Entity linking is where most naive pipelines quietly fall apart. The same surface string can point to dozens of entities, and the right one depends on context the extractor has to actually model.

<div class="callout">
<span class="tag">// the lesson</span><br>
Coverage and precision pull in opposite directions. A graph that captures every possible relationship is also a graph full of wrong ones. Pick your operating point deliberately — and measure it.
</div>

There's a longer write-up and the code on [GitHub](https://github.com/nateburley/WikiKnowledgeGraphs). The short version: knowledge graphs are less about the graph and more about the discipline of extraction.
