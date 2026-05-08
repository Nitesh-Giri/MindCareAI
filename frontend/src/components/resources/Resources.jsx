import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Play, BookOpen, Sparkles, X } from "lucide-react"

export default function ResourcesComponent() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedVideo, setSelectedVideo] = useState(null)
    const [selectedVideoTitle, setSelectedVideoTitle] = useState("")

    const openVideo = (video, title) => {
        setSelectedVideo(video)
        setSelectedVideoTitle(title)
    }

    const closeVideo = () => {
        setSelectedVideo(null)
        setSelectedVideoTitle("")
    }

    const resources = {
        meditation: [
            {
                title: "Guided Breathing",
                duration: "10 min",
                description: "Calm your mind with deep breathing",
                video: "https://www.youtube.com/embed/O-6f5wQXSu8"
            },
            {
                title: "Body Scan Meditation",
                duration: "10 min",
                description: "Release tension throughout your body",
                video: "https://www.youtube.com/embed/wWRwDEkoVwU"
            },
            {
                title: "Loving Kindness",
                duration: "8 min",
                description: "Cultivate compassion and self-love",
                video: "https://www.youtube.com/embed/-Z_DgCj-kH4"
            },
            {
                title: "Sleep Meditation",
                duration: "15 min",
                description: "Prepare for restful sleep",
                video: "https://www.youtube.com/embed/SEfs5TJZ6Nk"
            },
        ],
        exercises: [
            {
                title: "5-4-3-2-1 Grounding",
                description: "Sensory grounding technique for anxiety",
                video: "https://www.youtube.com/embed/6TlmRJ_z4Ws"
            },
            {
                title: "Box Breathing",
                description: "Regulate your nervous system",
                video: "https://www.youtube.com/embed/odADwWzHR24"
            },
            {
                title: "Progressive Muscle Relaxation",
                description: "Release physical tension",
                video: "https://www.youtube.com/embed/1nZEdqcGVzo"
            },
            {
                title: "Journaling Prompts",
                description: "Process emotions through writing",
                video: "https://www.youtube.com/embed/8AJX3yXJ1Aw"
            },
        ],
        strategies: [
            {
                title: "Stress Management",
                description: "Practical techniques for daily stress",
                video: "https://www.youtube.com/embed/hnpQrMqDoqE"
            },
            {
                title: "Sleep Hygiene",
                description: "Tips for better sleep quality",
                video: "https://www.youtube.com/embed/1Xn0n3eNVLM"
            },
            {
                title: "Social Connection",
                description: "Build meaningful relationships",
                video: "https://www.youtube.com/embed/5oiJ7QET-2g"
            },
            {
                title: "Self-Compassion",
                description: "Treat yourself with kindness",
                video: "https://www.youtube.com/embed/1XbQ2k1961Q"
            },
        ],
    }

    const filteredResources = (type) => {
        return resources[type].filter(
            (r) =>
                r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                r.description.toLowerCase().includes(searchTerm.toLowerCase()),
        )
    }

    return (
        <div className="space-y-8">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                    placeholder="Search resources..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 border-primary/20 bg-card/50 backdrop-blur focus-visible:ring-primary/50"
                />
            </div>

            <Tabs defaultValue="meditation" className="w-full">
                <TabsList className="grid w-full grid-cols-3 h-12 bg-muted/50 p-1 rounded-xl">
                    <TabsTrigger value="meditation" className="rounded-lg data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Meditation</TabsTrigger>
                    <TabsTrigger value="exercises" className="rounded-lg data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Exercises</TabsTrigger>
                    <TabsTrigger value="strategies" className="rounded-lg data-[state=active]:bg-gradient-primary data-[state=active]:text-white">Strategies</TabsTrigger>
                </TabsList>

                <TabsContent value="meditation" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredResources("meditation").map((item, i) => (
                            <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 bg-card/50 backdrop-blur group">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                        <div className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                                            <Sparkles className="w-3 h-3" />
                                            {item.duration}
                                        </div>
                                    </div>
                                    <Button
                                        size="icon"
                                        className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                                        onClick={() => openVideo(item.video, item.title)}
                                    >
                                        <Play className="w-4 h-4 ml-0.5" />
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="exercises" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredResources("exercises").map((item, i) => (
                            <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 bg-card/50 backdrop-blur group">
                                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                                    onClick={() => openVideo(item.video, item.title)}
                                >
                                    Watch Exercise
                                </Button>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="strategies" className="mt-6 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredResources("strategies").map((item, i) => (
                            <Card key={i} className="p-6 hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 bg-card/50 backdrop-blur group">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                                            onClick={() => openVideo(item.video, item.title)}
                                        >
                                            Watch Guide
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
            </Tabs>

            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-card shadow-2xl">
                        <div className="flex items-center justify-between border-b border-border px-5 py-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">Watch video</p>
                                <h3 className="text-lg font-semibold text-foreground">{selectedVideoTitle}</h3>
                            </div>
                            <button
                                onClick={closeVideo}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground hover:bg-destructive/10 transition"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="bg-black">
                            <iframe
                                title={selectedVideoTitle}
                                src={`${selectedVideo}?autoplay=1`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="h-[60vh] w-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
