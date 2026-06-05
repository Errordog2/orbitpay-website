import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
    { value: '96% cheaper', label: 'than traditional payroll', detail: 'Streaming salaries via Soroban eliminates processing fees, bank delays, and intermediary costs.' },
    { value: 'Second-by-second', label: 'continuous accrual', detail: 'Tokens vest linearly between start and end times. Employees see their salary grow in real-time.' },
    { value: 'Batch payroll', label: 'one transaction', detail: 'Pay your entire workforce in a single Soroban transaction. No per-employee gas fees, no reconciliation.' },
]

export default function StatsSection() {
    return (
        <section id="security" className="py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div className="flex flex-col gap-5">
                        <Badge variant="outline" className="w-fit rounded-full">Why OrbitPay</Badge>
                        <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">Built for organizations that need trustless, automated payroll.</h2>
                        <p className="text-muted-foreground text-lg leading-8">OrbitPay replaces bank accounts, payroll processors, and manual approvals with a single on-chain protocol.</p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {stats.map((stat) => (
                            <Card key={stat.label} className="border">
                                <CardContent className="flex h-full flex-col gap-4 p-6">
                                    <p className="text-primary text-5xl font-semibold tracking-tight">{stat.value}</p>
                                    <div>
                                        <p className="font-medium uppercase tracking-[0.18em]">{stat.label}</p>
                                        <p className="text-muted-foreground mt-3 text-sm leading-6">{stat.detail}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
