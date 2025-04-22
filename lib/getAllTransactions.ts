export default async function getAllTransactions() {
    const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    const result = await fetch(
        `${API_URL}/transactions`,
        {
            next: {
                revalidate: 10,
            },
        }
    );

    if (!result.ok) {
        throw new Error("There was an error fetching Transactions");
    }

    return result.json();
}