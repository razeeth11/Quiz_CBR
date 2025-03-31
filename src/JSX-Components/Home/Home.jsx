import { Input } from "@/components/ui/input";
import { Search, Settings2 } from "lucide-react";
import { QuizCtegories } from "../Categories/Categories";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const categoriesList = [
  {
    category: "General Knowledge",
    apiUrl: "general-knowledge",
    value: 1,
  },
  {
    category: "Entertainment & Pop Culture",
    apiUrl: "entertainment",
    value: 2,
  },
  {
    category: "Coding",
    apiUrl: "coding",
    value: 3,
  },
  {
    category: "Sports & Fitness",
    apiUrl: "sports-fitness",
    value: 4,
  },
  {
    category: "Logic & Brain Teasers",
    apiUrl: "logic-brain-teasers",
    value: 5,
  },
  {
    category: "Business & Money",
    apiUrl: "business-money",
    value: 6,
  },
  {
    category: "Mythology & Folklore",
    apiUrl: "mythology-folklore",
    value: 7,
  },
  {
    category: "Technology & Innovation",
    apiUrl: "technology-innovation",
    value: 8,
  },
  {
    category: "Food & Lifestyle",
    apiUrl: "food-lifestyle",
    value: 9,
  },
];

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState("general-knowledge");
  return (
    <header className="flex flex-col">
      <div className="flex flex-col gap-1 p-2.5 md:px-10 md:mt-2.5">
        <p className="text-[18px] md:text-[20px] font-medium">Hello, James</p>
        <h3 className="text-xl md:text-2xl font-medium">
          Let's test your knowledge
        </h3>
      </div>
      <div className="p-2.5 md:px-10 md:mt-5">
        <div className="flex items-center gap-5 overflow-auto whitespace-nowrap border-y">
          {categoriesList.map((item, index) => (
            <Link
              key={index}
              value={item?.apiUrl}
              // to={item.apiUrl}
              onClick={() => setSelectedCategory(item.apiUrl)}
            >
              <Button
                variant="ghost"
                className="px-3 rounded-none cursor-pointer"
                style={{
                  borderBottom:
                    item?.apiUrl === selectedCategory
                      ? "3px solid #652de7"
                      : "white",
                  color: item?.apiUrl === selectedCategory ? "#652de7" : "#000",
                  transform: item?.apiUrl === selectedCategory && "scale(1.05)",
                }}
              >
                {item?.category}
              </Button>
            </Link>
          ))}
        </div>
        <div className="mt-5">
          <QuizCtegories selectedCategory={selectedCategory} />
        </div>
      </div>
    </header>
  );
}
