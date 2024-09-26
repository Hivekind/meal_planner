import Header from "@/components/header";
import RecipeForm from "@/components/recipeForm";

export default function Page() {
  return (
    <main>
      {<Header title="Meal Planner" />}
      <div className="container m-auto mt-5">{<RecipeForm />}</div>
    </main>
  );
}
