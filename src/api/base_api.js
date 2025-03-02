// src/api/base_api.js

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export const fetchData = async (endpoint, options = {}) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
            headers: { "Content-Type": "application/json" },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status} - ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error;
    }
};

export const getData = async (endpoint) => fetchData(endpoint, { method: "GET" });
export const postData = async (endpoint, data) => fetchData(endpoint, { method: "POST", body: JSON.stringify(data) });
export const deleteData = async (endpoint) => fetchData(endpoint, { method: "DELETE" });
