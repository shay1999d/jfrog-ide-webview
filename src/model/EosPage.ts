import { PageType } from './pageType'

export interface IEosPage {
  pageType: PageType.Eos;
  header: string
  location: IAnalysisStep
  description?: string
  remediation?: string[]
  foundText?: string
  analysisStep? :IAnalysisStep[]
}
export interface IAnalysisStep {
  file: string
  row: number
  colum: number
}