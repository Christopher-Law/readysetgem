export type FaqItem = {
	q: string;
	a: string;
};

export const faqs: readonly FaqItem[] = [
	{
		q: "Do you work on my kind of cards?",
		a: "Usually, yes. We work on Pokémon, Yu-Gi-Oh!, Magic: The Gathering, sports cards, and other trading cards. Email photos and we'll confirm.",
	},
	{
		q: "What if my card is too damaged?",
		a: "We'll tell you upfront. If a card has severe stock separation, mold risk, or heavy water damage, we'll recommend against restoration.",
	},
	{
		q: "Will this improve my card’s grade?",
		a: "Maybe, but we don't guarantee it. We focus on conservative improvement and stability, not chasing grades.",
	},
	{
		q: "How quickly do you respond?",
		a: "We typically reply to new requests within 1–2 business days.",
	},
	{
		q: "What if I don't approve the plan?",
		a: "Nothing at all — no hard feelings. If you don't want to move forward after seeing the plan, we'll simply shake hands and walk away.",
	},
	{
		q: "Do you offer a guarantee?",
		a: "We stand behind our work. If you're not satisfied with the restoration, we'll work with you to make it right. We're committed to honest communication and quality results.",
	},
] as const;

