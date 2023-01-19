import css from './ContextualAnalysis.module.css'
import List from '../../../../UI/List/List'
import EosListElement from '../../../../UI/List/EosListElement'
import { IAnalysisStep } from '../../../../../model/EosPage'
import Wrapper from '../../../../UI/Wrapper/Wrapper'

export interface Props {
	foundText?: string
	analysisSteps?: IAnalysisStep[]

}
const ContextualAnalysis = (props: Props) => (
	<>
		{props.foundText
		&& <Wrapper headline="WHAT WAS FOUND">
			<div className={css.container}>
				<div className={css.text}>
					{props.foundText}
				</div>
			</div>
		   </Wrapper>}
		{props.analysisSteps
		&& <Wrapper headline="ANALYSIS STEPS">
			<div>
				<List>
					<EosListElement items={props.analysisSteps}/>
				</List>
			</div>
		   </Wrapper>
		}
	</>
)

export default ContextualAnalysis