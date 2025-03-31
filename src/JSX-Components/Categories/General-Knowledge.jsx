import { Card } from "@/components/ui/card";
import { Clock, Star, TableProperties } from "lucide-react";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

export const categoryQuizlist = [
  {
    category: "General Knowledge",
    quizName: "World Capitals",
    time: 300,
    quizLevel: "medium",
    rating: 4.5,
    questions: 20,
  },
  {
    category: "General Knowledge",
    quizName: "History of Ancient",
    time: 300,
    quizLevel: "hard",
    rating: 4.7,
    questions: 25,
  },
  {
    category: "General Knowledge",
    quizName: "Famous Landmarks",
    time: 300,
    quizLevel: "easy",
    rating: 4.2,
    questions: 15,
  },
  {
    category: "General Knowledge",
    quizName: "Continents & Oceans",
    time: 180,
    quizLevel: "easy",
    rating: 4.1,
    questions: 12,
  },
  {
    category: "General Knowledge",
    quizName: "The Solar System",
    time: 300,
    quizLevel: "medium",
    rating: 4.6,
    questions: 18,
  },
  {
    category: "General Knowledge",
    quizName: "Famous Personalities",
    time: 300,
    quizLevel: "hard",
    rating: 4.4,
    questions: 20,
  },
  {
    category: "General Knowledge",
    quizName: "Inventions",
    time: 450,
    quizLevel: "medium",
    rating: 4.3,
    questions: 15,
  },
  {
    category: "General Knowledge",
    quizName: "World Wars",
    time: 300,
    quizLevel: "hard",
    rating: 4.8,
    questions: 25,
  },
  {
    category: "General Knowledge",
    quizName: "World Languages",
    time: 300,
    quizLevel: "medium",
    rating: 4.5,
    questions: 18,
  },
  {
    category: "General Knowledge",
    quizName: "Natural Wonders",
    time: 180,
    quizLevel: "easy",
    rating: 4.2,
    questions: 12,
  },
  {
    category: "General Knowledge",
    quizName: "Art and Culture",
    time: 450,
    quizLevel: "medium",
    rating: 4.6,
    questions: 15,
  },
  {
    category: "General Knowledge",
    quizName: "Flags and Symbols",
    time: 300,
    quizLevel: "hard",
    rating: 4.3,
    questions: 20,
  },
  {
    category: "General Knowledge",
    quizName: "Famous Festivals",
    time: 450,
    quizLevel: "medium",
    rating: 4.4,
    questions: 18,
  },
  {
    category: "General Knowledge",
    quizName: "World Economy",
    time: 300,
    quizLevel: "hard",
    rating: 4.7,
    questions: 25,
  },
  {
    category: "General Knowledge",
    quizName: "Tallest Buildings",
    time: 300,
    quizLevel: "easy",
    rating: 4.1,
    questions: 15,
  },
];

export function GeneralKnowledge() {
  const [quizList, setQuizList] = useState([]);

  useEffect(() => {
    setQuizList(categoryQuizlist);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      //   sx={{ height: "100vh" }}
      //   className="overflow-scroll"
    >
      {quizList?.map((item, index) => (
        <QuizDetailCard item={item} key={index} />
      ))}
    </Grid>
  );
}

export function QuizDetailCard({ item, index }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Card className="flex flex-row gap-3 p-2 rounded cursor-pointer">
        <div className="w-[90px] h-[90px] bg-gray-600 rounded">
          {/* <img alt="quiz-card-image" className="h-[60px] w-[60px] rounded" /> */}
        </div>
        <div className="flex flex-col gap-2.5 justify-center">
          <p className="flex items-end justify-between gap-2.5 font-medium text-[#652de7] text-[14px]">
            {item?.quizName}
            <span className="flex items-center gap-1 text-amber-500">
              <Star size={12} />
              <span className="text-[12px]">{item?.rating}</span>
            </span>
          </p>
          <p className="flex items-center gap-1.5 text-[12px] font-medium">
            <TableProperties size={12} /> {item?.questions} Questions
          </p>
          <p className="flex items-center gap-1.5 text-[12px] font-medium">
            <Clock size={12} /> {item?.time / 60} Minutes
          </p>
        </div>
      </Card>
    </Grid>
  );
}
