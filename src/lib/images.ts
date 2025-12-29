/**
 * Before/After image pairs for gallery and homepage.
 * 
 * To add new images:
 * 1. Add your image files to the public/ directory (or use hosted URLs)
 * 2. Add a new entry to the beforeAfterImages array below
 * 3. Images will automatically appear in the gallery and homepage
 */

export interface BeforeAfterImage {
	beforeSrc: string;
	afterSrc: string;
	beforeAlt: string;
	afterAlt: string;
}

export const beforeAfterImages: BeforeAfterImage[] = [
	// Example entry - replace with your actual images
	// {
	// 	beforeSrc: "/images/before-1.jpg",
	// 	afterSrc: "/images/after-1.jpg",
	// 	beforeAlt: "Before restoration example 1",
	// 	afterAlt: "After restoration example 1",
	// },
	
	// Placeholder entries - replace these with real images
	{
		beforeSrc: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
		afterSrc: "https://images.unsplash.com/photo-1747691875590-14db938e42d4?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		beforeAlt: "Before restoration",
		afterAlt: "After restoration",
	},
	{
		beforeSrc: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
		afterSrc: "https://images.unsplash.com/photo-1747691875590-14db938e42d4?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		beforeAlt: "Before restoration",
		afterAlt: "After restoration",
	},
	{
		beforeSrc: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=600&fit=crop",
		afterSrc: "https://images.unsplash.com/photo-1747691875590-14db938e42d4?q=80&w=800&h=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		beforeAlt: "Before restoration",
		afterAlt: "After restoration",
	},
	// Add more entries here as you get real images
];
