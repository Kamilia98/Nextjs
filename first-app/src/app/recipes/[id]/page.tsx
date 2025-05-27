'use client';
import React, {  useEffect, useState } from 'react';
import RecipeDetails from '@/components/RecipeDetails';
import { ArrowLeft } from 'lucide-react';
import axios from 'axios';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Recipe {
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://dummyjson.com/recipes/${id}`
        );
        setRecipe(response.data);
        setError('');
      } catch (err) {
        setError('Failed to load recipe. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [params.id]);

  return (
    <div className="container mx-auto py-8">
      <Link
        href="/recipes"
        className="inline-flex items-center text-olive-700 hover:text-olive-900 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Recipes
      </Link>

      {loading && (
        <p className="text-gray-500 text-center mt-12">Loading recipe...</p>
      )}

      {error && <p className="text-red-500 text-center mt-12">{error}</p>}

      {!loading && !error && recipe && <RecipeDetails recipe={recipe} />}
    </div>
  );
};

export default RecipeDetail;
