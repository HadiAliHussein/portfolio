import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faComputer, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faAmazonPay, faDev, faUpwork } from "@fortawesome/free-brands-svg-icons";

function Timeline() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>IT-Experience</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Planned 2026 - 2028"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">M.Sc. Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Stuttgart, Germany</h4>
            <p>
              IT-Security
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc. Computer Science & CSV (Dual Student)</h3>
            <h4 className="vertical-timeline-element-subtitle">Lörrach, Germany | Basel, Switzerland</h4>
            <p>
              Full-stack Development, API Development, Linux, CI/CD, DevOps, Artificial Intelligence, Web3 & Consensus Mechanisms
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Computer System Validation (Intern)</h3>
            <h4 className="vertical-timeline-element-subtitle">Basel, Switzerland</h4>
            <p>
              GMP, ISO27001, GAMP5, Cryptography
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faDev} />}
          >
            <h3 className="vertical-timeline-element-title">Hobby-Developer & Freelancer</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Python, C / C# / C++, Java / JS, VBA
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;