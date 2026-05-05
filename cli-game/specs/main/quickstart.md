# Quickstart: QuizMaster CLI

## Prerequisites
- Node.js LTS
- npm or pnpm

## Installation
```bash
npm install
```

## Running the Quiz
To start the interactive quiz:
```bash
npm start
```

## Running Tests
To run the unit tests:
```bash
npm test
```

## Questions Data
Questions are loaded from `src/data/questions.json`. You can modify this file to add or change questions.
Format:
```json
[
  {
    "id": "q1",
    "text": "What is the capital of France?",
    "options": ["London", "Paris", "Berlin", "Madrid"],
    "answerIndex": 1
  }
]
```
