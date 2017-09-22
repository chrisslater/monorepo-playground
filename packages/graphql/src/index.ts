import 'reflect-metadata'
import { container } from './container'
import { IApplication, Types } from './types'

const application = container.get<IApplication>(Types.Application)

application.run()
