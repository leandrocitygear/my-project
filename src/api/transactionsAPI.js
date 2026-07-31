const API_URL = "https://my-project-17ds.onrender.com/api/transactions";


export async function getTransactions(userId) {
    const response = await fetch(`${API_URL}/${userId}`);

    if (!response.ok) {
        throw new Error("Failed to fetch transactions");
    }

    return response.json();
}

export async function updateTransaction(id, updatedTransaction) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTransaction),
    });

    if (!response.ok) {
        throw new Error("Failed to update transaction");
    }

    return response.json();
}

export async function deleteTransaction(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Failed to delete transaction");
    }

    return response.json();
}