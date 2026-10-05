<div align="center">

<h1>Lee HyunKyu (이현규)</h1>

<p><strong>AI-native developer, researching computer vision and LLMs.</strong></p>

<p>
  <img src="https://img.shields.io/badge/-AI--native_Developer-111111?style=for-the-badge&logo=claude&logoColor=fff" alt="AI-native Developer">
  <img src="https://img.shields.io/badge/-Computer_Vision-5C3EE8?style=for-the-badge&logo=opencv&logoColor=fff" alt="Computer Vision">
  <img src="https://img.shields.io/badge/-LLM_Researcher-FFD21E?style=for-the-badge&logo=huggingface&logoColor=000" alt="LLM Researcher">
</p>

<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="./profile/trophy.svg" alt="GitHub trophies of lhk0721"></a>

<p>
  <img height="170" src="./profile/stats.svg" alt="GitHub stats of lhk0721">
  <img height="170" src="./profile/top-langs.svg" alt="Most used languages of lhk0721">
</p>

</div>

I design and verify; a Claude Code agent implements, inside a harness I built. The
harness is agent-workflow-kit: a workflow that binds the issue, the branch and the
management document under one key, context engineering that runs Markdown as a document
store, and hooks that catch the moment a rule was skipped. Every repository of mine runs
on it.

Two research lines: computer vision that reconstructs joints in 3D by multi-camera
triangulation and computes the biomechanics in real time on an edge device, and an LLM
that reads and scores Korean argumentative essays.

## Work

- **RackTracker.** Three global-shutter sensors fixed to a power rack expose on one
  trigger, and triangulation across the three views reconstructs the joints in 3D,
  occluded ones included. In rack-origin coordinates it computes per-joint load transfer,
  the vertical-resistance centre of mass and the moment arm, and feeds back after every
  set. A Jetson edge device beside the rack does the computation in real time as the
  frames arrive, and no video leaves it. The product code is private; the
  [business plan](https://github.com/lhk0721/racktracker-business-plan) is public.
- **[agent-workflow-kit](https://github.com/lhk0721/agent-workflow-kit).** An agent
  harness installed into the repositories Claude Code works in: a workflow, a Markdown
  document store and backstop hooks, as one set.
- **[pipeplot](https://pipeplot.pages.dev).** three.js scenes of neural-network
  pipelines. A computer-vision inference pipeline laid out left to right in its tensor
  shapes, and beside it one convolution layer as input feature map, kernels and output
  feature map. The code is private; the site is public.
- **[slide-studio](https://github.com/lhk0721/slide-studio).** Presentation decks written
  as React components and exported as 4K PNGs.
- **[Korean essay scoring model](https://github.com/lhk0721/bajak-model-report).** Our
  team's model for the National Institute of Korean Language's 2026 writing-assessment
  evaluation placed 5th of 53 teams in the preliminary round and in the overall top 10.
  The technical report is public.

## Languages and tools

<p>
  <img src="https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/-C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white" alt="C++">
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React">
  <img src="https://img.shields.io/badge/-Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI">
  <img src="https://img.shields.io/badge/-OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" alt="OpenCV">
  <img src="https://img.shields.io/badge/-three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white" alt="three.js">
  <img src="https://img.shields.io/badge/-Jetson-76B900?style=for-the-badge&logo=nvidia&logoColor=white" alt="NVIDIA Jetson">
  <img src="https://img.shields.io/badge/-Claude_Code-D97757?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code">
</p>
