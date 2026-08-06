
const API_URL = "https://my-project-17ds.onrender.com/api";


export async function updatePassword(userId, password) {
    const response = await fetch(`${API_URL}/users/change-password`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            password,
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to update password");
    }

    return response.json();
}

export async function deleteAccount(userId) {
    const response = await fetch(`${API_URL}/users/delete-account`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId
        }),
    });

    if (!response.ok) {
        throw new Error("Failed to delete account");
    }

    return response.json();
}