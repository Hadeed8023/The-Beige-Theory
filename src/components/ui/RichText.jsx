import { Fragment } from "react";

// Only deliberate emphasis and line breaks are rendered. Copy is never HTML.
export default function RichText({ text, emphasisClassName }) {
  return text.split(/(\{em\}[\s\S]*?\{\/em\}|\n)/g).map((part, i) => {
    if (part === "\n")
      return (
        <Fragment key={i}>
          {" "}
          <br />
        </Fragment>
      );
    if (part.startsWith("{em}"))
      return (
        <em className={emphasisClassName} key={i}>
          {part.slice(4, -5)}
        </em>
      );
    return part;
  });
}
