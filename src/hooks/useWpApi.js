import { useState, useEffect, useContext } from "react";
import { getLogo, getMenu, getCPT } from "../lib/wpApi";
import { LoadingContext } from "@/context/LoadingContext";

export default function useWpApi() {
    const [logo, setLogo] = useState(null);
    const [menu, setMenu] = useState([]);
    const [cpts, setCpts] = useState({});
    const { setLoading } = useContext(LoadingContext);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            const [logoData, menuData, servicesData, projectsData] = await Promise.all([
                getLogo(),
                getMenu(),
                getCPT("services"),
                getCPT("projects"),
            ]);

            setLogo(logoData?.logo || null);
            setMenu(menuData?.items || []);
            setCpts({
                services: servicesData || [],
                projects: projectsData || [],
            });

            setLoading(false);
        }

        fetchData();
    }, []);

    return { logo, menu, cpts };
}
