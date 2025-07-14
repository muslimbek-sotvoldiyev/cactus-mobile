import { AlertTriangle } from "lucide-react"

export function PriceDisclaimer() {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 mb-6">
      <div className="flex items-start gap-2">
        <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
        <div className="text-sm">
          <p className="text-yellow-800 dark:text-yellow-200 font-medium mb-1">Narxlar haqida ma'lumot</p>
          <p className="text-yellow-700 dark:text-yellow-300 text-xs leading-relaxed">
            Bu yerda ko'rsatilgan narxlar taxminiy hisoblanadi. Do'konga tashrif buyurganingizda narxlar sal farq
            qilishi mumkin. Aniq narx va mavjudlik uchun bizga murojaat qiling.
          </p>
        </div>
      </div>
    </div>
  )
}
