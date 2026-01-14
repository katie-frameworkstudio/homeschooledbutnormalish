"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface Answer {
  text: string;
  scores: {
    cost?: number;
    social?: number;
    looks?: number;
  };
  anchorCategory?: "looks" | "cost" | "social"; // For Question 1 tie-breaking
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "When you think about homeschooling, what's your first thought?",
    answers: [
      { 
        text: "Can I actually afford this?", 
        scores: { cost: 1 },
        anchorCategory: "cost"
      },
      { 
        text: "What about socialization?!", 
        scores: { social: 1 },
        anchorCategory: "social"
      },
      { 
        text: "What does a typical day even look like?", 
        scores: { looks: 1 },
        anchorCategory: "looks"
      },
      { 
        text: "Will I be good enough to teach my kid?", 
        scores: { looks: 1 },
        anchorCategory: "looks"
      },
    ],
  },
  {
    id: 2,
    question: "What's your biggest fear about homeschooling?",
    answers: [
      { text: "My kid will be weird and friendless", scores: { social: 1 } },
      { text: "We'll go broke trying to do this right", scores: { cost: 1 } },
      { text: "I don't know how to structure our days", scores: { looks: 1 } },
      { text: "I'll lose myself and burn out", scores: { looks: 1 } },
    ],
  },
  {
    id: 3,
    question: "What does your budget situation look like?",
    answers: [
      { text: "Tight—we need to make every dollar count", scores: { cost: 1 } },
      { text: "Moderate—willing to invest but need smart choices", scores: { cost: 1 } },
      { text: "Comfortable—budget isn't the main concern", scores: {} },
      { text: "I have no idea what homeschooling costs", scores: { cost: 1 } },
    ],
  },
  {
    id: 4,
    question: "What's your social life like right now?",
    answers: [
      { text: "Very active—we're constantly around people", scores: {} },
      { text: "Moderate—we have some regular activities", scores: {} },
      { text: "Pretty isolated—this is actually a concern", scores: { social: 1 } },
      { text: "Mixed—depends on the week", scores: { social: 1 } },
    ],
  },
  {
    id: 5,
    question: "What worries you most about daily homeschool life?",
    answers: [
      { text: "Not knowing what a schedule should look like", scores: { looks: 1 } },
      { text: "Managing multiple kids at different levels", scores: { looks: 1 } },
      { text: "Finding enough social opportunities", scores: { social: 1 } },
      { text: "Affording curriculum and activities", scores: { cost: 1 } },
    ],
  },
  {
    id: 6,
    question: "Which would help you feel most confident about homeschooling?",
    answers: [
      { text: "Seeing examples of what real homeschool days look like", scores: { looks: 1 } },
      { text: "Knowing it won't ruin my kid socially", scores: { social: 1 } },
      { text: "Having a realistic budget plan", scores: { cost: 1 } },
      { text: "Understanding how to balance everything", scores: { looks: 1 } },
    ],
  },
  {
    id: 7,
    question: "What would make you take the leap into homeschooling?",
    answers: [
      { text: "Proof that homeschoolers have normal social lives", scores: { social: 1 } },
      { text: "Knowing I can afford to do this well", scores: { cost: 1 } },
      { text: "A clear picture of what our days would actually look like", scores: { looks: 1 } },
      { text: "Confidence that I can handle the day-to-day reality", scores: { looks: 1 } },
    ],
  },
];

export default function QuizV2Page() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ looks: 0, cost: 0, social: 0 });
  const [started, setStarted] = useState(false);
  const [anchorCategory, setAnchorCategory] = useState<"looks" | "cost" | "social">("looks");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAnswer = (answer: Answer) => {
    // Prevent double submission
    if (isSubmitting) return;

    // Track anchor category from Question 1
    if (currentQuestion === 0 && answer.anchorCategory) {
      setAnchorCategory(answer.anchorCategory);
    }

    // Update scores
    const newScores = { ...scores };
    if (answer.scores.looks) newScores.looks += answer.scores.looks;
    if (answer.scores.cost) newScores.cost += answer.scores.cost;
    if (answer.scores.social) newScores.social += answer.scores.social;
    setScores(newScores);

    // Move to next question or calculate results
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Set submitting state before navigation
      setIsSubmitting(true);

      // Calculate result with tie-breaking
      const max = Math.max(newScores.looks, newScores.cost, newScores.social);
      let resultType: "looks" | "cost" | "social" = anchorCategory; // Default to anchor from Q1

      if (max > 0) {
        // Check for ties
        const tiedCategories: string[] = [];
        if (newScores.looks === max) tiedCategories.push("looks");
        if (newScores.cost === max) tiedCategories.push("cost");
        if (newScores.social === max) tiedCategories.push("social");

        // If there's a clear winner, use it
        if (tiedCategories.length === 1) {
          resultType = tiedCategories[0] as "looks" | "cost" | "social";
        }
        // If tied, use anchor category from Q1 (already set as default)
      }

      // TODO: Add email capture before navigation (ConvertKit integration)
      // TODO: Track quiz completion event (analytics)
      
      // Navigate to result page
      router.push(`/quiz/v2/result/${resultType}`);
    }
  };

  if (!started) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-24 bg-gradient-to-br from-warm-50 via-warm-100 to-sage-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-sage-900 mb-4 sm:mb-5 tracking-tight leading-tight">
            The Homeschool Big 3
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-sage-600 mb-12 sm:mb-14 md:mb-16 font-light italic">
            Which question matters most to you?
          </p>
          
          <p className="text-lg sm:text-xl text-sage-800 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            Almost every parent thinking about homeschooling is really asking one of three questions:
          </p>
          
          <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 max-w-2xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl text-sage-900 font-normal leading-relaxed">
              What does it actually look like day to day?
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-sage-900 font-normal leading-relaxed">
              How much does it really cost?
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-sage-900 font-normal leading-relaxed">
              Will my kid be weird?
            </p>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-sage-700 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
            This quick quiz helps you identify which of the Big 3 is driving your decision, so you can get clear, practical answers without overwhelm.
          </p>
          
          <p className="text-sm sm:text-base text-sage-500 mb-10 sm:mb-12 md:mb-14">
            Takes about 2 minutes. No email required.
          </p>

          <button
            onClick={() => setStarted(true)}
            className="w-full sm:w-auto px-10 py-4 sm:px-12 sm:py-5 bg-sage-700 text-warm-50 text-lg sm:text-xl font-medium hover:bg-sage-800 transition-all duration-200 rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start the Quiz
          </button>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-warm-50 via-warm-100 to-sage-50">
      <div className="max-w-3xl mx-auto w-full">
        {/* Progress bar */}
        <div className="mb-8 sm:mb-12">
          <div className="flex justify-between text-sm sm:text-base text-sage-700 mb-3 font-medium">
            <span>
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-sage-200 h-3 rounded-full overflow-hidden shadow-inner">
            <div
              className="bg-gradient-to-r from-sage-600 to-sage-700 h-3 transition-all duration-500 ease-out rounded-full shadow-sm"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-sage-900 mb-8 sm:mb-12 leading-tight tracking-tight">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="space-y-4 sm:space-y-5">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              disabled={isSubmitting}
              className="w-full text-left p-5 sm:p-7 bg-white hover:bg-sage-50 text-sage-900 transition-all duration-200 border-2 border-sage-200 hover:border-sage-400 rounded-xl text-base sm:text-lg leading-relaxed shadow-sm hover:shadow-md hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-sage-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {answer.text}
            </button>
          ))}
        </div>
        
        {/* Loading indicator for last question */}
        {isSubmitting && (
          <div className="mt-6 text-center text-sage-700 font-medium">
            Calculating your results...
          </div>
        )}
      </div>
    </div>
  );
}
