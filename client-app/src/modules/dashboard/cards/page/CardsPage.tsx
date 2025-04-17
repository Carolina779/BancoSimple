"use client"

import { useState } from "react"
import Layout from "@/modules/dashboard/common/components/Layout"
import { CardOverview } from "@/modules/dashboard/cards/components/CardOverview"
import { QuickActions } from "@/modules/dashboard/cards/components/QuickActions"
import { RecentTransactions } from "@/modules/dashboard/cards/components/RecentTransactions"
import { CardTabs } from "@/modules/dashboard/cards/components/CardTabs"
import AccountBalance from "@/modules/dashboard/cards/components/AccountBalance"

export default function CardsPage() {
  const [showTabs, setShowTabs] = useState(false)

  return (
    <Layout>
      <section className="container mx-auto py-4 space-y-4 animate-fade-in">
        {!showTabs ? (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-primary/10 dark:bg-primary/20 rounded-xl p-4 sm:p-6 animate-fade-in">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary mb-2">
                  Mis tarjetas
                </h1>
                <p className="text-sm text-muted-foreground">
                  Administra tus tarjetas, revisa tus saldos y accede rápidamente a acciones comunes.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <CardOverview className="col-span-4" onSeeAll={() => setShowTabs(true)} />
              <div className="col-span-4 md:col-span-2 lg:col-span-3">
                <div className="grid gap-4">
                  <AccountBalance />
                  <QuickActions />
                  <RecentTransactions />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>
            <CardTabs onBack={() => setShowTabs(false)} />
          </div>
        )}
      </section>
    </Layout>
  )
}
