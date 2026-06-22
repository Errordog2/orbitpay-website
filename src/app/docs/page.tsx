import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, BookOpen, Code2, Database, FileText, GitBranch, LayoutDashboard } from "lucide-react";

const docLinks = [
  { title: "Smart Contracts", description: "Soroban contracts for payroll streaming, treasury, governance, and token vesting.", href: "https://github.com/OBP-ORG/orbitpay-contracts", icon: Code2 },
  { title: "Backend API", description: "Event indexing, PostgreSQL storage, REST APIs, and analytics surfaces.", href: "https://github.com/OBP-ORG/orbitpay-backend", icon: Database },
  { title: "Frontend Dashboard", description: "Next.js wallet interface for payroll, treasuries, proposals, and vesting schedules.", href: "https://github.com/OBP-ORG/orbitpay-frontend", icon: LayoutDashboard },
  { title: "TypeScript SDK", description: "Client library for integrating OrbitPay payroll and treasury operations in Node.js/TS apps.", href: "https://github.com/OBP-ORG/orbitpay-sdk", icon: FileText },
  { title: "Full Documentation", description: "Guides, issue trackers, contribution workflows, and implementation notes.", href: "https://github.com/OBP-ORG/orbitpay-docs", icon: BookOpen },
  { title: "Organization GitHub", description: "Browse all OrbitPay repositories and contribution entry points.", href: "https://github.com/OBP-ORG", icon: GitBranch },
];

export default function DocsPage() {
  return (
    <div className="pt-16">
      <section className="relative overflow-hidden py-16 md:py-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <Badge variant="secondary" className="rounded-full">Developer Hub</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">Build, audit, and integrate OrbitPay.</h1>
            <p className="text-muted-foreground text-lg leading-8">Protocol documentation is organized around the public GitHub repos so builders can inspect contracts, APIs, frontend flows, and architectural decisions.</p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {docLinks.map(({ title, description, href, icon: Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                <Card className="h-full border transition-colors hover:bg-card/90">
                  <CardHeader className="gap-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/60 text-primary">
                        <Icon />
                      </div>
                      <ArrowUpRight className="text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle>{title}</CardTitle>
                      <CardDescription className="mt-2 leading-7">{description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
