<!--
  GitHub Profile README: Adithya R Kulkarni (@Tech-Adii)
  Portfolio: https://about-adithya.netlify.app | LinkedIn: https://linkedin.com/in/adithya-r-kulkarni
-->
 
<div align="center">
<img width="100%" alt="Adithya R Kulkarni: AI, intelligent systems, software, IoT and robotics" src="https://capsule-render.vercel.app/api?type=waving&height=240&color=0:0f172a,40:1e40af,75:6d28d9,100:0f172a&text=Adithya%20R%20Kulkarni&fontSize=46&fontAlignY=38&fontColor=ffffff&animation=fadeIn&desc=AI%20%7C%20Intelligent%20Systems%20%7C%20Software%20%7C%20IoT%20%7C%20Robotics&descAlignY=60&descSize=16" />
<a href="https://github.com/Tech-Adii">
  <img alt="Animated introduction" src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&pause=1400&color=38BDF8&center=true&vCenter=true&width=860&lines=From+microcontrollers+to+machine+learning;ECE+roots+%E2%86%92+AI%2FML+at+RV+College+of+Engineering;I+build+private%2C+offline-first+AI+tools;Understand+deeply.+Prototype+small.+Measure.+Ship." />
</a>
<br/>
<a href="https://about-adithya.netlify.app"><img src="https://img.shields.io/badge/Portfolio-about--adithya.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Portfolio" /></a>
<a href="https://www.linkedin.com/in/adithya-r-kulkarni"><img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://github.com/Tech-Adii?tab=repositories"><img src="https://img.shields.io/badge/GitHub-Repositories-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub repositories" /></a>
 
<br/><br/>
 
<img src="https://img.shields.io/badge/BE%20CSE%20(AI%20%26%20ML)-RVCE%20·%202029-a78bfa?style=flat-square" alt="BE CSE AIML, RVCE, 2029" />
<img src="https://img.shields.io/badge/Karnataka%20DCET%202026-Rank%2038-22c55e?style=flat-square" alt="Karnataka DCET 2026 Rank 38" />
<img src="https://img.shields.io/badge/Diploma%20ECE-9.92%20CGPA-f59e0b?style=flat-square" alt="Diploma in ECE, 9.92 CGPA" />
<img src="https://komarev.com/ghpvc/?username=Tech-Adii&label=Profile+views&color=7c3aed&style=flat-square" alt="Profile views" />
</div>
<br/>
> **I connect the physical and digital sides of engineering:** embedded hardware on one end, machine learning and full-stack software on the other.
 
<div align="center">
[About](#-about-me) · [Projects](#-featured-projects) · [Tech Stack](#-tech-stack) · [Journey](#-academic-journey) · [Stats](#-github-stats) · [Contact](#-lets-connect)
 
</div>
---
 
## 👨‍💻 About Me
 
I'm a **B.E. Computer Science & Engineering (AI & ML)** student at **RV College of Engineering, Bengaluru** (lateral entry, Class of 2029), coming from a **Diploma in Electronics & Communication Engineering**. I started with microcontrollers, sensors and soldering irons, and now apply that hardware intuition to AI systems, computer vision, ML security and full-stack development.
 
| | |
| :-- | :-- |
| 🎓 **Studying** | B.E. CSE (AI & ML), RVCE Bengaluru |
| 🧠 **Focus areas** | Data structures & algorithms, ML foundations, computer vision, system design |
| 🛡️ **Interests** | On-device edge AI, ML security and model watermarking, privacy-first software, robotics |
| 🛠️ **How I work** | Build the smallest working prototype, measure it, document it, then ship |
| 📍 **Based in** | Karnataka, India |
 
---
 
## 🚀 Featured Projects
 
| Project | What it is | Stack |
| :-- | :-- | :-- |
| [**ScreenWell**](#-screenwell) | Offline desktop AI wellness companion | Electron · React · MediaPipe · SQLite · TypeScript |
| [**FreshGuard AI**](#%EF%B8%8F-freshguard-ai) | Real-time fact-verification shield for LLM output | Python · FastAPI · Tavily · Gemini |
| [**ModelTrace**](#-modeltrace) | Model extraction attack and neural watermark defense demo | Python · PyTorch · Streamlit · FastAPI |
| [**KiranaMitra AI**](#-kiranamitra-ai) | Inventory and purchase planning for local retail | React · FastAPI · SQLite · Gemini Vision |
 
<br/>
### 💻 ScreenWell
**Offline desktop AI companion for healthier study and work habits** · built for the Applied Design Thinking Lab (CS238DL), aligned with **UN SDG 3: Good Health and Well-Being**
 
`Electron` `React` `TypeScript` `MediaPipe Tasks Vision (WASM)` `SQLite` `Vitest` `Playwright`
 
- 👁️ **On-device vision:** MediaPipe Face and Pose Landmarkers run in Web Workers to track blink rate (Eye Aspect Ratio), posture alignment, and forward-head proximity.
- 🔒 **Privacy by design:** camera is off by default, frames are processed in RAM only (nothing saved or sent), and no internet connection is needed.
- ⏱️ **Focus and pacing:** study profiles (Quick Review, Balanced Study, Practice Exam), taskbar countdown badge, non-intrusive popups, and an Important Task Mode.
- 🧘 **Routines and analytics:** guided 20-20-20 eye rest, 16 illustrated desk stretches, offline voice guidance, hydration logging, and PDF/CSV exports.
- 🧪 **Tested:** 118 unit tests (Vitest) and 22 desktop end-to-end scenarios (Playwright) on Windows 11.
[![Latest release](https://img.shields.io/badge/Release-v1.14.0-38bdf8?style=flat-square&logo=github)](https://github.com/Tech-Adii/ScreenWell/releases/tag/v1.14.0)
[![Repository](https://img.shields.io/badge/Repository-ScreenWell-181717?style=flat-square&logo=github)](https://github.com/Tech-Adii/ScreenWell)
[![Validation](https://img.shields.io/badge/Validation-118%20unit%20%7C%2022%20E2E-8b5cf6?style=flat-square)](https://github.com/Tech-Adii/ScreenWell/blob/main/VALIDATION.md)
 
---
 
### 🛡️ FreshGuard AI
**Real-time fact shield for generative AI** · built for the Geek Room Global AI Hackathon (HackCulture), Problem Statement 06: AI Agents & Intelligent Systems
 
`Python` `FastAPI (async)` `Bifrost AI Gateway` `Tavily Search API` `Google Gemini` `Pytest`
 
- ⚡ **Temporal drift detection:** intercepts LLM answers to catch outdated facts, hallucinations, and stale web data.
- 🌐 **Live web grounding:** checks claims against real-time search results through the Tavily API.
- 🌉 **Gateway architecture:** built on Bifrost (Maxim AI) for multi-model observability, fallback routing, and latency targets.
- ✅ **Automated checks:** fact-verification and failover scenarios covered by a Pytest suite, all passing.
[![Repository](https://img.shields.io/badge/Repository-freshguard--ai-181717?style=flat-square&logo=github)](https://github.com/Tech-Adii/freshguard-ai)
 
---
 
### 🔬 ModelTrace
**Model extraction attacks and neural watermark verification** · ML security prototype
 
`Python` `PyTorch` `Streamlit` `FastAPI`
 
- 🎯 **Extraction simulation:** shows how an attacker can query a black-box image classifier and train a close surrogate.
- 🔑 **Watermark verification:** trigger-based backdoor watermarks embedded at training time help prove ownership of a suspected stolen replica without hurting clean accuracy.
- 📊 **Interactive UI:** side-by-side model views, prediction diffs, trigger injection, and watermark statistical tests.
[![Repository](https://img.shields.io/badge/Repository-modeltrace-181717?style=flat-square&logo=github)](https://github.com/Tech-Adii/modeltrace-watermark-demo)
[![Live demo](https://img.shields.io/badge/Live%20demo-Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white)](https://modeltrace-watermark-demo-2fyh3a9qpi3dco3cz5sx9m.streamlit.app/)
 
---
 
### 🏪 KiranaMitra AI
**Smart inventory and purchase planning for local retail** · MVP
 
`React` `FastAPI` `Python` `SQLite` `Gemini Vision API`
 
- 📦 **Inventory control:** tracks stock per SKU, flags near-expiry perishables, and computes reorder thresholds.
- 🧾 **Invoice OCR:** extracts line items and purchase costs from paper invoices with multimodal Gemini Vision.
- 💡 **Approval-first planning:** suggests cost-optimized restocking, but nothing is ordered without the shopkeeper's confirmation.
[![Repository](https://img.shields.io/badge/Repository-KIRANA-181717?style=flat-square&logo=github)](https://github.com/Tech-Adii/KIRANA)
 
---
 
<!--
### 🤖 Hardware, IoT & Robotics
Paste the rest of this section here. Suggested format:
| Project | Stack | Highlights | Repo |
| :-- | :-- | :-- | :-- |
| Smart Shopping Trolley | ... | ... | [Link](...) |
-->
 
## 🧰 Tech Stack
 
| Area | Tools |
| :-- | :-- |
| **Languages** | ![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) |
| **AI / ML** | ![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white) ![MediaPipe](https://img.shields.io/badge/MediaPipe-0097A7?style=flat-square&logo=google&logoColor=white) ![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat-square&logo=googlegemini&logoColor=white) |
| **Backend** | ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=sqlite&logoColor=white) ![Streamlit](https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white) |
| **Frontend / Desktop** | ![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB) ![Electron](https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white) |
| **Testing** | ![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white) ![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white) ![Pytest](https://img.shields.io/badge/Pytest-0A9EDC?style=flat-square&logo=pytest&logoColor=white) |
| **Tools** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white) |
 
---
 
## 🎓 Academic Journey
 
| Milestone | Details |
| :-- | :-- |
| **B.E. CSE (AI & ML)** | RV College of Engineering, Bengaluru · lateral entry, Class of 2029 |
| **Karnataka DCET 2026** | Rank 38 |
| **Diploma in ECE** | 9.92 CGPA |
 
---
 
## 📊 GitHub Stats
 
<div align="center">
<img height="170" alt="GitHub stats" src="https://github-readme-stats.vercel.app/api?username=Tech-Adii&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" />
<img height="170" alt="Most used languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tech-Adii&layout=compact&theme=tokyonight&hide_border=true" />
<img alt="GitHub streak" src="https://streak-stats.demolab.com/?user=Tech-Adii&theme=tokyonight&hide_border=true" />
</div>
---
 
## 🤝 Let's Connect
 
I'm open to internships, collaborations, and conversations about AI, edge ML, security, and embedded systems.
 
<div align="center">
[![Portfolio](https://img.shields.io/badge/Portfolio-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://about-adithya.netlify.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adithya-r-kulkarni)
 
<img width="100%" alt="Footer" src="https://capsule-render.vercel.app/api?type=waving&height=100&color=0:0f172a,40:1e40af,75:6d28d9,100:0f172a&section=footer" />
</div>
 
