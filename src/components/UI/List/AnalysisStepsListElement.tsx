import { IAnalysisStep } from '../../../model/analysisStep'
import css from './AnalysisStepsListElement.module.css'
import React, { useContext, useEffect } from 'react'
import { eventManagerContext } from '../../../store/eventContext'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import { COLORS } from "../../../styles"
import { ButtonBase } from "@mui/material"
import expandSvg from '../../../assets/icons/expand.svg'
import minimizeSvg from '../../../assets/icons/minimize.svg'
export interface Props {
    items: IAnalysisStep[]
}

const Connector = (): JSX.Element => (
	<TimelineConnector
		style={{
            maxHeight: '20px'
        }}/>
)

export default function AnalysisStepsListElement(props: Props): JSX.Element {
    const [showMore, setShowMore] = React.useState(props.items.length < 5)
    const ctx = useContext(eventManagerContext)

    const onClick = (event: React.MouseEvent<HTMLDivElement>, item: IAnalysisStep): void => {
        event.preventDefault()
        ctx.jumpToCode(item)
    }

    const hideOverflowText = (text: string, max: number): string => {
        if (text.length > max) {
            return `${text.substring(0, max)}...`
        }

        return text
    }

    const buttonStyle = {
        display: 'flex',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: COLORS.GRAY_600
        },
        '&:before': {
            maxWidth: 0
        }
    }
    const timelineStyle = {
        flex: 1,
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: COLORS.GRAY_600
        },
        '&:before': {
            maxWidth: 0
        }
    }
    const timelineDotStyle = (i: number): any => ({
        display: 'flex',
        width: 20,
        height: 20,
        margin: 0,
        fontSize: 12,
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.WHITE_100,
        backgroundColor: COLORS.GRAY_500,
        marginTop: i === 0 ? '19px' : '0px',
        marginBottom: 0,
        cursor: 'pointer',
        boxShadow: 'none'
    })
    const timelineContentStyle = { display: 'flex', alignItems: 'center', gap: 6 }
    return (
	<Timeline
		style={{ display: 'flex', justifyContent: 'left', padding: 0 }}>
		{showMore ?
			<>
				{props.items.map((item, i) => (
					<ButtonBase key={i} sx={buttonStyle}>
						<TimelineItem
							sx={timelineStyle}
							onClick={(event): void => {
                            onClick(event, item)
                        }}>
							<TimelineSeparator>
								{i !== 0 && <Connector/>}
								<TimelineDot
									sx={timelineDotStyle(i)}>
									<span>{i + 1}</span>
								</TimelineDot>
								<Connector/>
							</TimelineSeparator>
							<TimelineContent style={timelineContentStyle}>
								<div className={css.flexCenter}>
									<span className={css.row}>
										{item.fileName && hideOverflowText(item.fileName, 30)}
										{item.startRow}:
									</span>
									<span className={css.snippet}>{item.snippet &&
									<div>{hideOverflowText(item.snippet, 100)}</div>}
									</span>
								</div>
							</TimelineContent>
						</TimelineItem>
					</ButtonBase>
            ))}
				<ButtonBase sx={buttonStyle}>
					<TimelineItem
						sx={timelineStyle}
						onClick={(): void => { setShowMore(false) }}>
						<TimelineSeparator>
							<Connector/>
							<TimelineDot
								sx={{ ...timelineDotStyle(1), color: COLORS.WHITE_100, backgroundColor: COLORS.GRAY_100 }}>
								<img width={12} src={minimizeSvg}/>
							</TimelineDot>
						</TimelineSeparator>
						<TimelineContent style={timelineContentStyle}>
							<div className={css.flexCenter}>
								<span className={css.showMoreLabel}>Show less</span>
							</div>
						</TimelineContent>
					</TimelineItem>
				</ButtonBase>
			</> :
			<>
				<ButtonBase sx={buttonStyle}>
					<TimelineItem
						sx={timelineStyle}
						onClick={(event): void => {
                            onClick(event, props.items[0])
                        }}>
						<TimelineSeparator>
							<TimelineDot
								sx={timelineDotStyle(0)}>
								<span>{1}</span>
							</TimelineDot>
							<Connector/>
						</TimelineSeparator>
						<TimelineContent style={timelineContentStyle}>
							<div className={css.flexCenter}>
								<span className={css.row}>
									{props.items[0].fileName && hideOverflowText(props.items[0].fileName, 30)}
									{props.items[0].startRow}:
								</span>
								<span className={css.snippet}>{props.items[0].snippet &&
								<div>{hideOverflowText(props.items[0].snippet, 100)}</div>}
								</span>
							</div>
						</TimelineContent>
					</TimelineItem>
				</ButtonBase>
				<ButtonBase sx={buttonStyle}>
					<TimelineItem
						sx={timelineStyle}
						onClick={(): void => { setShowMore(true) }}>
						<TimelineSeparator>
							<Connector/>
							<TimelineDot
								sx={{ ...timelineDotStyle(1), color: COLORS.WHITE_100, backgroundColor: COLORS.GRAY_100 }}>
								<img width={12} src={expandSvg}/>
							</TimelineDot>
							<Connector />
						</TimelineSeparator>
						<TimelineContent style={timelineContentStyle}>
							<div className={css.flexCenter}>
								<span className={css.showMoreLabel}>Show All Steps</span>
							</div>
						</TimelineContent>
					</TimelineItem>
				</ButtonBase>
				<ButtonBase sx={buttonStyle}>
					<TimelineItem
						sx={timelineStyle}
						onClick={(event): void => {
                        onClick(event, props.items[props.items.length - 1])
                    }}>
						<TimelineSeparator>
							<Connector/>
							<TimelineDot
								sx={timelineDotStyle(props.items.length - 1)}>
								<span>{props.items.length}</span>
							</TimelineDot>
						</TimelineSeparator>
						<TimelineContent style={timelineContentStyle}>
							<div className={css.flexCenter}>
								<span className={css.row}>
									{props.items[props.items.length - 1]?.fileName && hideOverflowText(props.items[props.items.length - 1]?.fileName ?? '', 30)}
									{props.items[props.items.length - 1]?.startRow}:
								</span>
								<span className={css.snippet}>{props.items[0].snippet &&
								<div>{hideOverflowText(props.items[0].snippet, 100)}</div>}
								</span>
							</div>
						</TimelineContent>
					</TimelineItem>
				</ButtonBase>
			</>}
	</Timeline>
)
}
