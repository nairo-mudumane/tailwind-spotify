import { IChildren } from "@/@types";

export function PageContainer({ children }: IChildren) {
  return <main className="p-6">{children}</main>;
}
