# fomo

CLI tool for managing to-read backlogs.

⚠️ All of this is still WIP and whitepaper ⚠️

# Usage

WARNING. NOT READY YET

```
npm i -G @fomo-app/fomo-cli

fomo # start reading random from the list; optionally add query
fomo query # alias to fomo with query
fomo head # and tail, get last/first five items or so
fomo add URI [--triage myTriage.js --fast] # add article or articles
fomo import FILE.CSV [--triage myTriage.js]
fomo stats # output basic stats
fomo out [--config build-config.json] # build static HTML or JSON, or Markdown or whatever
fomo deploy # this is how you Vercelise the product. Export as a public blog that we host
fomo alias # ability to alias most used commands
fomo json # query; output not interactive, but json; enables building UI or debugging?
```

# Concepts

## Document

Document is an internal fomo item. This is your resource plus it's metadata. It doesn't matter what the underlying engine is; mongo, elasticsearch, this should be transparent for the API; e.g. you might imagine fomo with different engines inside.

## Fields

Each Object has Fields. Some of them are system fields with reserved names. You can add extra fields at your own risk. Fields can be Numbers, Strings or Dates, or array of those. Fields make the system elastic. Fields should be sort of tags also?

## Migration

Definitely not MVP, but you should be able to migrate the data or update it in bulk

## Changelog

You should be able to see all history of your interaction with a Document. This is tricky.

## Workspace

fomo should give you an option to manage workspaces? Not sure about it.

# Premise

There are numerous problems with tracking your reading. I am one of the very few people who managed to read through their Pocket backlog; since then, I accumulated another >300 of articles to read and I want to do it again, but in a smarter way.

Let me write down some problems and solutions. The problem-solution pair usually exist in isolation; e.g. it's hard to find a tool that solves them all. This tool will handle them all.

## 🏥 Triage

First of all, my methodology was to extensively and aggressively triage stuff. Frameworks releases are not worth your attention, since they all revolve around the same contexts and ideas; ideas that were invented many years ago. Be it virtual DOM or recent switch to MPA / SSR, it was all there before.

The tool I create should enable automatic article triage and should facilitate decision making. In long run, I imagine it should scrape metadata, classify and tag automatically. I would like to be able to perform triage process in the app.

At first, let it simply store articles to read.

## 🧘‍♀️ Developing a habit (of introspection)

In fact, reading articles requires either focus time or is a microlearning activity. We should be able to get the best of both worlds and empower people via enhancing their ability to self inspect. For some, watching YouTube works best, for the others like me, this is unbearable to focus on a person talking to me slowly for 40 minutes.

Let's make sure to store information about read date and other parameters to enable visualisations, querying, exporting charts etc in the future.

## 🔓 Vendor lock-in

Most of the tools are actually your enemies. They want you to add articles, not read them. Actually, fomo should be designed in a way that makes you feel like you manage the chaos; fomo is the app you ultimately want to uninstall.

In other words, the app should give you the sense of palpable progress via easy integration points with other vendors. It should be possible to extend it's capabilities.

## 🏭 Input-output imbalance

Be mindful that your knowledge means nothing until it's actually used to benefit some other person (not machine). Activities like reading or self-management should not be our primary focus, they should only aid the time you make some positive change in this world.

Creating fomo means bringing ability to export your learnings and musings as a form of easily and freely accessible zettelkasten or other sort of static pages that can be reused by others (reading your notes, bookmarking your bookmarks).
