import { categoryContent } from "@/lib/content";

export const dynamicParams = true;

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return Object.keys(categoryContent).map((key) => ({
    slug: key.split('/'),
  }));
}

type Props = {
  params: { slug: string[] };
};

export default async function Page({ params }: Props) {
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
        <p>The requested category does not exist.</p>
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

