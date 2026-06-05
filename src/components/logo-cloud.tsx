const partners = ['Stellar', 'Soroban', 'Freighter', 'LOBSTR', 'xBull', 'NestJS', 'PostgreSQL']

export default function LogoCloud() {
    return (
        <section className="border-y bg-card/30 py-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">Ecosystem ready</p>
                    <h2 className="mt-2 text-2xl font-semibold tracking-tight">Built for Stellar teams and Soroban builders</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                    {partners.map((partner) => (
                        <div key={partner} className="sg-glass rounded-full border px-4 py-2 text-sm font-medium">
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
