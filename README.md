<div align="center">

<h1>이현규 (Lee HyunKyu)</h1>

<p><strong>AI 네이티브 개발자이고, computer vision과 LLM을 연구합니다.</strong></p>

<p>
  <img src="https://img.shields.io/badge/-AI--native_Developer-111111?style=for-the-badge&logo=claude&logoColor=fff" alt="AI-native Developer">
  <img src="https://img.shields.io/badge/-Computer_Vision-5C3EE8?style=for-the-badge&logo=opencv&logoColor=fff" alt="Computer Vision">
  <img src="https://img.shields.io/badge/-LLM_Researcher-FFD21E?style=for-the-badge&logo=huggingface&logoColor=000" alt="LLM Researcher">
</p>

<a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy-unserori.vercel.app/?username=lhk0721&column=4&no-frame=true&rank=-?" alt="GitHub trophies of lhk0721"></a>

<p>
  <img height="170" src="./profile/stats.svg" alt="GitHub stats of lhk0721">
  <img height="170" src="./profile/top-langs.svg" alt="Most used languages of lhk0721">
</p>

</div>

AI와 함께 개발을 시작한 세대입니다. 코드는 agent가 쓰고, 저는 agent가 지킬 규칙과 문서를
설계합니다. 그 규칙을 모은 harness가 agent-workflow-kit이고, 제 저장소는 전부 그 위에서
돌아갑니다. 연구 주제는 두 가지입니다. 카메라로 사람의 움직임을 재는 computer vision과,
글을 읽고 채점하는 LLM입니다.

## 하는 일

- **RackTracker.** 파워랙에 고정한 global shutter 센서 3대로 같은 순간을 찍고, 세 방향을
  삼각측량해 가려진 관절까지 3D 좌표로 복원합니다. 랙을 원점으로 삼은 좌표에서 관절별
  하중 전이, 수직 저항 무게중심, 모멘트암을 계산해 세트마다 피드백을 줍니다. 연산은 랙
  옆의 Jetson edge device가 촬영과 동시에 실시간으로 처리하고, 영상은 밖으로 나가지
  않습니다. 제품 코드는 비공개이고,
  [사업계획서](https://github.com/lhk0721/racktracker-business-plan)는 공개돼 있습니다.
- **[agent-workflow-kit](https://github.com/lhk0721/agent-workflow-kit).** Claude Code가
  일하는 저장소에 설치하는 agent harness입니다. workflow, Markdown document store,
  backstop hook이 한 벌로 들어갑니다.
- **[uvc-lab](https://github.com/lhk0721/uvc-lab).** 실물 UVC 카메라를 브라우저에서 보고
  재는 도구입니다. Jetson 같은 headless 장비에 서버를 띄우고 노트북에서 접속합니다.
- **[slide-studio](https://github.com/lhk0721/slide-studio).** 발표 자료를 React 컴포넌트로
  쓰고 4K PNG로 내보내는 도구입니다.
- **[한국어 논증문 자동 채점 모델](https://github.com/lhk0721/bajak-model-report).**
  국립국어원 2026 글쓰기 채점 능력 평가에 팀으로 참가해 예선 53팀 중 5위, 종합 상위
  10팀에 들었습니다. 기술서가 공개돼 있습니다.

## 언어와 도구

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

강의 실습 저장소: [NVIDIA-DeepLearning](https://github.com/lhk0721/NVIDIA-DeepLearning),
[NVIDIA-Python](https://github.com/lhk0721/NVIDIA-Python),
[Digital-Image-Processing](https://github.com/lhk0721/Digital-Image-Processing),
[VHDL](https://github.com/lhk0721/VHDL).
