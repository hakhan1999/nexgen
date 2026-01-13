const BASE_URL = process.env.NEXT_PUBLIC_WP_API_URL;

export async function fetchWP(endpoint) {
    try {
        const res = await fetch(`${BASE_URL}${endpoint}`, {
            next: { revalidate: 60 }, // ✅ ISR (BEST)
        });

        if (!res.ok) throw new Error("Failed to fetch " + endpoint);
        return await res.json();
    } catch (err) {
        console.error(err);
        return null;
    }
}


// Logo API Fetch Endpoint 
export const getLogo = () => fetchWP("/custom/v1/site-settings");

// Menus API Fetch Endpoint 
export const getMenu = () => fetchWP("/custom/v1/menus");

// Footer API Fetch Endpoint 
export const getFooter = () => fetchWP("/custom/v1/footer")

// Home Page ACF Fields API Fetch Endpoint 
export const getHomeData = () => fetchWP("/custom/v1/home");