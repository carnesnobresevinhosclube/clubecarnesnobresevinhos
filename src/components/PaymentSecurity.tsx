const PaymentSecurity = () => {
  return (
    <section className="bg-background border-t border-border/60">
      <div className="container px-4 py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-3">Formas de pagamento</h3>
          <div className="flex flex-wrap items-center gap-3">
            <img src="/payments-mastercard.png" alt="Mastercard" className="h-8 w-auto object-contain" />
            <img src="/payments-visa.png" alt="Visa" className="h-8 w-auto object-contain" />
            <img src="/payments-elo.png" alt="Elo" className="h-8 w-auto object-contain" />
            <img src="/payments-diners.png" alt="Diners Club" className="h-8 w-auto object-contain" />
            <img src="/payments-amex.png" alt="American Express" className="h-8 w-auto object-contain" />
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end md:text-right">
          <div className="rounded-xl bg-red-900 px-4 py-3 text-xs sm:text-sm text-white max-w-md flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-extrabold leading-none">18+</span>
            <p className="leading-snug">É proibida a venda de bebida alcoólica para menores de 18 anos.</p>
          </div>
          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <div className="text-right">
              <p className="font-semibold">Segurança</p>
              <p className="text-muted-foreground">Site seguro</p>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-emerald-500/70 bg-emerald-900/20 px-3 py-1">
              <span className="inline-block h-4 w-4 rounded-full bg-emerald-500" />
              <span className="text-xs font-medium text-emerald-200">Protegido pelo Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSecurity;

