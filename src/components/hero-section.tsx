'use client'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, GitBranch, Wallet } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-16">
            <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
                <div className="flex flex-col items-start gap-7">
                    <Badge variant="outline" className="rounded-full">
                        <Wallet data-icon="inline-start" />
                        Non-custodial payroll for Stellar organizations
                    </Badge>
                    <div className="flex flex-col gap-6">
                        <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-tight md:text-7xl">
                            Stream salaries, <span className="text-primary">on-chain</span>.
                        </h1>
                        <p className="text-muted-foreground max-w-2xl text-balance text-lg leading-8 md:text-xl">
                            OrbitPay gives teams and DAOs a trustless payroll layer for streaming salaries, batch payouts, multi-sig treasury management, vesting, and governance — all powered by Stellar Soroban.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Button size="lg" render={<Link href="#" />} nativeButton={false}>
                            Launch App
                            <ArrowRight data-icon="inline-end" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            render={<Link href="https://github.com/OrbitPay-Co" />}
                            nativeButton={false}>
                            <GitBranch data-icon="inline-start" />
                            View GitHub
                        </Button>
                    </div>
                    <div className="grid w-full max-w-xl grid-cols-3 gap-3 pt-4">
                        {[
                            ["Second-by-second", "payouts"],
                            ["Batch", "payroll"],
                            ["100%", "on-chain"],
                        ].map(([value, label]) => (
                            <div key={label} className="rounded-2xl border bg-card/60 p-4 backdrop-blur">
                                <p className="text-2xl font-semibold tracking-tight">{value}</p>
                                <p className="text-muted-foreground mt-1 text-xs uppercase tracking-[0.18em]">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
