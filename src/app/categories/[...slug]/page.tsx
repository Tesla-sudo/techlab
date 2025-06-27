// src/app/categories/[...slug]/page.tsx
import { categoryContent } from "@/lib/content";

interface PageProps {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  { slug: string[] }[]
> {
  const paths = Object.keys(categoryContent).map((key) => ({
    slug: key.split("/"),
  }));
  return paths;
}

export default async function Page({ params }: PageProps) {
  const slugPath = params.slug.join("/");

  let content = categoryContent[slugPath];

  if (!content && params.slug[0] === "sustainability") {
    const topic = params.slug.at(-1) || "sustainability";
    content = categoryContent[topic];
  }

  if (!content) {
    return (
      <div className="p-8">
        <h2>Category not found</h2>
        <p>The requested category does not exist. Please check the URL.</p>
      </div>
    );
  }

  const pageClass =
    slugPath.includes("sustainability/green-energy") ||
    slugPath.includes("tech/mobile-apps")
      ? "bg-green-50 text-green-900"
      : "bg-white text-black";

  return (
    <div
      className={`min-h-screen px-6 space-y-2 py-12 md:px-16 lg:px-24 pt-18 ${pageClass}`}
    >
      <div className="max-w-4xl mx-auto space-y-2">
        <h1 className="text-4xl font-extrabold mb-6 capitalize tracking-tight">
          {content.title}
        </h1>
        <p className="text-lg leading-relaxed text-gray-800">
          {content.description}
        </p>
      </div>
    </div>
  );
}

