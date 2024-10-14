import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function useActivePage() {
  const searchParams = useSearchParams();
  const [activePage, setActivePage] = useState("home");

  useEffect(() => {
    const page = searchParams.get("page");
    if (page === "photo-card") {
      setActivePage("photo-card");
    } else {
      setActivePage("home");
    }
  }, [searchParams]);

  return [activePage, setActivePage] as const; // TypeScript의 const assertion
}
