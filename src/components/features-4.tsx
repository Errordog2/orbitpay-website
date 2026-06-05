import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRightLeft, Shield, Clock, Vote, Zap, Code2 } from 'lucide-react'

const features = [
    {
        icon: ArrowRightLeft,
        title: 'Streaming Payroll',
        description: 'Salaries accrue continuously per second. Employees claim anytime. Organizations batch-create streams for the entire workforce in one transaction.',
    },
    {
        icon: Shield,
        title: 'Multi-Sig Treasury',
        description: 'Configurable approval thresholds for withdrawals, signer management, and deposit tracking. No single key can move funds alone.',
    },
    {
        icon: Clock,
        title: 'Token Vesting',
        description: 'Cliff + linear vesting schedules with revocable support. Perfect for team allocations, advisor grants, and investor lockups.',
    },
    {
        icon: Vote,
        title: 'DAO Governance',
        description: 'Weighted on-chain voting with quorum enforcement. Proposals can trigger treasury disbursements automatically when passed.',
    },
    {
        icon: Zap,
        title: 'Automated Billing',
        description: 'The keeper system auto-charges recurring payments. Subscriptions renew without manual intervention. Retry logic handles failed charges.',
    },
    {
        icon: Code2,
        title: 'Stellar Native',
        description: 'Built on Soroban smart contracts with a TypeScript SDK. Integrates directly with Freighter, LOBSTR, and all Stellar wallets.',
    },
]

export default function Features() {
    return (
        <section id="features" className="py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                    <Badge variant="secondary" className="rounded-full">Protocol Capabilities</Badge>
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">
                        Everything your organization needs to run on-chain payroll.
                    </h2>
                    <p className="text-muted-foreground text-lg leading-8">
                        From salary streaming to treasury custody to governance votes — OrbitPay is the complete operating system for decentralized orgs.
                    </p>
                </div>

                <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {features.map(({ icon: Icon, title, description }) => (
                        <Card key={title} className="sg-glass group overflow-hidden border transition-colors hover:bg-card/90">
                            <CardHeader className="gap-5">
                                <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/60 text-primary">
                                    <Icon />
                                </div>
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-7">{description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
