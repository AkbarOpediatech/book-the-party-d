import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { Select } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import ICBackdrop from '/public/assets/ic-backgdrop.svg'
import ICFloral from '/public/assets/ic-floral.svg'
import ICTable from '/public/assets/ic-table.svg'

const ListingForm = () => {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <form className="space-y-5">
        <input type="text" className="input w-full" placeholder="Main title of listing" />
        <textarea className="input h-28 w-full" placeholder="Write description about the listing"></textarea>
        <Select
          className="input bg-icon-arrowdown w-full max-w-40 appearance-none bg-no-repeat text-sm text-clr-36 focus:outline-none"
          name="status"
          aria-label="location"
          style={{ backgroundPosition: 'right 10px center' }}
        >
          <option value="Select Location" className="text-sm text-clr-36">
            Select Location
          </option>
          <option value="Select Location" className="text-sm text-clr-36">
            Sydney
          </option>
          <option value="Select Location" className="text-sm text-clr-36">
            Columbia
          </option>
          <option value="Select Location" className="text-sm text-clr-36">
            America
          </option>
        </Select>

        {/* Set availability */}
        <div>
          <input className="input" type="date" />
        </div>

        {/* Add more details */}
        <div className="flex flex-wrap items-center gap-5">
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            2 hours food truck <span className={'block h-2 w-2 rounded-full bg-clr-fb'}></span>
          </button>
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            2 hours food truck <span className={'block h-2 w-2 rounded-full bg-clr-fb'}></span>
          </button>
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            Add more details <PlusIcon className="size-5" />
          </button>
        </div>

        {/* category */}
        <div className="flex flex-wrap gap-5">
          <Select
            className="input bg-icon-arrowdown w-full max-w-40 appearance-none bg-no-repeat text-sm text-clr-36 focus:outline-none"
            name="category"
            aria-label="category"
            style={{ backgroundPosition: 'right 10px center' }}
          >
            <option value="Select Location" className="text-sm text-clr-36">
              Category
            </option>
            <option value="Select Location" className="text-sm text-clr-36">
              Sydney
            </option>
            <option value="Select Location" className="text-sm text-clr-36">
              Columbia
            </option>
            <option value="Select Location" className="text-sm text-clr-36">
              America
            </option>
          </Select>

          <Select
            className="input bg-icon-arrowdown w-full max-w-40 appearance-none bg-no-repeat text-sm text-clr-36 focus:outline-none"
            name="subcategory"
            aria-label="subcategory"
            style={{ backgroundPosition: 'right 10px center' }}
          >
            <option value="Select Location" className="text-sm text-clr-36">
              Sub-category
            </option>
            <option value="Select Location" className="text-sm text-clr-36">
              Sydney
            </option>
            <option value="Select Location" className="text-sm text-clr-36">
              Columbia
            </option>
            <option value="Select Location" className="text-sm text-clr-36">
              America
            </option>
          </Select>
        </div>

        {/* Add more inclusions */}
        <div className="flex flex-wrap items-center gap-5">
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            2 hours food truck <Image width={24} height={24} src={ICFloral} alt="icon" />
          </button>
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            2 hours food truck <Image width={24} height={24} src={ICTable} alt="icon" />
          </button>
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            2 hours food truck <Image width={24} height={24} src={ICBackdrop} alt="icon" />
          </button>
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            Add more details <PlusIcon className="size-5" />
          </button>
        </div>

        {/* add pricing */}
        <div className="flex flex-wrap items-center gap-5">
          <button className="input flex items-center gap-2 text-base text-clr-ab">Add Price</button>
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            Security Deposit Amount
          </button>
        </div>

        {/* Upload photos */}
        <div className="flex items-center gap-5">
          <button className="input flex items-center gap-2 text-base text-clr-ab">
            Upload photos <PlusIcon className="size-5" />
          </button>
        </div>

        {/* Upload item */}
        <DashboardButton type="button" name="Upload item" className="text-sm" />

        {/* Submit listing */}
        <DashboardButton type="button" name="Submit listing" className="text-sm" />
      </form>
    </div>
  )
}

export default ListingForm
