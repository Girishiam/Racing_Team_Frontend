export interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    image?: string;
    stats?: {
        races: number;
        podiums: number;
        wins: number;
    };
}

export interface Sponsor {
    name: string;
    tier: 'Platinum' | 'Gold' | 'Silver' | 'Bronze';
    logo?: string;
}
