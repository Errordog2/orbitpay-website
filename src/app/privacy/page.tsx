export default function PrivacyPage() {
  return (
    <div className="pt-14">
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          <h1 className="text-4xl font-semibold lg:text-5xl">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: June 2026
          </p>

          <div className="space-y-8 prose prose-zinc dark:prose-invert max-w-none">
            <section>
              <h2 className="text-xl font-semibold">Information Collection</h2>
              <p className="mt-3 text-muted-foreground">
                OrbitPay is a trustless, non-custodial protocol. We do not
                collect, store, or process personal identifiable information
                (PII) such as names, email addresses, or physical addresses. When
                you interact with the protocol, the only data processed is your
                Stellar public key, which is inherently public on the Stellar
                blockchain.
              </p>
              <p className="mt-3 text-muted-foreground">
                Our frontend application may collect anonymous usage analytics
                (e.g., page views, feature interactions) through self-hosted or
                privacy-respecting tools. No wallet addresses are linked to
                analytics data. We may also use local storage in your browser
                solely to persist UI preferences (e.g., dark mode).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Use of Information</h2>
              <p className="mt-3 text-muted-foreground">
                Any anonymous usage data collected is used exclusively to improve
                the OrbitPay user experience — identifying popular features,
                fixing bugs, and optimizing performance. We do not sell, share,
                or monetize any user data. We do not use your data for targeted
                advertising, profiling, or automated decision-making.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Data Security</h2>
              <p className="mt-3 text-muted-foreground">
                Because OrbitPay is non-custodial, you retain full control of
                your private keys at all times. Private keys are never
                transmitted to or stored on our servers. All smart contract
                interactions occur directly between your wallet and the Stellar
                Soroban network. The protocol&apos;s smart contracts are
                open-source and verifiable on-chain, ensuring complete
                transparency.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Contact</h2>
              <p className="mt-3 text-muted-foreground">
                If you have questions or concerns about this Privacy Policy,
                please open an issue in our{" "}
                <a
                  href="https://github.com/OrbitPay-Co/orbitpay-docs"
                  className="underline"
                >
                  GitHub repository
                </a>{" "}
                or reach out to the team via official OrbitPay community
                channels.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
