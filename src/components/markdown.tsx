import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      components={{
        p: (props) => (
          <p {...props} className="leading-relaxed text-[#C4C4CC]">
            {props.children}
          </p>
        ),
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
}
