import TitleAndBreadCrumbs from '@/app/(dashboard)/components/TitleAndBreadCrumbs'
import { CheckIcon } from '@heroicons/react/16/solid'

const VendorSubscription = () => {
  return (
    <div className="bg-white px-7 py-10">
      <TitleAndBreadCrumbs
        title="Subscription"
        menuitem="Dashboard"
        breadcrumbs="Subscription"
        className="mb-10"
      />
      {/* subscriptions */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-4">
          <div className="group flex h-full w-full flex-col justify-between rounded-lg border-2 border-clr-fb/50 p-6">
            <div className="unused-class">
              <div className="mb-10">
                <h2 className="font-sora mb-1 text-2xl font-semibold text-black">Starter</h2>
                <h1 className="font-sora mb-1 text-3xl font-semibold text-black">$0</h1>
              </div>

              <ul className="mb-7">
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">Submit 2 listing for 3 months</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">Can list in 1 category</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">20% referral fee of sale</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">Limited admin support</p>
                </li>
              </ul>
            </div>

            <button className="w-full rounded border border-black px-5 py-2 text-center text-base font-medium group-hover:bg-black group-hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="group flex h-full w-full flex-col justify-between rounded-lg border-2 border-clr-fb/50 p-6">
            <div className="unused-class">
              <div className="mb-10">
                <h2 className="font-sora mb-1 text-2xl font-semibold text-black">Starter</h2>
                <h1 className="font-sora mb-1 text-3xl font-semibold text-black">$0</h1>
                <p className="font-sora text-sm font-semibold text-black">per user/month, billed monthly</p>
              </div>

              <ul className="mb-7">
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">Submit 2 listing for 3 months</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">Can list in 1 category</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">20% referral fee of sale</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-black">Limited admin support</p>
                </li>
              </ul>
            </div>

            <button className="w-full rounded border border-black px-5 py-2 text-center text-base font-medium group-hover:bg-black group-hover:text-white">
              Get Started
            </button>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="bg-gradient-one group flex h-full w-full flex-col justify-between rounded-lg border-2 border-clr-fb/50 p-6">
            <div className="unused-class">
              <div className="mb-10">
                <h2 className="font-sora mb-1 flex items-center gap-2 text-2xl font-semibold text-white">
                  Pro <span className="rounded bg-slate-50/20 px-2 py-1 text-sm">Most Popular</span>
                </h2>
                <h1 className="font-sora mb-1 text-3xl font-semibold text-white">$79</h1>
                <p className="font-sora text-sm font-semibold text-gray-300">
                  per user/month, billed monthly
                </p>
              </div>

              <ul className="mb-7">
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-white">Submit 2 listing for 3 months</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-white">Can list in 1 category</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-white">20% referral fee of sale</p>
                </li>
                <li className="mb-3 flex items-center gap-3 last:mb-0">
                  <span className="inline-block rounded bg-clr-ff p-1">
                    <CheckIcon className="size-3 text-clr-81" />
                  </span>
                  <p className="font-inter text-sm text-white">Limited admin support</p>
                </li>
              </ul>
            </div>

            <button className="w-full rounded border border-white bg-white px-5 py-2 text-center text-base font-medium text-black hover:border-black hover:bg-black hover:text-white">
              Cancel Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorSubscription
