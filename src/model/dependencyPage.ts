import { ICve } from './cve'
import { IImpactedPath } from './impactedPath'
import { ILicense } from './license'
import { IReference } from './reference'
import { IResearch } from './research'
import { ISeverity } from './severity'

export interface IDependencyPage {
  id: string
  type: string
  name: string
  version: string
  cve?: ICve
  license?: ILicense
  impactedPath: IImpactedPath
  severity: ISeverity
  edited: string
  summary: string
  fixedVersion?: string[]
  infectedVersion?: string[]
  references?: IReference[]
  researchInfo?: IResearch
}