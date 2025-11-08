import { Metadata } from 'next'
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { GROUPS_DATA } from "@/lib/data/conference"
import { Users, User, FileText, ListChecks } from "lucide-react"

export const metadata: Metadata = {
  title: '組別資訊',
  description: '了解 DDDTW 2025 年會各組別的職責與聯絡窗口，包括報到組、引導組、技術組、場地組。',
}

export default function GroupsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
      <Header />

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">年會組別資訊</h1>
            <p className="text-lg text-gray-200">
              了解各組別的職責與聯絡窗口，如有任何問題歡迎聯繫對應組別
            </p>
          </div>

          {/* Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GROUPS_DATA.map((group, index) => (
              <div
                key={group.name}
                className="bg-slate-100/95 rounded-lg p-6 backdrop-blur-sm shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              >
                {/* Group Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-800">{group.name}</h2>
                    <div className="flex items-center space-x-2 text-slate-600">
                      <User className="w-4 h-4" />
                      <span className="text-sm">聯絡人：{group.contact}</span>
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="mb-4">
                  <div className="flex items-start space-x-2 mb-2">
                    <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed">{group.summary}</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <ListChecks className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-slate-800">主要職責</h3>
                  </div>
                  <ul className="space-y-2">
                    {group.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-slate-700">
                        <span className="text-blue-600 mt-1.5">•</span>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-blue-800/50 rounded-lg p-6 backdrop-blur-sm text-center">
            <p className="text-gray-200">
              如有任何問題或需要協助，請聯繫對應組別的聯絡人。我們將竭誠為您服務！
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

