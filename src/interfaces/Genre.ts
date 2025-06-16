export interface Genre{
    id: number;
    name: string;
    slug: string;
    image_background: string;
    games_count: number;
    image?: string; // Optional, as not all genres may have an image
    description?: string; // Optional, as not all genres may have a description
}