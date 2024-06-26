import { subService } from '@/api/config/sub-service'

const exampleSubService = {
  getExample() {
    return subService.get({ url: `/api` })
  }
}

export default exampleSubService
