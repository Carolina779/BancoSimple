"use client"
import Layout from "@/modules/dashboard/common/components/Layout"
import { ClientHeader } from "../components/ClientHeader"
import { AccountsSummary } from "../components/AccountsSummary"
import { PremiumBenefits } from "../components/PremiumBenefits"
import { RecentActivity } from "../components/RecentActivity"
import { FinancialInsights } from "../components/FinancialInsights"
import { InvestmentOpportunities } from "../components/InvestmentOpportunities"
import { PremiumAssistant } from "../components/PremiumAssistant"

export default function ClientPremiumDashboardPage() {
  return (
    <Layout>
      <section className="container mx-auto py-4 space-y-4 animate-fade-in">
        {/* Cliente Premium Header */}
        <ClientHeader />

        {/* Resumen de Cuentas */}
        <AccountsSummary />

        {/* Zona superior: Asistente y Análisis financiero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <PremiumAssistant />
          <FinancialInsights />
        </div>

        {/* Zona inferior: Actividad reciente y Beneficios premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RecentActivity />
          <PremiumBenefits />
        </div>

        {/* Oportunidades de inversión */}
        <div>
          <InvestmentOpportunities />
        </div>
      </section>
    </Layout>
  )
}
