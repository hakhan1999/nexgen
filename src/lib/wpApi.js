const BASE_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export async function fetchWP(endpoint) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`);
        if (!res.ok) throw new Error("Failed to fetch " + endpoint);
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
}

export const getLogo = () => fetchWP("/custom/v1/site-settings");
export const getMenu = (slug = "header-menu") => fetchWP(`/custom/v1/menu/${slug}`);
export const getCPT = (type) => fetchWP(`/wp/v2/${type}`);