import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-16">
        <Link href="/">
          <Button variant="ghost" className="mb-8 flex items-center text-orange-600">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Cookie Policy
          </h1>

          <div className="prose prose-orange max-w-none">
            <p className="text-gray-600 mb-4">Last updated: June 1, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">1. What are cookies?</h2>
            <p className="text-gray-600 mb-4">
              Cookies are small text files that are stored on your device when you visit a website or use an
              application. They help remember your preferences and allow websites and applications to function more
              efficiently.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">2. How we use cookies</h2>
            <p className="text-gray-600 mb-4">At FoodScan AI, we use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>Remember your preferences and settings</li>
              <li>Keep your session active while using the application</li>
              <li>Collect information about how you interact with our application</li>
              <li>Improve the performance and functionality of the application</li>
              <li>Provide personalized features based on your usage</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">3. Types of cookies we use</h2>

            <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Essential cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies are necessary for the basic functioning of our application. They allow you to navigate and
              use essential features such as secure areas and user preferences.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Performance cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies help us understand how users interact with our application by collecting anonymous
              information about which pages they visit and if they encounter errors.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Functionality cookies</h3>
            <p className="text-gray-600 mb-4">
              These cookies allow our application to remember choices you make (such as your username, language, or
              region) and provide enhanced and more personal features.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Analytics cookies</h3>
            <p className="text-gray-600 mb-4">
              We use analytics tools that employ cookies to collect information about how users use our application.
              This helps us improve how our application works.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">4. Cookie control</h2>
            <p className="text-gray-600 mb-4">
              Most mobile devices allow you to control cookies through your browser or device settings. However, if you
              reject cookies, some parts of our application may not function properly.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">5. Third-party cookies</h2>
            <p className="text-gray-600 mb-4">
              Some of our analytics and advertising partners may use cookies in our application. We have no control over
              these third-party cookies, so we recommend that you consult the privacy policies of these third parties
              for more information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">6. Changes to our cookie policy</h2>
            <p className="text-gray-600 mb-4">
              We may update our Cookie Policy periodically. We will notify you of any changes by posting the new Cookie
              Policy on this page and, when appropriate, through the application.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">7. Contact</h2>
            <p className="text-gray-600 mb-4">If you have questions about our Cookie Policy, contact us at:</p>
            <p className="text-gray-600 mb-4">
              Email: privacy@foodscanai.com
              <br />
              Address: 123 Main Street, City
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
