"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [portfolioCount, setPortfolioCount] = useState(0);
  const [articleCount, setArticleCount] = useState(0);

  useEffect(() => {
    fetch("/api/admin/portfolio").then(res => res.json()).then(data => setPortfolioCount(data.length || 0));
    fetch("/api/admin/articles").then(res => res.json()).then(data => setArticleCount(data.length || 0));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-600">Total Portfolio</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{portfolioCount}</p>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-gray-600">Total Artikel</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{articleCount}</p>
        </div>
      </div>
    </div>
  );
}