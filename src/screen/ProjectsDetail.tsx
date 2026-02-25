import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";
// import rehypeHighlight from "rehype-highlight";
import "github-markdown-css/github-markdown.css";
import "highlight.js/styles/github.css";       // light
import "highlight.js/styles/github-dark.css";  // dark
import { useState,useEffect } from "react";
import CodeBlock from "../component/CodeBlock";
// import { useParams } from "react-router-dom";
export default function ProjectsDetail() {
    // const { slug } = useParams();
    const [content, setContent] = useState("");
    const url ="/sample.md"
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then(setContent);
      console.log(content);
      
  }, [url]);
    return(
        <>
         
<div className="markdown-body">
  <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
  code({ className, children }) {
  const isBlock = className?.startsWith("language-");

  if (!isBlock) {
    return <code className="inline-code">{children}</code>;
  }

  return (
    <code className={className}>
      {children}
    </code>
  );
},
    pre({ children }) {
      const codeEl = children as any;

      const className = codeEl?.props?.className || "";
      const match = /language-(\w+)/.exec(className);
      const language = match ? match[1] : "text";

      const code = codeEl.props.children as string;

      return (
        <CodeBlock
          language={language}
          value={code}
        />
      );
    },
  }}
>
  {content}
</ReactMarkdown>

</div>
        </>
    );
};