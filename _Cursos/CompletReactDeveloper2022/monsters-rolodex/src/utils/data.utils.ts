import { killers } from "../data/killersList.js";

export const anyKillers: any = killers;

export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  // { method: "GET", mode: 'cors', headers: { 'Content-Type': 'application/json',}}
  return await response.json();
};
