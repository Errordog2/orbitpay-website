import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollText, Users, Wallet, Zap } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Connect Wallet",
    description: "Link Freighter, LOBSTR, or any Stellar wallet. No KYC, no bank account needed.",
    icon: Wallet,
  },
  {
    step: "02",
    title: "Create Payroll",
    description: "Set up salary streams for your team. Choose recipients, amounts, token, and payment period. Create batch streams for your entire workforce in one click.",
    icon: Users,
  },
  {
    step: "03",
    title: "Auto-Stream",
    description: "Tokens accrue continuously from start to end time. The keeper system ensures recurring payments execute automatically.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Claim & Audit",
    description: "Employees claim accrued salary anytime. Every stream, claim, and treasury action is recorded on-chain with full auditability.",
    icon: ScrollText,
  },
];

const events = [
  ["stream.created", "Engineering payroll", "Active"],
  ["salary.claimed", "0x...a1b2", "Claimed"],
  ["stream.cancelled", "Contractor ended", "Finalized"],
  ["batch.created", "15 recipients", "Streaming"],
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex flex-col gap-6 lg:sticky lg:top-24">
          <Badge variant="secondary" className="w-fit rounded-full">How Payroll Works</Badge>
          <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">From wallet connection to streaming salary in minutes.</h2>
          <p className="text-muted-foreground text-lg leading-8">OrbitPay turns payroll into a repeatable on-chain workflow with continuous streaming, batch operations, and full auditability.</p>
          <Card className="border">
            <CardHeader>
              <CardTitle>Live event stream</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {events.map(([event, subject, status]) => (
                    <TableRow key={event}>
                      <TableCell className="font-mono text-xs">{event}</TableCell>
                      <TableCell>{subject}</TableCell>
                      <TableCell>{status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {steps.map(({ step, title, description, icon: Icon }) => (
            <Card key={step} className="border p-2">
              <CardHeader className="gap-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl border bg-background/60 text-primary">
                    <Icon />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">{step}</span>
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
  );
}
