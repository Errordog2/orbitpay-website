import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "For teams validating payroll on Stellar.",
    features: ["Up to 5 employees", "3 active streams", "Basic analytics", "Community support"],
    variant: "outline" as const,
  },
  {
    name: "Pro",
    price: "$49/mo",
    description: "For growing teams with recurring payroll needs.",
    features: ["Unlimited employees", "Batch payroll creation", "Advanced analytics", "Keeper auto-billing", "Priority support", "API access"],
    variant: "default" as const,
    featured: true,
  },
  {
    name: "Protocol",
    price: "Custom",
    description: "For grant programs, foundations, and ecosystem-wide payroll.",
    features: ["Dedicated onboarding", "Custom governance workflows", "Indexer support", "Security reviews", "Private support channel"],
    variant: "outline" as const,
  },
];

export default function Pricing() {
  return (
    <section className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Badge variant="secondary" className="rounded-full">Pricing</Badge>
          <h1 className="text-balance text-4xl font-semibold tracking-tight lg:text-6xl">Simple, transparent pricing for payroll teams.</h1>
          <p className="text-muted-foreground text-lg leading-8">Choose the plan that fits your team. All plans include full on-chain transparency and non-custodial payroll controls.</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="sg-glass relative flex border">
              {plan.featured ? (
                <Badge className="absolute right-5 top-5">
                  Featured
                </Badge>
              ) : null}
              <CardHeader className="gap-5">
                <div>
                  <CardTitle>{plan.name}</CardTitle>
                  <p className="text-muted-foreground mt-2 leading-7">{plan.description}</p>
                </div>
                <div>
                  <span className="text-5xl font-semibold tracking-tight">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="flex flex-col gap-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.variant} render={<Link href="#" />} nativeButton={false}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
