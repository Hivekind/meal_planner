"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const RecipeForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here and set the output
    try {
      const response = await fetch(
        "http://localhost:3001/queries/get_query_results"
      );
      const data = await response.json();
      console.log("Server response:", data);
      setOutput(data.query_results); // Example output
    } catch (error) {
      console.error("Error:", error);
    }
    console.log("Submitted:", inputValue);
  };

  const shareRecipe = () => {
    // Handle recipe sharing logic here
    console.log("Shared:", output);
  };

  return (
    <div>
      <form className="space-x-4 flex">
        <Input
          type="text"
          className="w-1/2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your meal requirements"
        />

        <Button onClick={handleSubmit}>Submit</Button>
      </form>
      {output && (
        <div className="mt-5 flex gap-4 w-full">
          <div className="w-1/2">
            <b>Output:</b>
            <p>{output}</p>
          </div>
          <Button onClick={shareRecipe}>Share Recipe</Button>
        </div>
      )}
    </div>
  );
};

export default RecipeForm;
