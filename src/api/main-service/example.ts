import { mainService } from '@/api/config/main-service'

const exampleMainService = {
  getExample() {
    return mainService.get({ url: `/example` })
  }
}

export default exampleMainService
