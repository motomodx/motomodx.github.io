import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Hi! My name is Ritul Sonania, I have 14 years of IT industry experience, I have been working with Amdocs.
          </p>
          <p>
            this is a trial website.
          </p>
          <p>
            NA 
          </p>
          {close}
        </article>

        <article
          id="experience"
          className={`${this.props.article === 'experience' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <b>Discover Financial Services </b> | Riverwoods, Illinois <br />
          Data Engineer &bull; September 2020 - Now
            <ul>
              <li>Continuing work from internship on Cloud Data Enablement team</li>
              <li>Started full-time in September 2020</li>
            </ul>
          Data Engineering Intern &bull; May 2019 - August 2019 
						<ul>
							<li>Worked on an Agile Software Development team as part of Cloud Data Enablement</li> 
							<li>Designed and implemented an AWS Lambda function which migrates files between S3 buckets</li>
							<li>Created centralized documentation with a Jenkins pipeline for automated deployments</li>
						</ul>
          <b>Illinois Wesleyan University </b> | Bloomington, Illinois <br />
            Teaching Assistant: CS125 - Intro to Data Science &bull; February 2020 - April 2020 
            <ul>
              <li>Assist students with Python, Pandas, NumPy, and various other Data Science tools</li>
            </ul>
					<b>Geneva National Resort </b> | Lake Geneva, Wisconsin <br />
          Assistant Golf Professional &bull; May 2018 - August 2018
						<ul>
							<li>One of four interns selected to assist with management and operation of 54-hole semi-private golf resort</li>
						</ul>
          {close}
        </article>

        <article
          id="education"
          className={`${this.props.article === 'education' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Education</h2>  
								<p><b>Illinois Wesleyan University - </b>B.S. Computer Science
                <ul>
									<li>Minor in Data Science</li>
									<li>Men's Golf Team - 2019 NCAA DIII National Champions</li>
									<li>Member of Student-Athlete Advisory Committee (SAAC)</li>
                </ul>
                </p>
								<b>Coursework</b>
								<ul>
									<li>Algorithm Design and Analysis</li>
									<li>Applied Data Analysis</li>
									<li>Artificial Intelligence</li>
									<li>Calculus I, II, III</li>
                  <li>Capstone: Data Science</li>
									<li>Computer Networking</li>
                  <li>Computer Organization and Architecture</li>
									<li>Database Systems</li>
                  <li>Discrete Math</li>
                  <li>Linear Algebra</li>
                  <li>Mathematical Proofs</li>
									<li>Models of Computing</li>
                  <li>Probability</li>
									<li>Programming Languages</li>
                  <li>Sets, Logic, Recursion</li>
									<li>Software Development</li>
								</ul>
          {close}
        </article>

        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Personal Projects</h2>  
            <h3>Data Analysis</h3>
            <p><b><a href="https://github.com/jonathannocek/twitter-analysis" target="_blank">Twitter Analysis:</a></b> Real-time streaming and analysis of Tweets 
              <ul>
                <li>Python</li>
                <li>AWS S3, EC2, Kinesis, Lambda, Comprehend</li>
                <li>Elasticsearch</li>
                <li>Kibana</li>
              </ul>
            </p>

            <p><b><a href="https://github.com/jonathannocek/pga-data-analysis" target="_blank">PGA TOUR Data Analysis:</a></b> What separates the best players on Tour? 
              <ul>
                <li>Python</li>
                <li>Pandas</li>
                <li>NumPy</li> 
                <li>Matplotlib</li>
                <li>Seaborn</li>
              </ul>
            </p>
          <h3>Web Development</h3>
            <p>
              <b><a href="https://github.com/jonathannocek/personal-website" target="_blank">Personal Website:</a></b> Hosted using AWS S3 and CloudFront
                <ul>
                  <li>GatsbyJS</li>
                  <li>HTML, CSS</li>
                  <li>S3</li>
                  <li>CloudFront</li>
                  <li>Route 53</li>
                </ul>
            </p>
          {close}
        </article>

        <article
          id="interests"
          className={`${this.props.article === 'interests' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 class="major">Interests</h2>  
            <h3>Golf</h3>
              <p>
                During college, I was a member of the Men's Golf Team at Illinois Wesleyan University where our team
                captured the program's first NCAA DIII Men's Golf Championship in Lexington, Kentucky. I am still an avid
                golfer to this day and have became interested in golf course architecture. Some of the items on my golf 
                bucket list include:
                <li>Bandon, Oregon Golf Trip</li>
                <li>Scotland Golf Trip</li>
                <li>The Masters</li>
              </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            Click on one of the icons below to find my Linkedin, Email, GitHub, or Resume.
          </p>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/jonathan-nocek-6a0615152/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a href="mailto:jnocek@iwu.edu" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonathannocek"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jonathannocek/personal-website/blob/master/images/jonathan_nocek.pdf"
                className="icon fa-file-text"
              >
                <span className="label">Resume</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
