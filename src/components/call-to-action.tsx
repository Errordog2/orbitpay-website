import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function CallToAction() {
    return (
        <section className="px-6 py-16 md:py-28">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border bg-card px-6 py-16 shadow-2xl shadow-primary/10 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">Stream payroll on Stellar</p>
                    <h2 className="mt-5 text-balance text-4xl font-semibold tracking-tight lg:text-6xl">
                        Ready to decentralize your organization&apos;s payroll?
                    </h2>
                    <p className="text-muted-foreground mt-6 text-lg leading-8">
                        Start streaming salaries, managing multi-sig treasuries, and automating recurring payments on Stellar.
                    </p>

                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button size="lg"                             render={<Link href="https://orbitpay-frontend.vercel.app" />} nativeButton={false}>
                            Launch App
                            <ArrowRight data-icon="inline-end" />
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            render={
                                <Link href="https://github.com/OrbitPay-Co/orbitpay-docs" />
                            }
                            nativeButton={false}>
                            <BookOpen data-icon="inline-start" />
                            Explore Docs
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
