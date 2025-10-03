const BASE = "https://jsonplaceholder.typicode.com/users";

export async function getUsersApi() {
    const response = await fetch(BASE);
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
}