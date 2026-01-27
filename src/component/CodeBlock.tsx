import { useState } from "react";

export default function CodeBlock({
  language,
  value,
}: {
  language: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-lang">{language}</span>
        <button onClick={onCopy}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre>
        <code className={`language-${language}`}>{value}</code>
      </pre>
    </div>
  );
}
