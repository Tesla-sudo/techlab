import { categoryContent } from "@/lib/content";

export default async function Page({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  // Await params if necessary and access slug
  const slugPath = params?.slug?.join('/');

  // Get content based on the slug path
  let content = categoryContent[slugPath];

  // Fallback logic for specific 'sustainability' category
  if (!content && params?.slug?.[0] === 'sustainability') {
    const topic = params?.slug?.at(-1) || 'sustainability';
    content = categoryContent[topic]; // Assuming categoryContent has a fallback for topics
  }

  // Handle the case where content is not found
  if (!content) {
    return (
      <div className="p-8">
        <h2>Category not found</h2>
        <p>The requested category does not exist. Please check the URL or try another category.</p>
      </div>
    );
  }

  // Dynamic page styling based on the slug
  const pageClass = slugPath.includes('sustainability/green-energy') || slugPath.includes('tech/mobile-apps')
    ? 'bg-green-50 text-green-900'
    : 'bg-white text-black';

  return (
    <div className={`min-h-screen px-6 space-y-2 py-12 md:px-16 lg:px-24 pt-18 ${pageClass}`}> {/* Added pt-16 for top padding */}
      <div className="max-w-4xl mx-auto space-y-2">
        <h1 className="text-4xl font-extrabold mb-6 capitalize tracking-tight">{content.title}</h1>
        <p className="text-lg leading-relaxed text-gray-800">{content.description}</p>
      </div>
    </div>
  );
}


