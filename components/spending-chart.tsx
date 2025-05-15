"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Dados de exemplo para o gráfico
const chartData = {
  labels: ["Moradia", "Alimentação", "Transporte", "Lazer", "Outros"],
  values: [1200, 800, 300, 250, 150],
  colors: ["rgb(16, 185, 129)", "rgb(59, 130, 246)", "rgb(249, 115, 22)", "rgb(168, 85, 247)", "rgb(236, 72, 153)"],
}

export function SpendingChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Limpar o canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Configurações do gráfico
    const centerX = canvasRef.current.width / 2
    const centerY = canvasRef.current.height / 2
    const radius = Math.min(centerX, centerY) - 40

    // Calcular o total
    const total = chartData.values.reduce((sum, value) => sum + value, 0)

    // Desenhar o gráfico de pizza
    let startAngle = 0
    chartData.values.forEach((value, index) => {
      const sliceAngle = (2 * Math.PI * value) / total

      // Desenhar o slice
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      // Preencher com a cor
      ctx.fillStyle = chartData.colors[index]
      ctx.fill()

      startAngle += sliceAngle
    })

    // Desenhar a legenda
    const legendY = canvasRef.current.height - 20
    const legendX = 20
    const legendSpacing = canvasRef.current.width / (chartData.labels.length + 1)

    chartData.labels.forEach((label, index) => {
      const x = legendX + index * legendSpacing

      // Desenhar o quadrado colorido
      ctx.fillStyle = chartData.colors[index]
      ctx.fillRect(x, legendY, 10, 10)

      // Desenhar o texto
      ctx.fillStyle = "#000"
      ctx.font = "10px Arial"
      ctx.fillText(label, x + 15, legendY + 8)
    })
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuição de Gastos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-square w-full">
          <canvas ref={canvasRef} width={300} height={300} className="w-full h-full"></canvas>
        </div>
      </CardContent>
    </Card>
  )
}
