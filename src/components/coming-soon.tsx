import { ComponentProps } from "react";

type ComingSoonProps = ComponentProps<"div">;

export function ComingSoon(props: ComingSoonProps) {
  return (
    <div
      {...props}
      className={`rounded-md border border-dashed border-[#232327] text-center font-bold px-4 py-10 ${
        props.className || ""
      }`}
    >
      Em breve isso estará disponível...
    </div>
  );
}
