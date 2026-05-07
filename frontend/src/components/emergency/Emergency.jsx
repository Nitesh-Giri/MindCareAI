import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, AlertCircle, ExternalLink } from "lucide-react"

export default function EmergencyComponent() {
    const hotlines = [
        {
            name: "Jeevan Aastha Helpline (Suicide & Emotional Distress)",
            contact: "1800-233-3330",
            href: "tel:18002333330",
            available: "24/7",
            action: "Call now",
        },
        {
            name: "Tele-MANAS — National Mental Health Helpline",
            contact: "Text HOME to 14416",
            href: "sms:14416?body=HOME",
            available: "24/7",
            action: "Text HOME",
        },
        {
            name: "International Association for Suicide Prevention",
            contact: "findahelpline.com",
            href: "https://findahelpline.com/countries/in/topics/suicidal-thoughts",
            available: "24/7",
            action: "Visit website",
            external: true,
        },
    ]

    const techniques = [
        {
            title: "5-4-3-2-1 Grounding",
            steps: [
                "Name 5 things you see",
                "Name 4 things you can touch",
                "Notice 3 things you hear",
                "Name 2 things you smell",
                "Notice 1 thing you can taste",
            ],
        },
        {
            title: "Box Breathing",
            steps: [
                "Inhale for 4 counts",
                "Hold for 4 counts",
                "Exhale for 4 counts",
                "Hold for 4 counts",
                "Repeat 4-5 times",
            ],
        },
    ]

    return (
        <div className="space-y-10">
            <Card className="p-8 bg-white shadow-xl border border-border">
                <div className="grid gap-8 md:grid-cols-[1fr_auto] items-center">
                    <div className="space-y-4">
                        <div className="inline-flex items-center justify-center rounded-full bg-destructive/20 text-destructive w-14 h-14">
                            <AlertCircle className="w-7 h-7" />
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.2em] text-destructive font-semibold">Emergency support</p>
                            <h2 className="text-3xl sm:text-4xl font-bold text-red-700">If you're in immediate danger</h2>
                        </div>
                        <p className="max-w-2xl text-muted-foreground leading-relaxed">
                            Please call emergency services immediately. If you are unable to call, go to your nearest emergency room or ask someone you trust to help you reach out.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 rounded-3xl border border-destructive/30 bg-destructive/5 p-6 shadow-lg shadow-destructive/10">
                        <span className="text-sm uppercase tracking-[0.24em] text-destructive font-semibold">Immediate action</span>
                        <p className="text-4xl font-bold text-red-700">112</p>
                        <p className="text-sm text-muted-foreground">Emergency number for India</p>
                        <Button asChild variant="destructive" size="lg" className="w-full mt-4 justify-center gap-2 text-red-700">
                            <a href="tel:112">
                                <Phone className="w-4 h-4 text-red-700" />
                                Call 112 now
                            </a>
                        </Button>
                    </div>
                </div>
            </Card>

            <section className="space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Crisis Hotlines</h2>
                        <p className="text-sm text-muted-foreground">Trusted helplines for immediate emotional and mental health support.</p>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {hotlines.map((hotline, index) => (
                        <Card key={index} className="p-6 border border-border bg-card/50 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl">
                            <h3 className="font-semibold text-foreground mb-3">{hotline.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{hotline.contact}</p>
                            <div className="mt-6 flex items-center justify-between gap-4">
                                <span className="text-xs rounded-full bg-primary/10 px-2.5 py-1 text-primary font-medium">
                                    {hotline.available}
                                </span>
                                <a
                                    href={hotline.href}
                                    target={hotline.external ? "_blank" : "_self"}
                                    rel={hotline.external ? "noreferrer" : undefined}
                                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80"
                                >
                                    {hotline.action}
                                    {hotline.external && <ExternalLink className="w-3.5 h-3.5" />}
                                </a>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="space-y-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-foreground">Quick Coping Techniques</h2>
                        <p className="text-sm text-muted-foreground">Simple grounding tools to help you stay present and calm in the moment.</p>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {techniques.map((technique, index) => (
                        <Card key={index} className="p-6 border border-border bg-card/50 backdrop-blur hover:border-primary/50 transition-colors">
                            <h3 className="text-lg font-semibold text-foreground mb-4">{technique.title}</h3>
                            <ol className="space-y-3">
                                {technique.steps.map((step, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm text-foreground">
                                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold">
                                            {idx + 1}
                                        </span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    )
}
