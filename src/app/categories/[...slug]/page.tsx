import { categoryContent } from "@/lib/content";
import { Metadata } from "next";

export const dynamicParams = true;

export async function generateStaticParams(): Promise<Array<{ slug: string[] }>> {
  return Object.keys(categoryContent).map((key) => ({
    slug: key.split("/"),
  }));
}

type PageProps = {
  params: {
    slug: string[];
  };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const slugPath = params.slug.join("/");
  const content = categoryContent[slugPath];

  return {
    title: content?.title || "Category",
    description: content?.description || "Explore our content.",
  };
}

export default async function Page({ params }: PageProps) {
  const slugPath = params.slug.join("/");
  let content = categoryContent[slugPath];

  // fallback for sustainability sub-paths
  if (!content && params.slug[0] === "sustainability") {
    const fallbackKey = params.slug.at(-1) || "sustainability";
    content = categoryContent[fallbackKey];
  }

  if (!content) {
    return (
      <div className="min-h-screen p-8">
        <h2 className="text-2xl font-semibold">Category not found</h2>
        <p className="text-gray-600">The requested category does not exist.</p>
      </div>
    );
  }

  const pageClass =
    slugPath.includes("sustainability/green-energy") ||
    slugPath.includes("tech/mobile-apps")
      ? "bg-green-50 text-green-900"
      : "bg-white text-black";

  return (
    <div className={`min-h-screen px-6 py-12 ${pageClass}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6">{content.title}</h1>
        <p className="text-lg text-gray-800">{content.description}</p>
      </div>
    </div>
  );
}


