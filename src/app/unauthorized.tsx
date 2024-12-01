import Link from "next/link";

export default function Unauthorized() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="font-bold text-lg">
        Unautorized
      </h1>
      <div className="flex flex-wrap gap-4">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};
