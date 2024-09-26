"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import RecipeLoader from "./recipeLoader";

const RecipeForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const [fetching, setFetching] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFetching(true);
    setOutput("");

    const query = encodeURIComponent(inputValue);
    const url = `http://localhost:3001/queries/get_query_results?query=${query}`;
    const response = await fetch(url, {
      method: "GET",
    });
    const data = await response.json();
    console.log("Server response:", data);
    setOutput(data.query_results);
    setFetching(false);
  };

  const shareRecipe = () => {
    // Handle recipe sharing logic here
    console.log("Shared:", output);
  };

  return (
    <div>
      <form className="space-x-4 flex w-3/4 mx-auto">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your meal requirements"
        />
        <Button onClick={handleSubmit}>
          {fetching ? "Generating..." : "Submit"}
        </Button>
      </form>
      {(fetching || output) && (
        <div className="mt-10 border border-blue-300 shadow rounded-md p-4 w-3/4 mx-auto">
          {fetching && <RecipeLoader />}
          {output && (
            <div className="mt-5 w-full">
              <div className="flex gap-4 justify-between">
                <div className="text-xl font-bold align-center">Output:</div>
                <Button onClick={shareRecipe}>Share Recipe</Button>
              </div>
              <div className="pt-10">
                <pre className="whitespace-pre-wrap break-words">{output}</pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeForm;
