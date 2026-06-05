import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightLeft, Landmark, Shield } from "lucide-react";

const topics = [
  { icon: ArrowRightLeft, title: "Streaming Payroll", description: "Continuous salary streaming, vesting schedules, and automated recurring payments on Soroban." },
  { icon: Shield, title: "Treasury Security", description: "Multi-sig policies, signer rotation, emergency access, and governance risk." },
  { icon: Landmark, title: "DAO Operations", description: "How communities can structure budgets, grants, proposals, and transparent payouts." },
];

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden py-16 md:py-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <Badge variant="secondary" className="rounded-full">Research Desk</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">Payroll intelligence for Stellar organizations.</h1>
            <p className="text-muted-foreground text-lg leading-8">Coming soon: streaming payroll guides, Soroban integration tutorials, treasury management playbooks, and governance best practices.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {topics.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="sg-glass border">
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
    </div>
  );
}
