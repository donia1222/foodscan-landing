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
            Privacy Policy
          </h1>

          <div className="prose prose-orange max-w-none">
           <p className="text-gray-600 mb-4">Last updated: June 1, 2025</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Introduction</h2>
            <p className="text-gray-600 mb-4">
              This Privacy Policy document details the types of information that are collected and recorded by FoodScan
              AI and how we utilize it.
            </p>
            <p className="text-gray-600 mb-4">
              If you have further questions or require more information about our Privacy Policy, please do not hesitate
              to contact us.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Information Collection and Subscriptions</h2>
            <p className="text-gray-600 mb-4">
              FoodScan AI does not collect personally identifiable information from users. For subscriptions, we use a
              service provider (e.g., RevenueCat), which assigns an anonymous identifier for each user. This identifier
              is not used to personally identify the user.
            </p>
            <p className="text-gray-600 mb-4">
              The information collected for subscriptions is solely for processing payments and managing subscriptions
              efficiently. This information is treated with the highest confidentiality and security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Use of Information</h2>
            <p className="text-gray-600 mb-4">
              We use the anonymous subscription information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>To process payment transactions</li>
              <li>To manage active and expired subscriptions</li>
              <li>To provide technical support and customer assistance</li>
              <li>To enhance the quality of our app and services</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Data Storage</h2>
            <p className="text-gray-600 mb-4">
              Subscription data, while anonymous, is stored securely and is accessible only by authorized personnel and
              our subscription service provider.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Sharing Personal Information</h2>
            <p className="text-gray-600 mb-4">
              We do not share any personally identifiable information because we do not collect such information.
              Anonymous subscription information is not shared with third parties except for the purposes of processing
              payments and managing subscriptions as described.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">User Rights</h2>
            <p className="text-gray-600 mb-4">
              Users may inquire about whether FoodScan AI holds personal data about them, request correction of
              incorrect data, or request deletion of personal data under certain circumstances, even though we do not
              collect personally identifiable data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 mb-4">
              We reserve the right to make changes to this Privacy Policy at any time. If we decide to change our
              privacy policy, we will post those changes on this page.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Security</h2>
            <p className="text-gray-600 mb-4">
              Our company takes reasonable precautions to protect our site and information. For example we restrict
              access to personally identifiable information to employees, contractors and vendors subject to
              non-disclosure requirements.
            </p>
            <p className="text-gray-600 mb-4">
              Our company also uses commonly used practices and technical controls to protect the information in our
              possession or control. These practices and controls include, but are not limited to, encrypting the
              transfer of personal information over the internet, using firewalls and intrusion detection systems and
              maintaining strict technical controls and procedures to ensure data integrity.
            </p>
            <p className="text-gray-600 mb-4">
              We periodically review our processes and systems to verify compliance with industry best practices and to
              ensure the highest level of security for our website.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
              Cookie Policy and Other Similar Tracking Technologies
            </h2>
            <p className="text-gray-600 mb-4">
              When you visit FoodScan AI we may send cookies or other similar tracking technologies to your computer or
              to any other device you use. We use cookies and similar tracking technologies to track user's preferences
              and to know how he uses our services.
            </p>
            <p className="text-gray-600 mb-4">
              A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server
              to a web browser and is stored by the browser. The identifier is then sent back to the server each time
              the browser requests a page from the server.
            </p>
            <p className="text-gray-600 mb-4">
              For further information visit{" "}
              <a href="https://allaboutcookies.org" className="text-orange-600 hover:text-orange-700">
                allaboutcookies.org
              </a>
            </p>

            <h3 className="text-lg font-medium mt-6 mb-3 text-gray-800">Types of Cookies We Use</h3>
            <p className="text-gray-600 mb-4">
              We can use different type of cookie or tracking technologies while you are visiting our website and/or
              application:
            </p>

            <h4 className="text-md font-medium mt-4 mb-2 text-gray-800">Strictly Necessary Cookies</h4>
            <p className="text-gray-600 mb-4">
              These types of cookies enable you to access and browse websites and use their features. Without these
              cookies, services like billing or shopping baskets cannot work properly.
            </p>

            <h4 className="text-md font-medium mt-4 mb-2 text-gray-800">Performance Cookies</h4>
            <p className="text-gray-600 mb-4">
              These cookies collect information and data about how you use our websites and/or application. The data
              collected can be used to optimize our websites and/or applications. These cookies are used to know where
              our visitors and users are coming from. These cookies do not collect information that identifies you
              personally.
            </p>

            <h4 className="text-md font-medium mt-4 mb-2 text-gray-800">Functionality Cookies</h4>
            <p className="text-gray-600 mb-4">
              These cookies allow our website or application to remember your choices. They can be used to memorize your
              localisation, or your preferences such as language settings or font size.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">How to Manage Cookies?</h2>
            <p className="text-gray-600 mb-4">
              You can set your browser not to accept cookies and the above website and/or application tells you how to
              remove cookies from your browser. However some of our websites and/or applications might not work properly
              without the use of cookies.
            </p>
            <p className="text-gray-600 mb-4">
              Here are some of the main explanation on how to delete cookies on your browser:{" "}
              <a
                href="https://support.google.com/chrome/answer/95647"
                className="text-orange-600 hover:text-orange-700"
              >
                Chrome
              </a>
              ;{" "}
              <a
                href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                className="text-orange-600 hover:text-orange-700"
              >
                Firefox
              </a>
              ;{" "}
              <a
                href="https://help.opera.com/en/latest/security-and-privacy/"
                className="text-orange-600 hover:text-orange-700"
              >
                Opera
              </a>
              ;{" "}
              <a
                href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                className="text-orange-600 hover:text-orange-700"
              >
                Internet Explorer
              </a>
              ;{" "}
              <a
                href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                className="text-orange-600 hover:text-orange-700"
              >
                Safari
              </a>
              ; and{" "}
              <a
                href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy"
                className="text-orange-600 hover:text-orange-700"
              >
                Edge
              </a>
              .
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Mobile Devices</h2>
            <p className="text-gray-600 mb-4">
              For mobile devices, if you don't want to receive targeted advertising based on your center of interest
              coming from a mobile application, please check the parameters of the operating system of your mobile
              device and follow these instructions:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li>iOS Users: to enable "Limited Ad Tracking" follow the instructions given by Apple</li>
              <li>
                Android Users: to enable the option "deactivate ad personalisation", follow the instructions given by
                Google on Google Play
              </li>
              <li>
                You might want to download the DAA mobile AppChoices application to control behavioral advertising
                online
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Contact</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions regarding this Privacy Policy, you can contact us:
            </p>
            <p className="text-gray-600 mb-4">Via email: info@lweb.ch</p>

            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Third-Party Services</h2>
            <p className="text-gray-600 mb-4">
              <strong>Terms & policies RevenueCat:</strong>{" "}
              <a href="https://www.revenuecat.com/privacy/" className="text-orange-600 hover:text-orange-700">
                https://www.revenuecat.com/privacy/
              </a>
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Terms & policies OpenAI:</strong>{" "}
              <a href="https://openai.com/policies" className="text-orange-600 hover:text-orange-700">
                https://openai.com/policies
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

