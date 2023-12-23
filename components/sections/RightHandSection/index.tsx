import FeatureShowCaseItem from "@/components/FeatureShowCaseItem";

const RightHandSection = () => {
  return (
    <div className="w-1/5 sticky top-0 right-0 max-h-screen overflow-y-auto no-scrollbar pt-36 pl-8 pb-16">
      <div className="flex flex-col gap-16">
        <FeatureShowCaseItem
          title="Παραγγελίες"
          subtitle="Καμία παραγγελία σε εξέλιξη μέσω Skroutz."
          button={{
            title: "Όλες οι παραγγελίες",
            href: "/account/orders",
          }}
        />
        <FeatureShowCaseItem
          title="Τώρα και τα ψώνια σου μέσω Skroutz!"
          subtitle="Τα αγαπημένα σου supermarket είναι εδώ για να κάνεις τα ψώνια της εβδομάδας πιο εύκολα & γρήγορα!"
          showCases={[
            {
              src: "https://a.scdn.gr/assets/schwartz/supermarkets/mymarket_logo_horizontal_v2.png",
              backgroundColor:
                "rgba(19,121,191,0.08)",
            },
            {
              src: "https://c.scdn.gr/assets/schwartz/supermarkets/efresh_logo_horizontal_v2.png",
              backgroundColor:
                "rgba(135,192,49,0.13)",
            },
          ]}
        />
        <FeatureShowCaseItem
          image={{
            src: "https://d.scdn.gr/assets/schwartz/timeline/wallet_promo-ccd479c1f12318c15b651dabfadf6d58.svg",
            alt: "skroutz wallet",
          }}
          title="Αναβάθμισε την εμπειρία σου!"
          subtitle="Χρησιμοποίησε Skroutz Wallet στις αγορές σου και κέρδισε πραγματικά χρήματα!"
          button={{
            title: "Δες το λογαριασμό σου",
            href: "/account/orders",
          }}
        />
        <FeatureShowCaseItem
          image={{
            src: "https://c.scdn.gr/assets/schwartz/timeline/plus_promo/promo_page-e8904b32cce1642e4133ff5a9889969c.png",
            alt: "plus deals",
          }}
          title="Προσφορές για σένα!"
          subtitle="Μη χάσεις τις χαμηλότερες τιμές, και επωφελήσου από τα καλύτερα deals και κουπόνια μόνο για σένα!"
          button={{
            title: "Πρόλαβέ τες",
            href: "/account/orders",
          }}
        />
        <FeatureShowCaseItem
          image={{
            src: "https://c.scdn.gr/assets/schwartz/timeline/merchants_promo-35e7d668313f6df68ffee5d4580510ef.png",
            alt: "greet possible admin",
          }}
          title="Έχεις κατάστημα; Βάλ’ το στο Skroutz!"
          subtitle="Ξεκίνα να πουλάς online και δες την απόδοση της επιχείρησής σου να εκτοξεύεται!"
          button={{
            title: "Γίνε συνεργάτης",
            href: "/account/orders",
          }}
        />
      </div>
    </div>
  );
};

export default RightHandSection;
