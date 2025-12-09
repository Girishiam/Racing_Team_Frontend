"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import {
    Trophy, Flag, Zap, TrendingUp, Award,
    Calendar, Users, Star, ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// Driver data types
interface RaceResult {
    race: string;
    position: number;
    points: number;
    grid: number;
}

interface DriverData {
    name: string;
    number: number;
    nationality: string;
    age: number;
    team: string;
    championships: number;
    careerWins: number;
    careerPodiums: number;
    careerPoints: number;
    careerStarts: number;
    bio: string;
    image: string;
    currentSeason: {
        position: number;
        points: number;
        wins: number;
        podiums: number;
        poles: number;
        fastestLaps: number;
        dnfs: number;
        races: number;
    };
    careerStats: {
        firstRace: string;
        firstWin: string;
        firstPole: string;
        bestFinish: string;
        worstFinish: string;
    };
    recentResults: RaceResult[];
}

const DRIVERS_DATA: Record<string, DriverData> = {
    "max-velocity": {
        name: "Max Velocity",
        number: 1,
        nationality: "British",
        age: 28,
        team: "MotoSports Racing",
        championships: 3,
        careerWins: 45,
        careerPodiums: 89,
        careerPoints: 2847,
        careerStarts: 156,
        bio: "Three-time world champion known for aggressive overtaking and exceptional wet-weather performance. Started karting at age 6 and joined the team in 2018.",
        image: "/images/Teams_Member/driver1.jpg",
        currentSeason: {
            position: 1,
            points: 387,
            wins: 12,
            podiums: 18,
            poles: 10,
            fastestLaps: 8,
            dnfs: 1,
            races: 20
        },
        careerStats: {
            firstRace: "2015 Australian GP",
            firstWin: "2017 Monaco GP",
            firstPole: "2016 Silverstone GP",
            bestFinish: "1st",
            worstFinish: "DNF"
        },
        recentResults: [
            { race: "Abu Dhabi GP", position: 1, points: 25, grid: 2 },
            { race: "Saudi Arabian GP", position: 2, points: 18, grid: 1 },
            { race: "Qatar GP", position: 1, points: 25, grid: 1 },
            { race: "Las Vegas GP", position: 3, points: 15, grid: 4 },
            { race: "Brazil GP", position: 1, points: 25, grid: 1 }
        ]
    },
    "sarah-storm": {
        name: "Sarah Storm",
        number: 7,
        nationality: "German",
        age: 26,
        team: "MotoSports Racing",
        championships: 1,
        careerWins: 18,
        careerPodiums: 42,
        careerPoints: 1456,
        careerStarts: 98,
        bio: "Rising star and youngest world champion in team history. Known for tactical brilliance and consistency. Former karting champion and F2 winner.",
        image: "/images/Teams_Member/driver2.jpg",
        currentSeason: {
            position: 2,
            points: 312,
            wins: 6,
            podiums: 14,
            poles: 5,
            fastestLaps: 6,
            dnfs: 2,
            races: 20
        },
        careerStats: {
            firstRace: "2019 Bahrain GP",
            firstWin: "2021 British GP",
            firstPole: "2020 Austria GP",
            bestFinish: "1st",
            worstFinish: "DNF"
        },
        recentResults: [
            { race: "Abu Dhabi GP", position: 3, points: 15, grid: 3 },
            { race: "Saudi Arabian GP", position: 1, points: 25, grid: 2 },
            { race: "Qatar GP", position: 2, points: 18, grid: 3 },
            { race: "Las Vegas GP", position: 1, points: 25, grid: 1 },
            { race: "Brazil GP", position: 4, points: 12, grid: 5 }
        ]
    }
};


const STAT_CATEGORIES: Array<{
    label: string;
    key: keyof DriverData['currentSeason'];
    icon: React.ComponentType<{ className?: string }>;
    color: string;
}> = [
        { label: "Race Wins", key: "wins", icon: Trophy, color: "text-yellow-500" },
        { label: "Podiums", key: "podiums", icon: Award, color: "text-blue-500" },
        { label: "Pole Positions", key: "poles", icon: Flag, color: "text-purple-500" },
        { label: "Fastest Laps", key: "fastestLaps", icon: Zap, color: "text-primary" }
    ];

export default function DriverProfilePage() {
    const params = useParams();
    const driverId = params.id as string;
    const driver = DRIVERS_DATA[driverId];

    if (!driver) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Driver Not Found</h1>
                    <Link href="/team/drivers">
                        <Button>Back to Drivers</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-zinc-900 to-background py-20 border-b border-white/10 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Link href="/team/drivers" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                            <ChevronRight className="w-4 h-4 rotate-180" />
                            Back to Drivers
                        </Link>

                        <div className="grid md:grid-cols-3 gap-8 items-start">
                            {/* Driver Info - Left Side */}
                            <div className="md:col-span-2 space-y-6">
                                {/* Driver Header */}
                                <div className="flex items-start gap-6">
                                    <div className="text-9xl font-black text-primary/20">#{driver.number}</div>
                                    <div className="flex-1">
                                        <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                                            {driver.nationality}
                                        </Badge>
                                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-2">
                                            {driver.name}
                                        </h1>
                                        <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span>{driver.age} years old</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4 text-primary" />
                                                <span>{driver.team}</span>
                                            </div>
                                        </div>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {driver.bio}
                                        </p>
                                    </div>
                                </div>

                                {/* Career Highlights Card */}
                                <Card className="bg-zinc-950/50 border-white/10">
                                    <CardContent className="p-6">
                                        <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2">
                                            <Trophy className="w-4 h-4 text-primary" />
                                            Career Highlights
                                        </h3>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="text-center p-4 bg-white/5 rounded-lg">
                                                <div className="text-4xl font-black text-primary mb-1">{driver.championships}</div>
                                                <div className="text-xs text-muted-foreground uppercase">Championships</div>
                                            </div>
                                            <div className="text-center p-4 bg-white/5 rounded-lg">
                                                <div className="text-4xl font-black mb-1">{driver.careerWins}</div>
                                                <div className="text-xs text-muted-foreground uppercase">Wins</div>
                                            </div>
                                            <div className="text-center p-4 bg-white/5 rounded-lg">
                                                <div className="text-4xl font-black mb-1">{driver.careerPodiums}</div>
                                                <div className="text-xs text-muted-foreground uppercase">Podiums</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Driver Image Card - Right Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 overflow-hidden sticky top-24">
                                    <CardContent className="p-0">
                                        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                                            <Image
                                                src={driver.image}
                                                alt={driver.name}
                                                fill
                                                className="object-cover object-top"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                            {/* Driver Number Overlay */}
                                            <div className="absolute bottom-6 right-6 text-8xl font-black text-white/10">
                                                #{driver.number}
                                            </div>

                                            {/* Stats Overlay */}
                                            <div className="absolute bottom-6 left-6">
                                                <div className="flex flex-col gap-2">
                                                    <Badge className="bg-black/60 backdrop-blur-sm text-white border-white/20 w-fit">
                                                        <Trophy className="w-3 h-3 mr-1" />
                                                        {driver.championships}x Champion
                                                    </Badge>
                                                    <Badge className="bg-black/60 backdrop-blur-sm text-white border-white/20 w-fit">
                                                        #{driver.number}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                {/* Current Season Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-4xl font-black italic uppercase flex items-center gap-3">
                            <Star className="w-8 h-8 text-primary" />
                            2024 Season
                        </h2>
                        <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">
                            P{driver.currentSeason.position} - {driver.currentSeason.points} Points
                        </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {STAT_CATEGORIES.map((stat, index) => (
                            <motion.div
                                key={stat.key}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-6 text-center">
                                        <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                                        <div className="text-4xl font-black mb-2">{driver.currentSeason[stat.key]}</div>
                                        <div className="text-sm text-muted-foreground uppercase">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Season Stats */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="bg-zinc-950/50 border-white/10">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground uppercase">DNFs</span>
                                    <span className="text-2xl font-black">{driver.currentSeason.dnfs}</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <div
                                        className="bg-red-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${(driver.currentSeason.dnfs / driver.currentSeason.races) * 100}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-950/50 border-white/10">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground uppercase">Podium Rate</span>
                                    <span className="text-2xl font-black text-primary">
                                        {Math.round((driver.currentSeason.podiums / driver.currentSeason.races) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${(driver.currentSeason.podiums / driver.currentSeason.races) * 100}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-zinc-950/50 border-white/10">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-muted-foreground uppercase">Win Rate</span>
                                    <span className="text-2xl font-black text-yellow-500">
                                        {Math.round((driver.currentSeason.wins / driver.currentSeason.races) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-2">
                                    <div
                                        className="bg-yellow-500 h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${(driver.currentSeason.wins / driver.currentSeason.races) * 100}%` }}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>

                {/* Recent Results */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <TrendingUp className="w-8 h-8 text-primary" />
                        Recent Results
                    </h2>

                    <div className="space-y-3">
                        {driver.recentResults.map((result, index) => (
                            <motion.div
                                key={result.race}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.3 }}
                            >
                                <Card className="bg-zinc-950/50 border-white/10 hover:border-primary/50 transition-all duration-300 group">
                                    <CardContent className="p-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 flex-1">
                                                <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-black text-xl ${result.position === 1 ? 'bg-yellow-500/20 text-yellow-500' :
                                                    result.position === 2 ? 'bg-gray-400/20 text-gray-400' :
                                                        result.position === 3 ? 'bg-orange-600/20 text-orange-600' :
                                                            'bg-white/5 text-foreground'
                                                    }`}>
                                                    P{result.position}
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold group-hover:text-primary transition-colors">{result.race}</h4>
                                                    <p className="text-sm text-muted-foreground">Started P{result.grid}</p>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-black text-primary">{result.points}</div>
                                                <div className="text-xs text-muted-foreground uppercase">Points</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Career Statistics */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-black italic uppercase mb-8 flex items-center gap-3">
                        <Award className="w-8 h-8 text-primary" />
                        Career Statistics
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Career Totals */}
                        <Card className="bg-zinc-950/50 border-white/10">
                            <CardContent className="p-6">
                                <h3 className="text-sm font-black uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-primary" />
                                    Career Totals
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center p-4 bg-white/5 rounded-lg">
                                        <div className="text-3xl font-black text-primary mb-1">{driver.careerStarts}</div>
                                        <div className="text-xs text-muted-foreground uppercase">Race Starts</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5 rounded-lg">
                                        <div className="text-3xl font-black mb-1">{driver.careerPoints}</div>
                                        <div className="text-xs text-muted-foreground uppercase">Total Points</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5 rounded-lg">
                                        <div className="text-3xl font-black text-yellow-500 mb-1">{driver.careerWins}</div>
                                        <div className="text-xs text-muted-foreground uppercase">Race Wins</div>
                                    </div>
                                    <div className="text-center p-4 bg-white/5 rounded-lg">
                                        <div className="text-3xl font-black text-blue-500 mb-1">{driver.careerPodiums}</div>
                                        <div className="text-xs text-muted-foreground uppercase">Podiums</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Milestones */}
                        <Card className="bg-zinc-950/50 border-white/10">
                            <CardContent className="p-6">
                                <h3 className="text-sm font-black uppercase tracking-wider mb-6 flex items-center gap-2">
                                    <Flag className="w-4 h-4 text-primary" />
                                    Career Milestones
                                </h3>
                                <div className="space-y-4">
                                    {Object.entries(driver.careerStats).map(([key, value]) => (
                                        <div key={key} className="flex items-center justify-between py-2 border-b border-white/5">
                                            <span className="text-sm text-muted-foreground capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </span>
                                            <span className="font-bold">{value as string}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
