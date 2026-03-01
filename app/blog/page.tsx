import InsightsGrid from "@/components/InsightsGrid";
import Link from "next/link";


export default function BlogPage() {
  return (
    <section className="py-32">
      <div className="max-w-[1400px] mx-auto px-6">
         

        {/* Back to Portfolio */}
<Link
  href="/"
  className="
    inline-flex 
    items-center 
    gap-2 
    text-sm sm:text-base
    text-neutral-400 
    hover:text-white 
    transition 
    mb-8
  "
>
  ← Back to Portfolio
</Link>


        <h1 className="text-5xl font-bold mb-6">
          Insights & Updates
        </h1>

        <p className="text-neutral-400 mb-16">
          All articles in one place.
        </p>

        <InsightsGrid />
      </div>
    </section>
  );
}
