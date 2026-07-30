const API_URL = "https://my-project-17ds.onrender.com/api/transactions";


export async function getTransactions(userId) {
    const response = await fetch(`${API_URL}/${userId}`);

    if (!response.ok) {
        throw new Error("Failed to fetch transactions");
    }

    return response.json();
}