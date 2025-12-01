import LeadComponent from "./LeadComponent";


export async function generateMetadata({ searchParams }) {
    const {formid} = await (searchParams);
    const apiUrl = `https://healdiway.bkarogyam.com/erp-api/yt-gallery/${formid}`;

    try {
        const response = await fetch(apiUrl, { cache: "no-store" }); // Prevent caching if dynamic updates are needed
        const data = await response.json();

        return {
            title: data?.title || "Default Title",
            description: data?.description || "Default Description",
            openGraph: {
                title: data?.title || "Default Title",
                description: data?.description || "Default Description",
                images: data?.image_url ? `https://healdiway.bkarogyam.com/media/${data.thumbnail_url}` : null,
                type: "website",
            },
            twitter: {
                card: "summary_large_image",
                title: data?.title || "Default Title",
                description: data?.description || "Default Description",
                images: data?.image_url ? `https://healdiway.bkarogyam.com/media/${data.thumbnail_url}` : null,
            },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: "Default Title",
            description: "Default Description",
        };
    }
}

export default async function Page({ searchParams }) {
    // const formId = searchParams?.formid || "Not provided";
    // const partnerId = searchParams?.partnerid || "Not provided";
    const {formid,partnerid} = await (searchParams);

    return <LeadComponent formId={formid} partnerId={partnerid} />;
}

