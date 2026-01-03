"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Answer {
  text: string;
  scores: {
    budget?: number;
    social?: number;
    newbie?: number;
  };
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your current school situation?",
    answers: [
      { text: "My kid's thriving, but I'm curious about alternatives", scores: {} },
      { text: "We're managing, but something feels off", scores: {} },
      { text: "Full crisis mode—we need a change NOW", scores: {} },
      { text: "Not currently in school / Hasn't started yet", scores: {} },
    ],
  },
  {
    id: 2,
    question: "When you think about homeschooling, what's your first thought?",
    answers: [
      { text: "Can I actually afford this?", scores: { budget: 1 } },
      { text: "What about socialization?!", scores: { social: 1 } },
      { text: "I have no idea where to even start", scores: { newbie: 1 } },
      { text: "Will I be good enough to teach my kid?", scores: { newbie: 1 } },
    ],
  },
  {
    id: 3,
    question: "What's your biggest fear about homeschooling?",
    answers: [
      { text: "My kid will be weird and friendless", scores: { social: 1 } },
      { text: "We'll go broke trying to do this right", scores: { budget: 1 } },
      { text: "I'll fail them academically", scores: { newbie: 1 } },
      { text: "I'll lose myself and burn out", scores: {} },
      { text: "I'm not qualified to teach", scores: { newbie: 1 } },
    ],
  },
  {
    id: 4,
    question: "How do you feel about your ability to teach your kids?",
    answers: [
      { text: "Confident—I've got this", scores: {} },
      { text: "Nervous but willing to learn", scores: {} },
      { text: "Terrified—I'm not a teacher!", scores: { newbie: 1 } },
      { text: "Uncertain—depends on the subject", scores: {} },
    ],
  },
  {
    id: 5,
    question: "What does your budget situation look like?",
    answers: [
      { text: "Tight—we need to make every dollar count", scores: { budget: 1 } },
      { text: "Moderate—willing to invest but need smart choices", scores: {} },
      { text: "Comfortable—budget isn't the main concern", scores: {} },
      { text: "I have no idea what homeschooling costs", scores: {} },
    ],
  },
  {
    id: 6,
    question: "What's your social life like right now?",
    answers: [
      { text: "Very active—we're constantly around people", scores: {} },
      { text: "Moderate—we have some regular activities", scores: {} },
      { text: "Pretty isolated—this is actually a concern", scores: { social: 1 } },
      { text: "Mixed—depends on the week", scores: {} },
    ],
  },
  {
    id: 7,
    question: "Which sounds most like you?",
    answers: [
      { text: "I need a detailed roadmap or I'll freeze", scores: { newbie: 1 } },
      { text: "I'm good at figuring things out as I go", scores: {} },
      { text: "I want to know all my options before deciding", scores: {} },
      { text: "Just tell me the first step and I'll start", scores: {} },
    ],
  },
  {
    id: 8,
    question: "What would make you feel ready to start homeschooling?",
    answers: [
      { text: "Knowing it won't ruin my kid socially", scores: { social: 1 } },
      { text: "Having a realistic budget plan", scores: { budget: 1 } },
      { text: "Understanding the basics without overwhelm", scores: { newbie: 1 } },
      { text: "Seeing proof it actually works", scores: {} },
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ budget: 0, social: 0, newbie: 0 });
  const [started, setStarted] = useState(false);

  const handleAnswer = (answer: Answer) => {
    // Update scores
    const newScores = { ...scores };
    if (answer.scores.budget) newScores.budget += answer.scores.budget;
    if (answer.scores.social) newScores.social += answer.scores.social;
    if (answer.scores.newbie) newScores.newbie += answer.scores.newbie;
    setScores(newScores);

    // Move to next question or show results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const max = Math.max(newScores.budget, newScores.social, newScores.newbie);
      let resultType = "newbie"; // Default

      if (max === 0) {
        resultType = "newbie";
      } else if (newScores.budget === max) {
        resultType = "budget";
      } else if (newScores.social === max) {
        resultType = "social";
      } else if (newScores.newbie === max) {
        resultType = "newbie";
      }

      router.push(`/quiz/result/${resultType}`);
    }
  };

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 bg-warm-50">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-sage-900 mb-4 sm:mb-6">
            Should You Homeschool? Find Your Path
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-sage-700 mb-6 sm:mb-8 leading-relaxed">
            You&apos;ve been thinking about homeschooling. Maybe you&apos;re curious. Maybe
            you&apos;re desperate to pull your kid out of a broken system. Maybe you just
            want to know if you&apos;re cut out for this.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-sage-600 mb-8 sm:mb-10 md:mb-12">
            Take this 2-minute quiz to find out which homeschool question is keeping
            YOU up at night—and get the exact resources you need to answer it.
          </p>

          <div className="bg-sage-100 p-6 sm:p-8 rounded mb-8 sm:mb-10 md:mb-12 text-left border border-sage-200">
            <h2 className="text-xl sm:text-2xl font-light text-sage-900 mb-3 sm:mb-4">
              What You&apos;ll Get:
            </h2>
            <ul className="space-y-2 sm:space-y-3 text-sage-800">
              <li className="flex items-start text-sm sm:text-base">
                <span className="mr-2 sm:mr-3 flex-shrink-0">✓</span>
                <span>Your personalized homeschool readiness assessment</span>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <span className="mr-2 sm:mr-3 flex-shrink-0">✓</span>
                <span>A custom action plan based on YOUR biggest concern</span>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <span className="mr-2 sm:mr-3 flex-shrink-0">✓</span>
                <span>Free chapter from the book that matches your needs</span>
              </li>
              <li className="flex items-start text-sm sm:text-base">
                <span className="mr-2 sm:mr-3 flex-shrink-0">✓</span>
                <span>Downloadable PDF guide to get you started</span>
              </li>
            </ul>
          </div>

          <button
            onClick={() => setStarted(true)}
            className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-sage-700 text-warm-50 text-base sm:text-lg font-medium hover:bg-sage-800 transition-colors rounded"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 bg-warm-50">
      <div className="max-w-2xl mx-auto w-full">
        {/* Progress bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between text-xs sm:text-sm text-sage-700 mb-2">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-sage-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-sage-700 h-2 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl sm:text-3xl font-light text-sage-900 mb-6 sm:mb-8">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="space-y-3 sm:space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              className="w-full text-left p-4 sm:p-6 bg-sage-50 hover:bg-sage-100 text-sage-900 transition-colors border border-sage-300 hover:border-sage-400 rounded text-sm sm:text-base"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

