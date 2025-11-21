export interface Book {
    id: string;
    title: string;
    author: string;
    coverColor: string;
    description: string;
    tags: string[];
    slug: string;
    totalChapters: number;
    coverImage: string;
}

export const books: Book[] = [
    {
        id: "1",
        title: "Meditations",
        author: "Marcus Aurelius",
        coverColor: "from-rose-200 to-orange-100",
        description: "A series of personal writings by Marcus Aurelius, Roman Emperor from 161 to 180 AD, recording his private notes to himself and ideas on Stoic philosophy.",
        tags: ["Philosophy", "Stoicism", "Classic"],
        slug: "meditations",
        totalChapters: 12,
        coverImage: "https://images.unsplash.com/photo-1528701202755-cf9158699a2e?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "2",
        title: "The Republic",
        author: "Plato",
        coverColor: "from-blue-200 to-cyan-100",
        description: "A Socratic dialogue, authored by Plato around 375 BC, concerning justice, the order and character of the just city-state, and the just man.",
        tags: ["Philosophy", "Politics", "Classic"],
        slug: "the-republic",
        totalChapters: 10,
        coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "3",
        title: "Letters from a Stoic",
        author: "Seneca",
        coverColor: "from-purple-200 to-indigo-100",
        description: "A collection of 124 letters that Seneca the Younger wrote at the end of his life, during his retirement, after he had worked for the Emperor Nero.",
        tags: ["Philosophy", "Stoicism", "Letters"],
        slug: "letters-from-a-stoic",
        totalChapters: 124,
        coverImage: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "4",
        title: "Beyond Good and Evil",
        author: "Friedrich Nietzsche",
        coverColor: "from-red-200 to-orange-200",
        description: "Nietzsche accuses past philosophers of lacking critical sense and blindly accepting dogmatic premises in their consideration of morality.",
        tags: ["Philosophy", "Existentialism"],
        slug: "beyond-good-and-evil",
        totalChapters: 9,
        coverImage: "https://images.unsplash.com/photo-1555449372-5063875f6956?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "5",
        title: "The Nicomachean Ethics",
        author: "Aristotle",
        coverColor: "from-emerald-200 to-teal-100",
        description: "The name normally given to Aristotle's best-known work on ethics.",
        tags: ["Philosophy", "Ethics", "Classic"],
        slug: "nicomachean-ethics",
        totalChapters: 10,
        coverImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80",
    },
    {
        id: "6",
        title: "Critique of Pure Reason",
        author: "Immanuel Kant",
        coverColor: "from-amber-200 to-yellow-100",
        description: "Investigates the limits and scope of metaphysics, combining empiricism and rationalism.",
        tags: ["Philosophy", "Epistemology"],
        slug: "critique-of-pure-reason",
        totalChapters: 2,
        coverImage: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=600&q=80",
    },
];
