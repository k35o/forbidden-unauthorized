import Link from "next/link";
import { handleForbidden, handleNotFound, handleUnautorized } from "./_action";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-8">
      <h1 className="font-bold text-lg">
        not found, forbiddenm or unauthorized
      </h1>
      <div className="flex flex-wrap gap-4">
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/not-found"
        >
          Go Not Found
        </Link>
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/forbidden"
        >
          Go Forbidden
        </Link>
        <Link
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="/unauthorized"
        >
          Go Unauthorized
        </Link>
      </div>
      <div className="flex flex-wrap gap-4">
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          onClick={handleNotFound}
        >
          Not Found Action
          </button>
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          onClick={handleForbidden}
        >
          Forbidden Action
        </button>
        <button
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          onClick={handleUnautorized}
        >
          Unauthorized Action
        </button>
      </div>
    </main>
  );
}
