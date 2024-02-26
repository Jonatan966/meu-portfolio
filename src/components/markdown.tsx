import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        p: (props) => (
          <p {...props} className="leading-relaxed text-stone-300">
            {props.children}
          </p>
        ),
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
}
