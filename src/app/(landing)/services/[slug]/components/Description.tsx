import type { ServiceItem } from '@/redux/features/services/apiSlice'

type IProps = {
  singleService: ServiceItem | undefined
}

const Description: React.FC<IProps> = ({ singleService }) => {
  return (
    <>
      {singleService?.description && (
        <div className="prose" dangerouslySetInnerHTML={{ __html: singleService.description }} />
      )}
    </>
  )
}

export default Description
