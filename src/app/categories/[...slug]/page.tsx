// --- Module Imports ---
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from '@/Components/Code/CodeBlock'; // Adjust to match your folder casing

// --- Static Blog Data ---
const blogData: { [key: string]: string } = {
  'green-energy': `
# Green Energy Innovations and their Impact

Green energy sources such as solar, wind, and hydroelectric power are transforming how we produce electricity.

## Solar Power
Solar technology continues to advance rapidly, making it more affordable and accessible.

## Wind Power
Wind farms are becoming a common sight, harnessing natural airflow to produce clean energy.

- Solar panels
- Wind turbines
- Hydroelectric dams
`,
  'sustainable-living': `
# Practical Steps for Sustainable Living

Living sustainably starts with small, consistent changes.

## Reduce Plastic Use
Avoid single-use plastics by opting for reusable alternatives.

## Conserve Water
Fix leaks and install low-flow fixtures to save water.

- Recycle properly
- Buy local products
- Use public transportation
`,
  'climate-change': `
# Understanding and Addressing Climate Change

Climate change is a pressing issue that affects every aspect of our lives — from weather patterns to global food security.

## Causes of Climate Change
Climate change is primarily driven by the increased concentration of greenhouse gases (GHGs) like CO₂ and methane.

## Global Impact
Rising sea levels, more frequent wildfires, and extreme weather events are just a few consequences.

## What Can We Do?
Every action counts. Governments, businesses, and individuals all have a role to play:

- Switch to renewable energy
- Support climate-friendly policies
- Reduce meat consumption
- Use energy-efficient appliances
`,
  'eco-friendly-products': `
# Exploring the World of Eco-Friendly Products

Eco-friendly products are designed to reduce harm to the environment while providing the same (or better) functionality as conventional alternatives.

## What Makes a Product Eco-Friendly?

- Made from sustainable or recycled materials
- Biodegradable or compostable
- Manufactured using low-impact processes

## Examples You Can Start Using Today

- **Bamboo toothbrushes** instead of plastic
- **Compostable trash bags**
- **Refillable cleaning products**
- **Solar-powered chargers**
- **Organic cotton clothing**

## Why It Matters

Using eco-conscious products reduces landfill waste, supports ethical brands, and decreases our overall ecological footprint.
`,
};

// --- Metadata Mapping ---
const topicMap: { [key: string]: string } = {
  'green-energy': 'Green Energy Innovations and their Impact',
  'sustainable-living': 'Practical Steps for Sustainable Living',
  'climate-change': 'Understanding and Addressing Climate Change',
  'eco-friendly-products': 'Exploring the World of Eco-Friendly Products',
};

// --- Static Params ---
export async function generateStaticParams() {
  const sustainabilityTopics = Object.keys(topicMap);
  return sustainabilityTopics.map((topic) => ({
    slug: ['sustainability', topic],
  }));
}

// --- Metadata (SEO) ---
export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const awaitedParams = await (params as any);
  const subTopicSlug = awaitedParams.slug.at(-1);
  const mappedTopic = subTopicSlug ? topicMap[subTopicSlug] : undefined;

  return {
    title: mappedTopic ? `${mappedTopic} | Sustainability Blog` : 'Sustainability Blog',
    description: mappedTopic
      ? `Read a comprehensive blog post about ${mappedTopic} and its impact on sustainability.`
      : 'Explore various topics related to sustainability and green living.',
  };
}

// --- Page Component ---
export default async function Page({ params }: { params: { slug: string[] } }) {
  const awaitedParams = await (params as any);
  const fullSlug = awaitedParams.slug.join('/');
  const subTopicSlug = awaitedParams.slug.at(-1);

  if (!subTopicSlug || !blogData[subTopicSlug]) {
    notFound();
  }

  const blogContent = blogData[subTopicSlug];
  const pageTitle = topicMap[subTopicSlug];

  const pageClass = fullSlug.startsWith('sustainability/')
    ? 'bg-sky-100 text-sky-900'
    : 'bg-white text-gray-900';

  return (
    <div className={`min-h-screen ${pageClass}`}>
     

      {/* --- Main Content + Resources --- */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Blog Content --- */}
          <article className="prose lg:prose-xl flex-1 bg-white rounded-lg p-6 shadow-sm border border-sky-300">
            <h1 className="text-4xl font-extrabold text-sky-800 mb-6">{pageTitle}</h1>
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return match ? (
                    <CodeBlock language={match[1]} value={String(children).replace(/\n$/, '')} />
                  ) : (
                    <code className={className} {...props}>{children}</code>
                  );
                },
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-sky-700 mt-6 mb-3" {...props} />,
                h3: ({ node, ...props }) => <h3 className="text-xl font-semibold text-sky-600 mt-4 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="mb-3" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-3" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-3" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-bold text-sky-900" {...props} />,
              }}
            >
              {blogContent}
            </Markdown>
          </article>

          {/* --- Downloadable Resources --- */}
          <aside className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-sky-300 h-fit">
            <h2 className="text-2xl font-bold text-sky-800 mb-4">Downloadable Resources</h2>
            <ul className="space-y-4 text-sky-700">
              <li>
                <a
                  href="https://doi.org/10.1007/s11625-018-0627-5"
                  download
                  className="underline hover:text-sky-900 transition"
                >
                  🌱 Green Energy Guide (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://www.researchgate.net/publication/47697344_What_is_Sustainability"
                  download
                  className="underline hover:text-sky-900 transition"
                >
                  🏡 Sustainable Living Checklist (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://doi.org/10.1007/s11625-018-0627-5"
                  download
                  className="underline hover:text-sky-900 transition"
                >
                  🌍 Climate Change Factsheet (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://doi.org/10.1007/s11625-018-0627-5"
                  download
                  className="underline hover:text-sky-900 transition"
                >
                  ♻️ Eco-Friendly Products Catalog (PDF)
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </main>

      {/* --- Footer --- */}
     
    </div>
  );
}


