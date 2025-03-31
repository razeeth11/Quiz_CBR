import { GeneralKnowledge } from "./General-Knowledge";
import { Entertainment } from "./Entertainment";
import { SportsFitness } from "./Sports-Fitness";
import { LoginBrain } from "./LogicBrain";
import { Business } from "./Business-money";
import { Mythology } from "./Mythology";
import { Technology } from "./Technology";
import { FoodLifestyle } from "./Food-Lifestyle";
import { Coding } from "./Coding";

export function QuizCtegories({ selectedCategory }) {
  return (
    <>
      {selectedCategory === "general-knowledge" ? (
        <GeneralKnowledge />
      ) : selectedCategory === "entertainment" ? (
        <Entertainment />
      ) : selectedCategory === "coding" ? (
        <Coding />
      ) : selectedCategory === "sports-fitness" ? (
        <SportsFitness />
      ) : selectedCategory === "logic-brain-teasers" ? (
        <LoginBrain />
      ) : selectedCategory === "business-money" ? (
        <Business />
      ) : selectedCategory === "mythology-folklore" ? (
        <Mythology />
      ) : selectedCategory === "technology-innovation" ? (
        <Technology />
      ) : selectedCategory === "food-lifestyle" ? (
        <FoodLifestyle />
      ) : null}
    </>
  );
}
