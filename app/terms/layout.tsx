import React from "react";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className="flex flex-col items-center"
      style={{
        minHeight: "calc(100vh - 448px)",
      }}
    >
      <div className="flex h-[284px] w-full justify-center bg-primary-50">
        <h1 className="mt-[154px] w-[1080px] px-6 font-paperlogy-heading text-[40px] text-white">
          이용약관
        </h1>
      </div>
      <div className="w-[1080px] bg-white px-6">{children}</div>
    </section>
  );
}