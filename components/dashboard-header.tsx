import { Wallet } from "lucide-react"

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Wallet className="h-6 w-6 text-emerald-500" />
        <h1 className="text-2xl font-bold tracking-tight">Finanças Pessoais</h1>
      </div>
      <p className="text-muted-foreground">Gerencie suas finanças pessoais de forma simples e eficiente.</p>
    </div>
  )
}
