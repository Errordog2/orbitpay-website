import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export default function Testimonials() {
    return (
        <section className="py-16 md:py-28">
            <div className="mx-auto max-w-7xl px-6">
                <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
                    <Badge variant="outline" className="rounded-full">Community Signal</Badge>
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">
                        Trusted by teams and DAOs on Stellar
                    </h2>
                    <p className="text-muted-foreground text-lg leading-8">
                        Organizations are replacing manual payroll runs with OrbitPay&apos;s continuous streaming and on-chain governance.
                    </p>
                </div>

                <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="sg-glass grid grid-rows-[auto_1fr] gap-8 border sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit">Featured</Badge>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    OrbitPay transformed how we handle team compensation. Streaming salaries means our contributors get paid continuously, and the multi-sig treasury gives our DAO council complete control. No more monthly payroll runs.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12 border">
                                        <AvatarFallback>SB</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Stellar Builders DAO</cite>
                                        <span className="text-muted-foreground block text-sm">
                                            20+ team members
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="sg-glass border md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl font-medium">
                                    Setting up payroll for 15 contributors used to take hours. With OrbitPay&apos;s batch streaming, I create all salary streams in one transaction. Game changer.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12 border">
                                        <AvatarFallback>DF</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">DeFi Startup Founder</cite>
                                        <span className="text-muted-foreground block text-sm">
                                            Team Lead
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="sg-glass border">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    The vesting schedules are exactly what we needed for our investor lockups. Cliff + linear with revocable support means our tokenomics are enforced on-chain.
                                </p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12 border">
                                        <AvatarFallback>WI</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Web3 Investment Fund</cite>
                                        <span className="text-muted-foreground block text-sm">
                                            Investment Manager
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="sg-glass border">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>
                                    Finally, a payroll solution built for DAOs. Multi-sig treasury means our community treasury is safe, and governance proposals let token holders vote on spending.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12 border">
                                        <AvatarFallback>CD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-medium">Community DAO Lead</p>
                                        <span className="text-muted-foreground block text-sm">
                                            DAO Operations
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
