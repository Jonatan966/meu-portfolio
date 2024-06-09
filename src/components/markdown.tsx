import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  children: string;
}

export function Markdown(props: MarkdownProps) {
  return (
    <ReactMarkdown
      className="flex flex-col gap-4 text-stone-300"
      components={{
        p: (props) => (
          <p {...props} className="text-lg leading-relaxed">
            {props.children}
          </p>
        ),
        h3: (props) => (
          <h3 {...props} className="text-lg  font-bold">
            {props.children}
          </h3>
        ),
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
}
