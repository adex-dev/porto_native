// file function untuk mengambil data Home
import { HomeResponse } from "../types/HomeTypes";

export async function getHomeData(): Promise<HomeResponse> {
  const res = await fetch("https://api.example.com/home");

  if (!res.ok) {
    throw new Error("Failed to fetch home data");
  }

  return res.json();
}
