// Utility function to handle 404 errors
import { notFound } from "next/navigation";
// Function to fetch project details based on URL params
import { getPostDetails } from '../projectInfo';
// Components: To show project data
import Project from "./page__use_client"

// Dynamic MetaData
export async function generateMetadata({ params }) {
    // Await params before accessing properties
    const resolvedParams = await params;

    // Now use the resolved params
    const project = await getPostDetails(resolvedParams.project) || null;

    // Handle case where project data is missing
    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found."
        };
    }

    // Create project-specific metadata
    return {
        title: `${project.title} | Surya K Portfolio`,
        description: project.summary,
        keywords: `${project.tech.join(", ")}, ${project.title}, ${project.platform}, Surya K, Portfolio, ${project.category} Project`,

        openGraph: {
            title: `${project.title} - Project by Surya K`,
            description: project.summary,
            type: "article",
            url: `/projects/${resolvedParams.project}`,
            images: [
                {
                    url: project.projectSharingImg || "/images/sharing/portfolio-og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `${project.title} - Project by Surya K`
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Surya K`,
            description: project.summary,
            images: [project.projectSharingImg || "/images/sharing/portfolio-og-image.jpg"]
        },
        alternates: {
            canonical: `/projects/${resolvedParams.project}`
        }
    };
}

// Dynamic route page for displaying project details
export default async function Page({ params }) {

    // Await params before accessing properties
    const resolvedParams = await params;

    // Now use the resolved params
    const projectData = await getPostDetails(resolvedParams.project) || null;

    // Handle case where project data is missing
    if (!projectData) {
        notFound();
    }

    // Render page data
    return (
        <Project projectData={projectData} />
    );
}
