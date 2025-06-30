// app/components/CodeBlock.tsx
'use client'; // This directive makes it a Client Component

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  language: string;
  value: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      style={dracula} // Apply your preferred code highlight style
      language={language}
      PreTag="div" // Ensures it's wrapped in a div
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;