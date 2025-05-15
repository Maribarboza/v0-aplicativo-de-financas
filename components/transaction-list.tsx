"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

// Dados de exemplo para transações
const initialTransactions = [
  {
    id: 1,
    description: "Salário",
    amount: 3500,
    type: "income",
    date: "2025-05-05",
  },
  {
    id: 2,
    description: "Aluguel",
    amount: 1200,
    type: "expense",
    date: "2025-05-10",
  },
  {
    id: 3,
    description: "Supermercado",
    amount: 350,
    type: "expense",
    date: "2025-05-12",
  },
  {
    id: 4,
    description: "Freelance",
    amount: 700,
    type: "income",
    date: "2025-05-15",
  },
  {
    id: 5,
    description: "Conta de luz",
    amount: 150,
    type: "expense",
    date: "2025-05-20",
  },
]

export function TransactionList() {
  const [transactions] = useState(initialTransactions)

  // Função para formatar data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  // Função para formatar valor em reais
  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Transações Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between border-b pb-2">
              <div className="flex items-center gap-2">
                <div className={`rounded-full p-1 ${transaction.type === "income" ? "bg-emerald-100" : "bg-rose-100"}`}>
                  {transaction.type === "income" ? (
                    <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-rose-500" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-xs text-muted-foreground">{formatDate(transaction.date)}</p>
                </div>
              </div>
              <p className={`font-medium ${transaction.type === "income" ? "text-emerald-500" : "text-rose-500"}`}>
                {transaction.type === "income" ? "+" : "-"}
                {formatCurrency(transaction.amount)}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
