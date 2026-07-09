import { fetchCardData } from "@/app/lib/data";

export default async function Page() {
  const { numberOfCustomers } = await fetchCardData();
  return <p>Customers Page {numberOfCustomers}</p>;
}
