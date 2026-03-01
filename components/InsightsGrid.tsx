"use client";

import { useState } from "react";
import { insights } from "./insights-data";
import InsightCard from "./InsightCard";
import InsightModal from "./InsightModal";

export default function InsightsGrid({ limit }: { limit?: number }) {
  const [activeArticle, setActiveArticle] = useState<any>(null);

  const displayed = limit ? insights.slice(0, limit) : insights;

  return (
    <>
      <div className="grid md:grid-cols-3 gap-8">
        {displayed.map((article) => (
          <InsightCard
            key={article.id}
            article={article}
            onClick={() => setActiveArticle(article)}
          />
        ))}
      </div>

      {activeArticle && (
        <InsightModal
          article={activeArticle}
          onClose={() => setActiveArticle(null)}
        />
      )}
    </>
  );
}
