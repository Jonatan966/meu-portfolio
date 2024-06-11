import { ComponentProps } from "react";

type SkeletonProps = ComponentProps<"div">;

export function Skeleton(props: SkeletonProps) {
  return (
    <section className="max-w-[1050px] mx-auto p-4">
      <div
        {...props}
        className={`w-full animate-pulse bg-neutral-800 rounded-md ${
          props.className || ""
        }`}
      >
        {props.children}
      </div>
    </section>
  );
}
