export default function TermsPage() {
  return (
    <div className="pt-14">
      <section className="py-16 md:py-32">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          <h1 className="text-4xl font-semibold lg:text-5xl">Terms of Service</h1>
          <p className="text-muted-foreground">
            Last updated: June 2026
          </p>

          <div className="space-y-8 prose prose-zinc dark:prose-invert max-w-none">
            <section>
              <h2 className="text-xl font-semibold">Acceptance</h2>
              <p className="mt-3 text-muted-foreground">
                By accessing or using the OrbitPay protocol, website, smart
                contracts, and related software (collectively, the
                &quot;Protocol&quot;), you agree to be bound by these Terms of
                Service. If you do not agree, do not use the Protocol. The
                Protocol is provided on an open-source basis under the MIT
                license.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Use License</h2>
              <p className="mt-3 text-muted-foreground">
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of the Protocol and associated documentation
                files, to use the Protocol without restriction, including without
                limitation the rights to use, copy, modify, merge, publish,
                distribute, sublicense, and/or sell copies of the Protocol,
                subject to the conditions of the MIT License.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Disclaimer</h2>
              <p className="mt-3 text-muted-foreground">
                The Protocol is provided &quot;as is&quot;, without warranty of
                any kind, express or implied, including but not limited to the
                warranties of merchantability, fitness for a particular purpose,
                and non-infringement. In no event shall the authors or copyright
                holders be liable for any claim, damages, or other liability,
                whether in an action of contract, tort, or otherwise, arising
                from, out of, or in connection with the Protocol or the use or
                other dealings in the Protocol.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Limitations</h2>
              <p className="mt-3 text-muted-foreground">
                You acknowledge that blockchain transactions are irreversible and
                that you are solely responsible for your private keys, wallet
                security, and the configuration of your multi-signature
                thresholds and role-based permissions. OrbitPay is
                non-custodial: the Protocol never holds, controls, or has access
                to your funds. You assume full responsibility for all outcomes
                resulting from your use of the Protocol.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold">Governing Law</h2>
              <p className="mt-3 text-muted-foreground">
                These Terms shall be governed by and construed in accordance with
                the laws applicable to open-source software and decentralized
                protocols, without regard to conflict of law principles. Any
                disputes shall be resolved through the OrbitPay community
                governance process where possible, or through the applicable
                jurisdiction as required by law.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
