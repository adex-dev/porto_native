import type { HomeResponse } from "../types/HomeTypes";

export async function getHomeData(): Promise<HomeResponse> {
  const res = await fetch("https://api.example.com/tester");

  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }

  return res.json();
}