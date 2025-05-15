import { DashboardHeader } from "@/components/dashboard-header"
import { TransactionForm } from "@/components/transaction-form"
import { TransactionList } from "@/components/transaction-list"
import { OverviewCards } from "@/components/overview-cards"
import { SpendingChart } from "@/components/spending-chart"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <div className="lg:col-span-2">
          <OverviewCards />
          <div className="mt-6">
            <SpendingChart />
          </div>
        </div>
        <div className="space-y-6">
          <TransactionForm />
          <TransactionList />
        </div>
      </div>
    </main>
  )
}
