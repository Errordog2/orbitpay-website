"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress, ProgressLabel, ProgressValue } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Clock3, LockKeyhole, type LucideIcon, Vote } from "lucide-react"

const proposals = [
  { action: "Release grant tranche", status: "Approved", threshold: "3/5", amount: "18,400 XLM" },
  { action: "Update signer policy", status: "Voting", threshold: "2/5", amount: "Policy" },
  { action: "Vendor payout", status: "Queued", threshold: "1/3", amount: "2,750 XLM" },
]

export default function ProtocolConsole() {
  return (
    <Card className="sg-glass relative overflow-hidden border shadow-2xl shadow-primary/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      <CardHeader className="border-b">
        <div className="flex items-center justify-between gap-4">
          <div>
            <CardTitle className="text-base">Treasury Command Center</CardTitle>
            <p className="text-muted-foreground mt-1 text-sm">StellarGuard DAO / Mainnet</p>
          </div>
          <Badge variant="secondary">
            <CheckCircle2 data-icon="inline-start" />
            Live on Soroban
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <Tabs defaultValue="treasury" className="gap-5">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="treasury">Treasury</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
            <TabsTrigger value="vesting">Vesting</TabsTrigger>
          </TabsList>
          <TabsContent value="treasury" className="flex flex-col gap-5">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Total balance", "284,920 XLM"],
                ["Approval policy", "3 of 5"],
                ["Pending actions", "07"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border bg-background/50 p-4">
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.2em]">{label}</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight">{value}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border bg-background/50 p-4">
              <Progress value={72}>
                <ProgressLabel>Quarterly governance budget</ProgressLabel>
                <ProgressValue />
              </Progress>
            </div>
            <div className="overflow-hidden rounded-xl border bg-background/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Threshold</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {proposals.map((proposal) => (
                    <TableRow key={proposal.action}>
                      <TableCell className="font-medium">{proposal.action}</TableCell>
                      <TableCell>{proposal.status}</TableCell>
                      <TableCell>{proposal.threshold}</TableCell>
                      <TableCell className="text-right">{proposal.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="governance" className="grid gap-3 sm:grid-cols-2">
            <MiniMetric icon={Vote} title="Active proposals" value="12" />
            <MiniMetric icon={Clock3} title="Avg. approval time" value="4h 18m" />
          </TabsContent>
          <TabsContent value="vesting" className="grid gap-3 sm:grid-cols-2">
            <MiniMetric icon={LockKeyhole} title="Locked schedules" value="34" />
            <MiniMetric icon={CheckCircle2} title="Released this epoch" value="9,200 XLM" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function MiniMetric({ icon: Icon, title, value }: { icon: LucideIcon; title: string; value: string }) {
  return (
    <div className="rounded-xl border bg-background/50 p-5">
      <Icon className="text-primary" />
      <p className="text-muted-foreground mt-4 text-sm">{title}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>
    </div>
  )
}
