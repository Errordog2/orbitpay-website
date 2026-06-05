'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What is OrbitPay?',
            answer: 'OrbitPay is a decentralized payroll protocol on Stellar Soroban that enables organizations to stream salaries continuously, manage multi-sig treasuries, set up token vesting, and govern spending via DAO proposals — all on-chain without intermediaries.',
        },
        {
            id: 'item-2',
            question: 'How does salary streaming work?',
            answer: 'You create a payment stream specifying recipient, token, amount, start time, and end time. Tokens accrue continuously per second, and employees can claim their accrued salary at any time. The protocol enforces the streaming rules entirely on-chain.',
        },
        {
            id: 'item-3',
            question: 'Can I pay multiple employees at once?',
            answer: 'Yes! The batch stream feature lets you create streams for your entire workforce in a single Soroban transaction. No per-employee gas fees, no manual reconciliation — just one transaction to pay everyone.',
        },
        {
            id: 'item-4',
            question: 'Is it fully on-chain?',
            answer: 'Yes. All payroll streams, treasury withdrawals, vesting schedules, and governance votes execute directly on the Stellar network via Soroban smart contracts. Every action emits on-chain events for full auditability.',
        },
        {
            id: 'item-5',
            question: 'What wallets are supported?',
            answer: 'OrbitPay works with Freighter, LOBSTR, Albedo, Rabet, xBull, and any Stellar-compatible wallet that supports Soroban smart contract interactions. We recommend Freighter for the best experience.',
        },
    ]

    return (
        <section id="faq" className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-muted-foreground mt-4 text-balance">
                        Discover quick and comprehensive answers to common questions about OrbitPay.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can&apos;t find what you&apos;re looking for? Check the{' '}
                        <Link
                            href="https://github.com/OrbitPay-Co/orbitpay-docs"
                            className="text-primary font-medium hover:underline">
                            documentation
                        </Link>
                        {' '}or open an issue on{' '}
                        <Link
                            href="https://github.com/OrbitPay-Co"
                            className="text-primary font-medium hover:underline">
                            GitHub
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    )
}
