import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css";

function Experience() {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor="#6B705C">
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2008 - 2020"
                    iconStyle={{ background: "#A5A58D", color: "#FFFEE2" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        High School
                    </h3>
                    <p>
                        59th Athens General HighSchool
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2010 - 2017"
                    iconStyle={{ background: "#DDBEA9", color: "#FFFEE2" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Languages
                    </h3>
                    <p>
                        Certificate of Competency in English - ECCE
                    </p>
                    <p>
                        Certificate of Proficiency in English - ECPE
                    </p>
                    <p>
                        Native Languages : Greek, Albanian
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2020 - Present"
                    iconStyle={{ background: "#B7B7A4", color: "#FFFEE2" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        University
                    </h3>
                    <p>
                        BSc (Hons) Commputer Science at University of East London
                        <p>(Metropolitan College in Greece, Athens)</p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="12/2021 - 03/2022"
                    iconStyle={{ background: "#DDBEA9", color: "#FFFEE2" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Work
                    </h3>
                    <p>
                        Worked at VLWare Company (Part-Time) as a FrontEnd Developer and Game Developer
                        <p>
                            ReactJS and Unity(C#)
                        </p>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className='vertical-timeline-element--education'
                    date="2020 - 2022"
                    iconStyle={{ background: "#A5A58D", color: "#FFFEE2" }}
                    icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>
                        Work
                    </h3>
                    <p>
                        Worked as an Employee at Flori Flowers as Costum Service
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;