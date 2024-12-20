import DashboardButton from '@/app/(dashboard)/components/DashboardButton'
import { useAddCategoryMutation } from '@/redux/features/categories/apiSlice'
import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import ImageUpload from './ImageUpload'

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (category: { title: string; description: string; icon: string; image: File | null }) => void
}

export default function CategoryModal({ isOpen, onClose, onSubmit }: CategoryModalProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [addCategory] = useAddCategoryMutation()

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()

  //   // console.log('Title:', title)
  //   // console.log('Description:', description)
  //   // console.log('Icon:', icon)
  //   // if (image) {
  //   //   console.log('Image:', image.name)
  //   // }

  //   // onSubmit({ title, description, icon, image })
  //   console.log({ title, description, icon, image })
  //   onClose()
  // }

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   let featuredImage = ''
  //   if (image) {
  //     const formData = new FormData()
  //     formData.append('media', image)
  //     console.log("formData", formData)
  //     try {
  //       const uploadedImage = await addCategory(formData).unwrap()
  //       featuredImage = uploadedImage?.sid || '' // Adjust based on your API's response
  //     } catch (error) {
  //       console.error('Image upload failed:', error)
  //       return
  //     }
  //   }

  //   const newCategory = {
  //     title,
  //     description,
  //     icon,
  //     featured_image: featuredImage
  //   }
  //   console.log(newCategory)

  //   try {
  //     await addCategory(newCategory).unwrap()
  //     onClose()
  //   } catch (error) {
  //     console.error('Failed to add category:', error)
  //   }
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newCategory = {
      title,
      description,
      icon,
      featured_image: image
    }

    const formData = new FormData()

    formData.append('title', newCategory.title || 'Demo')
    formData.append('description', newCategory.description || 'Demo descroiption')
    formData.append('icon', icon)
    formData.append('featured_image', newCategory.featured_image || '')

    console.log('newCategory', newCategory)
    console.log('FormData:', Array.from(formData.entries()))

    try {
      const response = await addCategory(formData).unwrap()
      onClose()
    } catch (error) {
      console.error('Failed to add category:', error)
    }
  }

  const handleImageUpload = (file: File | null) => {
    setImage(file)
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-6">
          <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
            Add New Category
          </Dialog.Title>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                maxLength={20}
                onChange={e => setTitle(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                value={description}
                maxLength={50}
                onChange={e => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                rows={3}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
                Icon Name
              </label>
              <select
                id="icon"
                onChange={e => setIcon(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                defaultValue="icon"
                required
              >
                <option value="icon" disabled>
                  Select an icon
                </option>
                <option value="one">ICPackage</option>
                <option value="two">ICDisplay</option>
                <option value="three">ICTableSetting</option>
                <option value="three">ICVehicle</option>
                <option value="three">ICFood</option>
                <option value="three">ICVisual</option>
                <option value="three">ICOutdoor</option>
                <option value="three">ICKid</option>
              </select>
            </div>
            <ImageUpload onUpload={handleImageUpload} onChange={handleImageUpload} />

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <DashboardButton name="Add Category" type="button" />
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
